import type { Associativity } from "./associativity.ts";

export interface Definition {
  /** The priority of this operator */
  precedence : number,
  /** The direction from which the operator values get parsed */
  associativity : Associativity,
  /** The function to use for calculating the corresponding result */
  calculateFn : (a: number, b: number) => number,
  /** The function to use for checking the input */
  checkFn?: (a: number, b: number) => boolean
}
