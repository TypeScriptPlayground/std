import { ValuesFromObject } from "../../../type/mod.ts";

/**
 * This object contains all 4-Bit foreground color codes.
 * 
 * [Wikipedia](https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit)
 */
const foregroundColorCodes = {
  BLACK: '30',
  RED: '31',
  GREEN: '32',
  YELLOW: '33',
  BLUE: '34',
  MAGENTA: '35',
  CYAN: '36',
  WHITE: '37',
  BLACK_BRIGHT: '90',
  RED_BRIGHT: '91',
  GREEN_BRIGHT: '92',
  YELLOW_BRIGHT: '93',
  BLUE_BRIGHT: '94',
  MAGENTA_BRIGHT: '95',
  CYAN_BRIGHT: '96',
  WHITE_BRIGHT: '97',
} as const;

export default foregroundColorCodes;

/**
 * This type gets generated from the values of {@linkcode foregroundColorCodes}.
 */
export type ForegroundColorCode = ValuesFromObject<typeof foregroundColorCodes>;
