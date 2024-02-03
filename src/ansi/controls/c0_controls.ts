import { ValuesFromObject } from "../../type/mod.ts";

/**
 * This object contains all C0 ANSI control codes.
 * 
 * [Wikipedia](https://en.wikipedia.org/wiki/C0_and_C1_control_codes#C0_controls) |
 * [vt100](https://vt100.net/docs/vt510-rm/chapter4.html)
 */
const c0Controls = {
    /** Null (`0x00`) */
    NUL: '\x00',
    /** Start of Heading (`0x01`) */
    SOH: '\x01',
    /** Start of Text (`0x02`) */
    STX: '\x02',
    /** End of Text (`0x03`) */
    ETX: '\x03',
    /** End of Transmission (`0x04`) */
    EOT: '\x04',
    /** Enquiry (`0x05`) */
    ENQ: '\x05',
    /** Acknowledge (`0x06`) */
    AOK: '\x06',
    /** Bell, Alert (`0x07`) */
    BEL: '\x07',
    /** Backspace (`0x08`) */
    BS: '\x08',
    /** Horizontal Tabulation (`0x09`) */
    TAB: '\x09',
    /** Line Feed (`0x0A`) */
    LF: '\x0A',
    /** Vertical Tabulation (`0x0B`) */
    VT: '\x0B',
    /** Form Feed (`0x0C`) */
    FF: '\x0C',
    /** Carriage Return (`0x0D`) */
    CR: '\x0D',
    /** Shift Out (`0x0E`) */
    SO: '\x0E',
    /** Shift In (`0x0F`) */
    SI: '\x0F',
    /** Data Link Escape (`0x10`) */
    DLE: '\x10',
    /** Device Control I (`0x11`) */
    DC1: '\x11',
    /** Device Control 2 (`0x12`) */
    DC2: '\x12',
    /** Device Control 3 (`0x13`) */
    DC3: '\x13',
    /** Device Control 4 (`0x14`) */
    DC4: '\x14',
    /** Negative Acknowledge (`0x15`) */
    NAK: '\x15',
    /** Synchronous Idle (`0x16`) */
    SYN: '\x16',
    /** End of Transmission Block (`0x17`) */
    ETB: '\x17',
    /** Cancel (`0x18`) */
    CAN: '\x18',
    /** End of Medium (`0x19`) */
    EM: '\x19',
    /** Substitute (`0x1A`) */
    SUB: '\x1A',
    /** Escape (`0x1B`) */
    ESC: '\x1B',
    /** File Separator (`0x1C`) */
    FS: '\x1C',
    /** Group Separator (`0x1D`) */
    GS: '\x1D',
    /** Record Separator (`0x1E`) */
    RS: '\x1E',
    /** Unit Separator (`0x1F`) */
    US: '\x1F',
    /** Space, not technically part of the C0 control character range (`0x20`) */
    SP: '\x20',
    /** Delete, not technically part of the C0 control character range (`0x7F`) */
    DEL: '\x7F',

} as const;

export default c0Controls;

/**
 * This type gets generated from the values of {@linkcode c0Controls}.
 */
export type C0Control = ValuesFromObject<typeof c0Controls>;

