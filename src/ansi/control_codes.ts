import { TypeValuesFromObject } from "../type/mod.ts";

/**
 * This object contains all ANSI control codes (`0x00`-`0x1F`)
 */
const controlCodes = {
    /** Null (`\x00`) */
    NUL: '\x00',
    /** Start of heading (`\x01`) */
    SOH: '\x01',
    /** Start of text (`\x02`) */
    STX: '\x02',
    /** End of text (`\x03`) */
    ETX: '\x03',
    /** End of transmission (`\x04`) */
    EOT: '\x04',
    /** Enquiry  (`\x05`) */
    ENQ: '\x05',
    /** Acknowledge  (`\x06`) */
    AOK: '\x06',
    /** Bell (`\x07`) */
    BEL: '\x07',
    /** Backspace (`\x08`) */
    BS: '\x08',
    /** Horizontal tab (`\x09`) */
    TAB: '\x09',
    /** NL line feed, new Line (`\x0A`) */
    LF: '\x0A',
    /** Vertical tab (`\x0B`) */
    VT: '\x0B',
    /** NP form feed, new page (`\x0C`) */
    FF: '\x0C',
    /** Carriage return (`\x0D`) */
    CR: '\x0D',
    /** Shift out (`\x0E`) */
    SO: '\x0E',
    /** Shift in (`\x0F`) */
    SI: '\x0F',
    /** Data link escape (`\x10`) */
    DLE: '\x10',
    /** Device control I (`\x11`) */
    DC1: '\x11',
    /** Device control 2 (`\x12`) */
    DC2: '\x12',
    /** Device control 3 (`\x13`) */
    DC3: '\x13',
    /** Device control 4 (`\x14`) */
    DC4: '\x14',
    /** Negative acknowledge (`\x15`) */
    NAK: '\x15',
    /** Synchronous idle (`\x16`) */
    SYN: '\x16',
    /** End of trans. block (`\x17`) */
    ETB: '\x17',
    /** Cancel (`\x18`) */
    CAN: '\x18',
    /** End of medium (`\x19`) */
    EM: '\x19',
    /** Substitute (`\x1A`) */
    SUB: '\x1A',
    /** Escape (`\x1B`) */
    ESC: '\x1B',
    /** File separator (`\x1C`) */
    FS: '\x1C',
    /** Group separator (`\x1D`) */
    GS: '\x1D',
    /** Record separator (`\x1E`) */
    RS: '\x1E',
    /** Unit separator (`\x1F`) */
    US: '\x1F',
} as const;

export default controlCodes

/**
 * This type gets generated from the values of {@linkcode controlCodes}.
 */
export type ControlCode = TypeValuesFromObject<typeof controlCodes>

