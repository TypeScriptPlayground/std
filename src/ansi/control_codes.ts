import { TypeValuesFromObject } from "../type/mod.ts";

/**
 * This object contains all ANSI control codes.
 * 
 * [Reference](https://en.wikipedia.org/wiki/C0_and_C1_control_codes)
 */
const controlCodes = {
    /** Null (`0x00`) */
    NUL: '\x00',
    /** Start of heading (`0x01`) */
    SOH: '\x01',
    /** Start of text (`0x02`) */
    STX: '\x02',
    /** End of text (`0x03`) */
    ETX: '\x03',
    /** End of transmission (`0x04`) */
    EOT: '\x04',
    /** Enquiry  (`0x05`) */
    ENQ: '\x05',
    /** Acknowledge  (`0x06`) */
    AOK: '\x06',
    /** Bell (`0x07`) */
    BEL: '\x07',
    /** Backspace (`0x08`) */
    BS: '\x08',
    /** Horizontal tab (`0x09`) */
    TAB: '\x09',
    /** NL line feed, new Line (`0x0A`) */
    LF: '\x0A',
    /** Vertical tab (`0x0B`) */
    VT: '\x0B',
    /** NP form feed, new page (`0x0C`) */
    FF: '\x0C',
    /** Carriage return (`0x0D`) */
    CR: '\x0D',
    /** Shift out (`0x0E`) */
    SO: '\x0E',
    /** Shift in (`0x0F`) */
    SI: '\x0F',
    /** Data link escape (`0x10`) */
    DLE: '\x10',
    /** Device control I (`0x11`) */
    DC1: '\x11',
    /** Device control 2 (`0x12`) */
    DC2: '\x12',
    /** Device control 3 (`0x13`) */
    DC3: '\x13',
    /** Device control 4 (`0x14`) */
    DC4: '\x14',
    /** Negative acknowledge (`0x15`) */
    NAK: '\x15',
    /** Synchronous idle (`0x16`) */
    SYN: '\x16',
    /** End of trans. block (`0x17`) */
    ETB: '\x17',
    /** Cancel (`0x18`) */
    CAN: '\x18',
    /** End of medium (`0x19`) */
    EM: '\x19',
    /** Substitute (`0x1A`) */
    SUB: '\x1A',
    /** Escape (`0x1B`) */
    ESC: '\x1B',
    /** File separator (`0x1C`) */
    FS: '\x1C',
    /** Group separator (`0x1D`) */
    GS: '\x1D',
    /** Record separator (`0x1E`) */
    RS: '\x1E',
    /** Unit separator (`0x1F`) */
    US: '\x1F',
    /** Space (`0x20`) */
    SP: '\x20',
    /** Delete (`0x7F`) */
    DEL: '\x7F',

} as const;

export default controlCodes

/**
 * This type gets generated from the values of {@linkcode controlCodes}.
 */
export type ControlCode = TypeValuesFromObject<typeof controlCodes>

