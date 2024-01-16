import { TypeValuesFromObject } from "../../type/mod.ts";

/**
 * This object contains all ideogram control codes.
 * 
 * [Wikipedia](https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_(Select_Graphic_Rendition)_parameters)
 */
const ideogram = {
    RIGHT_SIDE_LINE: '60',
    DOUBLE_RIGHT_SIDE_LINE: '61',
    LEFT_SIDE_LINE: '62',
    DOUBLE_LEFT_SIDE_LINE: '63',
    STRESS_ERROR_MARKING: '64',
    RESET: '65'
} as const;

export default ideogram;

/**
 * This type gets generated from the values of {@linkcode bit4Colors}.
 */
export type Bit8Color = TypeValuesFromObject<typeof ideogram>;
