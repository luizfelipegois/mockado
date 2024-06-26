export class Randomizer {
  static getRandomElementFromArray<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  static getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}
