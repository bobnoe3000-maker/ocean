// Seeded RNG. Same seed = same world on every device.
export class Rng {
  private a: number;
  constructor(seed: number) { this.a = seed >>> 0; }
  next(): number {
    this.a = (this.a + 0x6d2b79f5) >>> 0;
    let t = this.a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }
  range(a: number, b: number): number { return a + (b - a) * this.next(); }
  int(n: number): number { return Math.floor(this.next() * n); }
  pick<T>(arr: T[]): T { return arr[this.int(arr.length)]; }
  fork(salt: number): Rng { return new Rng((this.a ^ Math.imul(salt + 1, 0x9e3779b1)) >>> 0); }
}
