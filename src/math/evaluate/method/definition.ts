export interface Definition {
  /** The function to use for calculating the corresponding result */
  calculateFn: (...args: number[]) => number;
  /** The function to use for checking the input */
  checkFn?: (...args: number[]) => boolean;
}
