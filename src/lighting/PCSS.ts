import * as THREE from 'three';
import { W } from '../core/WorldUniforms';

// Percentage-closer soft shadows on the basic (depth read) shadow path: a
// blocker search sets the penumbra from the receiver-blocker distance, so
// contact shadows are crisp and the shadow of a mast top is soft. Installed
// for the high quality tier before any program compiles.
export function installPCSS(): void {
  const chunk = THREE.ShaderChunk.shadowmap_pars_fragment;
  // The basic (depth-read) getShadow is the last overload taking sampler2D; comments are
  // stripped in production bundles, so locate it by signature, not by marker.
  const sig = /float\s+getShadow\(\s*sampler2D\s+shadowMap\b/g;
  let m: RegExpExecArray | null, start = -1;
  while ((m = sig.exec(chunk))) start = m.index;
  const ret = start >= 0 ? chunk.indexOf('return mix( 1.0, shadow, shadowIntensity );', start) : -1;
  const end = ret >= 0 ? chunk.indexOf('}', ret) + 1 : -1;
  if (start < 0 || end <= 0) { console.error('PCSS: shadow chunk layout unexpected, keeping PCF'); return; }
  const pcss = /* glsl */ `
    uniform float uPcssPenumbra; uniform float uPcssMin; uniform float uPcssSearch;
    float pcssIgn( vec2 p ) { return fract( 52.9829189 * fract( dot( p, vec2( 0.06711056, 0.00583715 ) ) ) ); }
    vec2 pcssVogel( int i, int n, float phi ) { float r = sqrt( ( float( i ) + 0.5 ) / float( n ) ); float th = float( i ) * 2.399963229728653 + phi; return vec2( cos( th ), sin( th ) ) * r; }
    float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
      float shadow = 1.0;
      shadowCoord.xyz /= shadowCoord.w;
      shadowCoord.z += shadowBias;
      bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
      if ( inFrustum && shadowCoord.z <= 1.0 ) {
        vec2 texel = 1.0 / shadowMapSize;
        float phi = pcssIgn( gl_FragCoord.xy ) * 6.2831853;
        float search = max( uPcssSearch, 1.0 );
        float bsum = 0.0, bn = 0.0;
        for ( int i = 0; i < 8; i ++ ) {
          vec2 o = pcssVogel( i, 8, phi ) * texel * search;
          float d = texture2D( shadowMap, shadowCoord.xy + o ).r;
          if ( d < shadowCoord.z ) { bsum += d; bn += 1.0; }
        }
        if ( bn > 0.5 ) {
          float zb = bsum / bn;
          float pen = ( shadowCoord.z - zb ) * uPcssPenumbra;
          float r = clamp( pen, max( uPcssMin, 0.5 ), search );
          float s = 0.0;
          for ( int i = 0; i < 10; i ++ ) {
            vec2 o = pcssVogel( i, 10, phi + 1.7 ) * texel * r;
            float d = texture2D( shadowMap, shadowCoord.xy + o ).r;
            s += step( shadowCoord.z, d );
          }
          shadow = s / 10.0;
        }
      }
      return mix( 1.0, shadow, shadowIntensity );
    }
  `;
  THREE.ShaderChunk.shadowmap_pars_fragment = chunk.slice(0, start) + pcss + chunk.slice(end);
  if (!THREE.ShaderChunk.shadowmap_pars_fragment.includes('uPcssPenumbra')) console.error('PCSS: patch did not apply');
}

export const PCSS_UNIFORMS = { uPcssPenumbra: { value: 100 }, uPcssMin: { value: 1.2 }, uPcssSearch: { value: 14 } };
Object.assign(W, PCSS_UNIFORMS);

// Penumbra in shadow-map texels per unit of normalised depth: depth range (m) x sun
// angular diameter (rad) x texels per metre of the fitted frustum.
export function setPCSSParams(depthRangeM: number, frustumWidthM: number, mapSize: number): void {
  // 4x the true solar diameter: an artistic light size so mast and cliff shadow tips visibly soften
  PCSS_UNIFORMS.uPcssPenumbra.value = depthRangeM * 0.052 * mapSize / frustumWidthM;
  PCSS_UNIFORMS.uPcssSearch.value = Math.min(28, Math.max(6, mapSize / frustumWidthM * 4.0)); // ~2.4 m max penumbra
  PCSS_UNIFORMS.uPcssMin.value = 1.2;
}
