import { TypeValuesFromObject } from "../../type/mod.ts";

/**
 * This object contains all 4-Bit foreground color codes.
 * 
 * [Wikipedia](https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit)
 */
const bit4ForegroundColors = {
    BLACK: '30',
    RED: '31',
    GREEN: '32',
    YELLOW: '33',
    BLUE: '34',
    MAGENTA: '35',
    CYAN: '36',
    WHITE: '37',
    BRIGHT_BLACK: '90',
    BRIGHT_RED: '91',
    BRIGHT_GREEN: '92',
    BRIGHT_YELLOW: '93',
    BRIGHT_BLUE: '94',
    BRIGHT_MAGENTA: '95',
    BRIGHT_CYAN: '96',
    BRIGHT_WHITE: '97'
} as const;

export default bit4ForegroundColors;

/**
 * This type gets generated from the values of {@linkcode bit4ForegroundColors}.
 */
export type Bit4ForegroundColor = TypeValuesFromObject<typeof bit4ForegroundColors>;
