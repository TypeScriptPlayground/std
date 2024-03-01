import { ValuesFromObject } from "../../type/mod.ts";

/**
 * This object contains all color format codes.
 * 
 * Use the control sequence `CSI <colors.<color>> m`, named Select Graphic Rendition (SGR), to set color format
 * attributes.
 * 
 * [Wikipedia](https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_(Select_Graphic_Rendition)_parameters)
 */
const colors = {
  /** Reset or normal */
  RESET: '0',
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
  /** Set underline [color](https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit) */
  UNDERLINE_COLOR: '58',
  /** Default underline color */
  UNDERLINE_COLOR_DEFAULT: '59',
  /** [Reverse video](https://en.wikipedia.org/wiki/Reverse_video) or invert */
  SWAP_FOREGROUND_BACKGROUND_COLOR: '7',
} as const;

export default colors;

/**
 * This type gets generated from the values of {@linkcode colors}.
 */
export type Color = ValuesFromObject<typeof colors>;
