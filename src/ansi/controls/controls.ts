import c0Controls from "./c0_controls.ts";
import c1Controls from "./c1_controls.ts";

import type { C0Control } from './c0_controls.ts'
import type { C1Control } from './c1_controls.ts'

/**
 * This object contains all ANSI control codes.
 * 
 * [Wikipedia](https://en.wikipedia.org/wiki/C0_and_C1_control_codes#C0_controls) |
 * [vt100](https://vt100.net/docs/vt510-rm/chapter4.html)
 */
const controls = {
    ...c0Controls,
    ...c1Controls
}

export default controls;

export type Control = C0Control | C1Control;
