import { valuesFromObject } from '../../object/mod.ts';
import { ValuesFromObject } from '../../type/mod.ts';

/**
 * This object contains all tokens.
 */
const tokens = {
  PLUS: '+',
  MINUS: '-',
  MULTIPLY: '*',
  DIVIDE: '/',
  POWER: '^',
  CAPTURE_START: '(',
  CAPTURE_END: ')',
} as const;

export default tokens;

/**
 * This array gets generated from the values of {@linkcode tokens}.
 */
export const tokenValues = valuesFromObject(tokens)

/**
 * This type gets generated from the values of {@linkcode tokens}.
 */
export type Token = ValuesFromObject<typeof tokens>;
