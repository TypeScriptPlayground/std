import type { ValuesFromObject } from "../../type/mod.ts";
import colors from './colors.ts';
import fonts from './fonts.ts';
import ideograms from './ideograms.ts';
import scripts from './scripts.ts';
import textDecorations from './text_decoreations.ts';

/**
 * This object contains all format codes.
 * 
 * Use the control sequence `CSI <formats.<format>> m`, named Select Graphic Rendition (SGR), to set format attributes.
 * 
 * [Wikipedia](https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_(Select_Graphic_Rendition)_parameters)
 */
const formats = {
    /** Reset or normal */
    RESET: '0',
    /** Slow blink */
    BLINK_SLOW: '5',
    /** Rapid blink */
    BLINK_RAPID: '6',
    /** Conceal or hide */
    HIDE: '8',
    /** Reveal */
    HIDE_RESET: '28',
    ...colors,
    ...fonts,
    ...ideograms,
    ...scripts,
    ...textDecorations
} as const;

export default formats;

/**
 * This type gets generated from the values of {@linkcode formats}.
 */
export type Format = ValuesFromObject<typeof formats>;
