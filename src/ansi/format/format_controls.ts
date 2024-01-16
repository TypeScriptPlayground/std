import { TypeValuesFromObject } from "../../type/mod.ts";

/**
 * This object contains all 8-Bit color codes.
 * 
 * [Wikipedia](https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_(Select_Graphic_Rendition)_parameters)
 */
const formatControls = {
    RESET: '0',
    FONT_WEIGHT_BOLD: '1',
    FONT_WEIGHT_DIM: '2',
    ITALIC: '3',
    UNDERLINE: '4',
    BLINK_SLOW: '5',
    BLINK_RAPID: '6',
    SWAPT_FOREGROUND_BACKGROUND_COLOR: '7',
    HIDE: '8',
    STRIKETHROUGH: '9',
    FONT_PRIMARY: '10',
    FONT_ALTERNATIVE_1: '11',
    FONT_ALTERNATIVE_2: '12',
    FONT_ALTERNATIVE_3: '13',
    FONT_ALTERNATIVE_4: '14',
    FONT_ALTERNATIVE_5: '15',
    FONT_ALTERNATIVE_6: '16',
    FONT_ALTERNATIVE_7: '17',
    FONT_ALTERNATIVE_8: '18',
    FONT_ALTERNATIVE_9: '19',
    FONT_FRACTURE: '20',
    DOUBLE_UNDERLINE: '21',
    FONT_WEIGHT_NORMAL: '22',
    ITALIC_RESET: '23',
    UNDERLINE_RESET: '24',
    BLINK_RESET: '25',
    PROPORTIONAL_SPACING: '26',
    REVERSED_RESET: '27',
    HIDE_RESET: '28',
    STRIKETHROUGH_RESET: '29',
    // FOREGROUND_COLOR: 30 - 37
    FOREGROUND_COLOR: '38',
    FOREGROUND_COLOR_DEFAULT: '39',
    // BACKGROUND_COLOR: 40 - 47
    BACKGROUND_COLOR: '48',
    BACKGROUND_COLOR_DEFAULT: '49',
    PROPORTIONAL_SPACING_RESET: '50',
    FRAME: '51',
    ENCIRCLE: '52',
    OVERLINE: '53',
    FRAME_ENCIRCLE_RESET: '54',
    OVERLINE_RESET: '55',
    // 56 - 57
    UNDERLINE_COLOR: '58',
    UNDERLINE_COLOR_DEFAULT: '59',
    IDEOGRAMM_RIGHT_SIDE_LINE: '60',
    IDEOGRAMM_DOUBLE_RIGHT_SIDE_LINE: '61',
    IDEOGRAMM_LEFT_SIDE_LINE: '62',
    IDEOGRAMM_DOUBLE_LEFT_SIDE_LINE: '63',
    IDEOGRAMM_STRESS_ERROR_MARKING: '64',
    IDEOGRAMM_RESET: '65',
    // 66 - 72
    SUPERSCRIPT: '73',
    SUBSCRIPT: '74',
    SUPERSCRIPT_SUBSCRIPT_RESET: '75'
    // BRIGHT_FOREGROUND_COLOR: 90 - 97
    // 98 - 99
    // BRIGHT_BACKGROUND_COLOR: 100 - 107
} as const;

export default formatControls;

/**
 * This type gets generated from the values of {@linkcode bit4Colors}.
 */
export type Bit8Color = TypeValuesFromObject<typeof formatControls>;
