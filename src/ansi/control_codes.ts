import { TypeValuesFromObject } from "../type/mod.ts";

/**
 * This object contains all ANSI control codes (`0x00`-`0x1F`)
 */
const controlCodes = {
    /** Null */
    NUL: '\x00',
    /** Start of heading */
    SOH: '\x01',
    /** Start of text */
    STX: '\x02',
    /** End of text */
    ETX: '\x03',
    /** End of transmission */
    EOT: '\x04',
    /** Enquiry  */
    ENQ: '\x05',
    /** Acknowledge  */
    AOK: '\x06',
    /** Bell */
    BEL: '\x07',
    /** Backspace */
    BS: '\x08',
    /** Horizontal tab */
    TAB: '\x09',
    /** NL line feed, new Line */
    LF: '\x0A',
    /** Vertical tab */
    VT: '\x0B',
    /** NP form feed, new page */
    FF: '\x0C',
    /** Carriage return */
    CR: '\x0D',
    /** Shift out */
    SO: '\x0E',
    /** Shift in */
    SI: '\x0F',
    /** Data link escape */
    DLE: '\x10',
    /** Device control I */
    DC1: '\x11',
    /** Device control 2 */
    DC2: '\x12',
    /** Device control 3 */
    DC3: '\x13',
    /** Device control 4 */
    DC4: '\x14',
    /** Negative acknowledge */
    NAK: '\x15',
    /** Synchronous idle */
    SYN: '\x16',
    /** End of trans. block */
    ETB: '\x17',
    /** Cancel */
    CAN: '\x18',
    /** End of medium */
    EM: '\x19',
    /** Substitute */
    SUB: '\x1A',
    /** Escape */
    ESC: '\x1B',
    /** File separator */
    FS: '\x1C',
    /** Group separator */
    GS: '\x1D',
    /** Record separator */
    RS: '\x1E',
    /** Unit separator */
    US: '\x1F',
} as const;

/**
 * This type gets generated from the values of {@linkcode controlCodes}.
 */
export type ControlCode = TypeValuesFromObject<typeof controlCodes>

export default controlCodes
