import { ValuesFromObject } from "../../type/mod.ts";

/**
 * This object contains all ideogram format codes.
 * 
 * Use the control sequence `CSI <formats.<format>> m`, named Select Graphic Rendition (SGR), to set ideogram format
 * attributes.
 * 
 * [Wikipedia](https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_(Select_Graphic_Rendition)_parameters)
 */
const ideogramCodes = {
  /** Reset or normal */
  RESET: '0',
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
  IDEOGRAM_RESET: '65',
} as const;

export default ideogramCodes;

/**
 * This type gets generated from the values of {@linkcode ideogramCodes}.
 */
export type IdeogramCode = ValuesFromObject<typeof ideogramCodes>;
