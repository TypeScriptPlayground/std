import { TypeKeysFromObject } from "../../type/mod.ts";

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
    WHITE: '37'
} as const;

export default bit4ForegroundColors;

/**
 * This type gets generated from the values of {@linkcode bit4ForegroundColors}.
 */
export type Bit4ForegroundColor = TypeKeysFromObject<typeof bit4ForegroundColors>;
