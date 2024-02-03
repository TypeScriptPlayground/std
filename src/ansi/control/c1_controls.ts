import { ValuesFromObject } from "../../type/mod.ts";

/**
 * This object contains all C1 ANSI control codes.
 * 
 * [Wikipedia](https://en.wikipedia.org/wiki/C0_and_C1_control_codes#C1_controls) |
 * [vt100](https://vt100.net/docs/vt510-rm/chapter4.html)
 */
const c1Controls = {
    /** Padding Character (`0x80`) */
    PAD: '\x80',
    /** High Octet Preset (`0x81`) */
    HOP: '\x81',
    /** Break Permitted Here (`0x82`) */
    BPH: '\x82',
    /** No Break Here (`0x83`) */
    NBH: '\x83',
    /** Index (`0x84`) */
    IND: '\x84',
    /** Next Line (`0x85`) */
    NEL: '\x85',
    /** Start of Selected Area (`0x86`) */
    SSA: '\x86',
    /** End of Selected Area (`0x87`) */
    ESA: '\x87',
    /** Horizontal Tabulation Set (`0x88`) */
    HTS: '\x88',
    /** Horizontal Tabulation With Justification (`0x89`) */
    HTJ: '\x89',
    /** Vertical Tabulation Set (`0x8A`) */
    VTS: '\x8A',
    /** Partial Line Down (`0x8B`) */
    PLD: '\x8B',
    /** Partial Line Up (`0x8C`) */
    PLU: '\x8C',
    /** Reverse Index (`0x8D`) */
    RI: '\x8D',
    /** Single-Shift 2 (`0x8E`) */
    SS2: '\x8E',
    /** Single-Shift 3 (`0x8F`) */
    SS3: '\x8F',
    /** Device Control String (`0x90`) */
    DCS: '\x90',
    /** Private Use 1 (`0x91`) */
    PU1: '\x91',
    /** Private Use 2 (`0x92`) */
    PU2: '\x92',
    /** Set Transmit State (`0x93`) */
    STS: '\x93',
    /** Cancel character (`0x94`) */
    CCH: '\x94',
    /** Message Waiting (`0x95`) */
    MW: '\x95',
    /** Start of Protected Area (`0x96`) */
    SPA: '\x96',
    /** End of Protected Area (`0x97`) */
    EPA: '\x97',
    /** Start of String (`0x98`) */
    SOS: '\x98',
    /** Single Graphic Character Introducer (`0x99`) */
    SGC: '\x99',
    /** Single Character Introducer (`0x9A`) */
    SCI: '\x9A',
    /** Control Sequence Introducer (`0x9B`) */
    CSI: '\x9B',
    /** String Terminator (`0x9C`) */
    ST: '\x9C',
    /** Operating System Command (`0x9D`) */
    OSC: '\x9D',
    /** Privacy Message (`0x9E`) */
    PM: '\x9E',
    /** Application Program Command (`0x9F`) */
    APC: '\x9F',

} as const;

export default c1Controls;

/**
 * This type gets generated from the values of {@linkcode c1Controls}.
 */
export type C1ControlValue = ValuesFromObject<typeof c1Controls>;

