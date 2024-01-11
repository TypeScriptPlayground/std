import { TypeValuesFromObject } from "../type/mod.ts";

const controlCodes = {
    /** Null */
    NUL: '\x00',
    /** start of heading */
    SOH: '\x01',
    /** start of text */
    STX: '\x02',
    /** end of text */
    ETX: '\x03',
    /** end of transmission */
    EOT: '\x04',
    /** enquiry  */
    ENQ: '\x05',
    /** acknowledge  */
    AOK: '\x06',
    /** bell */
    BEL: '\x07',
    /** backspace */
    BS: '\x08',
    /** horizontal tab */
    TAB: '\x09',
    /** NL line feed, new Line */
    LF: '\x0A',
    /** vertical tab */
    VT: '\x0B',
    /** NP form feed, new page */
    FF: '\x0C',
    /** carriage return */
    CR: '\x0D',
    /** shift out */
    SO: '\x0E',
    /** shift in */
    SI: '\x0F',
    /** data link escape */
    DLE: '\x10',
    /** device control I */
    DC1: '\x11',
    /** device control 2 */
    DC2: '\x12',
    /** device control 3 */
    DC3: '\x13',
    /** device control 4 */
    DC4: '\x14',
    /** negative acknowledge */
    NAK: '\x15',
    /** synchronous idle */
    SYN: '\x16',
    /** end of trans. block */
    ETB: '\x17',
    /** cancel */
    CAN: '\x18',
    /** end of medium */
    EM: '\x19',
    /** substitute */
    SUB: '\x1A',
    /** escape */
    ESC: '\x1B',
    /** file separator */
    FS: '\x1C',
    /** group separator */
    GS: '\x1D',
    /** record separator */
    RS: '\x1E',
    /** unit separator */
    US: '\x1F',
} as const;

export type ControlCode = TypeValuesFromObject<typeof controlCodes>

export default controlCodes
