import type { ValuesFromObject } from "../../type/mod.ts";

/**
 * This object contains all text decoration format codes.
 * 
 * Use the control sequence `CSI <formats.<format>> m`, named Select Graphic Rendition (SGR), to set text decoration
 * format attributes.
 * 
 * [Wikipedia](https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_(Select_Graphic_Rendition)_parameters)
 */
const textDecorations = {
  /** Bold or increased intensity */
  FONT_WEIGHT_BOLD: '1',
  /** Faint, decreased intensity, or dim */
  FONT_WEIGHT_DIM: '2',
  /** Italic */
  ITALIC: '3',
  /** Underline */
  UNDERLINE: '4',
  /** [Crosser-out](https://en.wikipedia.org/wiki/Strikethrough), or strike */
  STRIKETHROUGH: '9',
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
  /** Not crossed out */
  STRIKETHROUGH_RESET: '29',
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
} as const;

export default textDecorations;

/**
 * This type gets generated from the values of {@linkcode textDecorations}.
 */
export type TextDecoration = ValuesFromObject<typeof textDecorations>;
