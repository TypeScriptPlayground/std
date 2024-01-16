import { TypeValuesFromObject } from "../../type/mod.ts";

/**
 * This object contains all 4-Bit color codes.
 * 
 * [Wikipedia](https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit)
 */
const bit4Colors = {
    FOREGROUND_BLACK: '30',
    FOREGROUND_RED: '31',
    FOREGROUND_GREEN: '32',
    FOREGROUND_YELLOW: '33',
    FOREGROUND_BLUE: '34',
    FOREGROUND_MAGENTA: '35',
    FOREGROUND_CYAN: '36',
    FOREGROUND_WHITE: '37',
    BACKGROUND_BLACK: '40',
    BACKGROUND_RED: '41',
    BACKGROUND_GREEN: '42',
    BACKGROUND_YELLOW: '43',
    BACKGROUND_BLUE: '44',
    BACKGROUND_MAGENTA: '45',
    BACKGROUND_CYAN: '46',
    BACKGROUND_WHITE: '47',
    FOREGROUND_BRIGHT_BLACK: '90',
    FOREGROUND_BRIGHT_RED: '91',
    FOREGROUND_BRIGHT_GREEN: '92',
    FOREGROUND_BRIGHT_YELLOW: '93',
    FOREGROUND_BRIGHT_BLUE: '94',
    FOREGROUND_BRIGHT_MAGENTA: '95',
    FOREGROUND_BRIGHT_CYAN: '96',
    FOREGROUND_BRIGHT_WHITE: '97',
    BACKGROUND_BRIGHT_BLACK: '100',
    BACKGROUND_BRIGHT_RED: '101',
    BACKGROUND_BRIGHT_GREEN: '102',
    BACKGROUND_BRIGHT_YELLOW: '103',
    BACKGROUND_BRIGHT_BLUE: '104',
    BACKGROUND_BRIGHT_MAGENTA: '105',
    BACKGROUND_BRIGHT_CYAN: '106',
    BACKGROUND_BRIGHT_WHITE: '107',
} as const;

export default bit4Colors;

/**
 * This type gets generated from the values of {@linkcode bit4Colors}.
 */
export type Bit4Color = TypeValuesFromObject<typeof bit4Colors>;
