import { ValuesFromObject } from "../../type/mod.ts";

/**
 * This object contains all script format codes.
 * 
 * Use the control sequence `CSI <formats.<format>> m`, named Select Graphic Rendition (SGR), to set script format
 * attributes.
 * 
 * [Wikipedia](https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_(Select_Graphic_Rendition)_parameters)
 */
const scripts = {
  /** Superscript */
  SUPERSCRIPT: '73',
  /** Subscript */
  SUBSCRIPT: '74',
  /** Neither superscript nor subscript */
  SUPERSCRIPT_SUBSCRIPT_RESET: '75'
} as const;

export default scripts;

/**
 * This type gets generated from the values of {@linkcode scripts}.
 */
export type Script = ValuesFromObject<typeof scripts>;
