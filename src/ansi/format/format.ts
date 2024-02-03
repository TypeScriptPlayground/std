import { ValuesFromObject } from "../../type/mod.ts";

/**
 * This object contains all format codes.
 * 
 * Use the control sequence `CSI <formats.FORMAT> m`, named Select Graphic Rendition (SGR), to set format attributes.
 * 
 * [Wikipedia](https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_(Select_Graphic_Rendition)_parameters)
 */
const formats = {
    /** Reset or normal */
    RESET: '0',
    /** Bold or increased intensity */
    FONT_WEIGHT_BOLD: '1',
    /** Faint, decreased intensity, or dim */
    FONT_WEIGHT_DIM: '2',
    /** Italic */
    ITALIC: '3',
    /** Underline */
    UNDERLINE: '4',
    /** Slow blink */
    BLINK_SLOW: '5',
    /** Rapid blink */
    BLINK_RAPID: '6',
    /** [Reverse video](https://en.wikipedia.org/wiki/Reverse_video) or invert */
    SWAP_FOREGROUND_BACKGROUND_COLOR: '7',
    /** Conceal or hide */
    HIDE: '8',
    /** [Crosser-out](https://en.wikipedia.org/wiki/Strikethrough), or strike */
    STRIKETHROUGH: '9',
    /** Primary (default) font */
    FONT_DEFAULT: '10',
    /** Alternative font 1 */
    FONT_ALTERNATIVE_1: '11',
    /** Alternative font 2 */
    FONT_ALTERNATIVE_2: '12',
    /** Alternative font 3 */
    FONT_ALTERNATIVE_3: '13',
    /** Alternative font 4 */
    FONT_ALTERNATIVE_4: '14',
    /** Alternative font 5 */
    FONT_ALTERNATIVE_5: '15',
    /** Alternative font 6 */
    FONT_ALTERNATIVE_6: '16',
    /** Alternative font 7 */
    FONT_ALTERNATIVE_7: '17',
    /** Alternative font 8 */
    FONT_ALTERNATIVE_8: '18',
    /** Alternative font 9 */
    FONT_ALTERNATIVE_9: '19',
    /**	[Fraktur](https://en.wikipedia.org/wiki/Fraktur) (Gothic) */
    FONT_FRACTURE: '20',
    /** Doubly underlined; or: not bold */
    DOUBLE_UNDERLINE: '21',
    /** Normal intensity */
    FONT_WEIGHT_NORMAL: '22',
    /** Neither italic, nor blackletter */
    ITALIC_RESET: '23',
    /** Not underlined */
    UNDERLINE_RESET: '24',
    /** Not blinking */
    BLINK_RESET: '25',
    /** Proportional spacing */
    PROPORTIONAL_SPACING: '26',
    /** Not reversed */
    REVERSED_RESET: '27',
    /** Reveal */
    HIDE_RESET: '28',
    /** Not crossed out */
    STRIKETHROUGH_RESET: '29',
    // FOREGROUND_COLOR: 30 - 37
    /** Set foreground [color](https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit) */
    FOREGROUND_COLOR: '38',
    /** Default foreground color */
    FOREGROUND_COLOR_DEFAULT: '39',
    // BACKGROUND_COLOR: 40 - 47
    /** Set background [color](https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit) */
    BACKGROUND_COLOR: '48',
    /** Default background color */
    BACKGROUND_COLOR_DEFAULT: '49',
    /** Disable proportional spacing */
    PROPORTIONAL_SPACING_RESET: '50',
    /** Framed */
    FRAME: '51',
    /** Encircled */
    ENCIRCLE: '52',
    /** Overlined */
    OVERLINE: '53',
    /** Neither framed nor encircled */
    FRAME_ENCIRCLE_RESET: '54',
    /** Not overlined */
    OVERLINE_RESET: '55',
    // 56 - 57
    /** Set underline [color](https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit) */
    UNDERLINE_COLOR: '58',
    /** Default underline color */
    UNDERLINE_COLOR_DEFAULT: '59',
    /** Ideogram underline or right side line */
    IDEOGRAM_RIGHT_SIDE_LINE: '60',
    /** Ideogram double underline, or double line on the right side */
    IDEOGRAM_DOUBLE_RIGHT_SIDE_LINE: '61',
    /** Ideogram overline or left side line */
    IDEOGRAM_LEFT_SIDE_LINE: '62',
    /** Ideogram double overline, or double line on the left side */
    IDEOGRAM_DOUBLE_LEFT_SIDE_LINE: '63',
    /** Ideogram stress marking */
    IDEOGRAM_STRESS_ERROR_MARK: '64',
    /** No ideogram attributes */
    IDEOGRAM_REST: '65',
    // 66 - 72
    /** Superscript */
    SUPERSCRIPT: '73',
    /** Subscript */
    SUBSCRIPT: '74',
    /** Neither superscript nor subscript */
    SUPERSCRIPT_SUBSCRIPT_RESET: '75'
    // BRIGHT_FOREGROUND_COLOR: 90 - 97
    // 98 - 99
    // BRIGHT_BACKGROUND_COLOR: 100 - 107
} as const;

export default formats;

/**
 * This type gets generated from the values of {@linkcode formats}.
 */
export type FormatValue = ValuesFromObject<typeof formats>;
