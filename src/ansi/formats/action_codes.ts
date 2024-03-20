import { ValuesFromObject } from "../../type/mod.ts";

/**
 * This object contains all action codes.
 * 
 * Use the control sequence `CSI <formats.<format>> m`, named Select Graphic Rendition (SGR), to set action attributes.
 * 
 * [Wikipedia](https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_(Select_Graphic_Rendition)_parameters)
 */
const actionCodes = {
    /** Reset or normal */
    RESET: '0',
    /** Slow blink */
    BLINK_SLOW: '5',
    /** Rapid blink */
    BLINK_RAPID: '6',
    /** Conceal or hide */
    HIDE: '8',
    /** Reveal */
    HIDE_RESET: '28'
} as const;

export default actionCodes;

/**
 * This type gets generated from the values of {@linkcode actionCodes}.
 */
export type ActionCode = ValuesFromObject<typeof actionCodes>;
