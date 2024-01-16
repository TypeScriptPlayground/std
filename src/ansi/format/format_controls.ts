import { TypeValuesFromObject } from "../../type/mod.ts";

/**
 * This object contains all 8-Bit color codes.
 * 
 * [Wikipedia](https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_(Select_Graphic_Rendition)_parameters)
 */
const formatControls = {
    RESET: '0',
    WEIGHT_BOLD: '1',
    WEIGHT_DIM: '2',
    ITALIC: '3',
    UNDERLINE: '4',
    BLINK_SLOW: '5',
    BLINK_RAPID: '6',
    SWAPT_FOREGROUND_BACKGROUND_COLORS: '7',
    HIDE: '8',
    STRIKETHROUGH: '9',
    PRIMARY: '10',
    ALTERNATIVE_1: '11',
    ALTERNATIVE_2: '12',
    ALTERNATIVE_3: '13',
    ALTERNATIVE_4: '14',
    ALTERNATIVE_5: '15',
    ALTERNATIVE_6: '16',
    ALTERNATIVE_7: '17',
    ALTERNATIVE_8: '18',
    ALTERNATIVE_9: '19',
    FRACTURE: '20',
    DOUBLE_UNDERLINE: '21',
    WEIGHT_NORMAL: '22',
    ITALIC_RESET: '23',
    UNDERLINE_RESET: '24',
    BLINK_RESET: '25',
    PROPORTIONAL_SPACING: '26',
    REVERSED_RESET: '27',
    HIDE_RESET: '28',
    STRIKETHROUGH_RESET: '29',
    // FOREGROUND_COLOR: 30-37
    FOREGROUND_COLOR: '38',
    FOREGROUND_COLOR_DEFAULT: '39',
    // BACKGROUND_COLOR: 40-47
    BACKGROUND_COLOR: '48',
    BACKGROUND_COLOR_DEFAULT: '49',
    PROPORTIONAL_SPACING_RESET: '50',
    FRAME: '51',
    ENCIRCLE: '52',
    OVERLINE: '53',
} as const;

export default formatControls;

/**
 * This type gets generated from the values of {@linkcode bit4Colors}.
 */
export type Bit8Color = TypeValuesFromObject<typeof formatControls>;
