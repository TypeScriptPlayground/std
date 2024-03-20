import { ValuesFromObject } from "../../../type/mod.ts";
import * as format from '../../formats/mod.ts'

/**
 * This object contains all 4-Bit background color codes.
 * 
 * [Wikipedia](https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit)
 */
const backgroundColorCodes = {
  DEFAULT: format.colorCodes.BACKGROUND_COLOR_DEFAULT,
  RESET: format.colorCodes.RESET,
  BLACK: '40',
  RED: '41',
  GREEN: '42',
  YELLOW: '43',
  BLUE: '44',
  MAGENTA: '45',
  CYAN: '46',
  WHITE: '47',
  BLACK_BRIGHT: '100',
  RED_BRIGHT: '101',
  GREEN_BRIGHT: '102',
  YELLOW_BRIGHT: '103',
  BLUE_BRIGHT: '104',
  MAGENTA_BRIGHT: '105',
  CYAN_BRIGHT: '106',
  WHITE_BRIGHT: '107',
} as const;

export default backgroundColorCodes;

/**
 * This type gets generated from the values of {@linkcode backgroundColorCodes}.
 */
export type BackgroundColorCode = ValuesFromObject<typeof backgroundColorCodes>;
