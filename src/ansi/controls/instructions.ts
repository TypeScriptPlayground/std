import type { ValuesFromObject } from "../../type/mod.ts";

/**
 * This object contains all instruction ANSI control codes.
 */
const instructions = {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  E: 'E',
  F: 'F',
  G: 'G',
  H: 'h',
  I: 'I',
  J: 'J',
  K: 'K',
  M: 'm',
  S: 's',
  U: 'u',
  PRIVATE: '?'
} as const;

export default instructions;

/**
 * This type gets generated from the values of {@linkcode instructions}.
 */
export type Instruction = ValuesFromObject<typeof instructions>;

