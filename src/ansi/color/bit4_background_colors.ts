import { TypeKeysFromObject } from "../../type/mod.ts";

/**
 * This object contains all 4-Bit background color codes.
 * 
 * [Wikipedia](https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit)
 */
const bit4BackgroundColors = {
    BLACK: '40',
    RED: '41',
    GREEN: '42',
    YELLOW: '43',
    BLUE: '44',
    MAGENTA: '45',
    CYAN: '46',
    WHITE: '47'
} as const;

export default bit4BackgroundColors;

/**
 * This type gets generated from the values of {@linkcode bit4BackgroundColors}.
 */
export type Bit4BackgroundColor = TypeKeysFromObject<typeof bit4BackgroundColors>;
