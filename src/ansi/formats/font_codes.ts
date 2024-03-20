import { ValuesFromObject } from "../../type/mod.ts";

/**
 * This object contains all font format codes.
 * 
 * Use the control sequence `CSI <fonts.<font>> m`, named Select Graphic Rendition (SGR), to set font format attributes.
 * 
 * [Wikipedia](https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_(Select_Graphic_Rendition)_parameters)
 */
const fontCodes = {
  /** Reset or normal */
  RESET: '0',
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
} as const;

export default fontCodes;

/**
 * This type gets generated from the values of {@linkcode fontCodes}.
 */
export type FontCode = ValuesFromObject<typeof fontCodes>;
