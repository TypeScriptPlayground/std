import c0Controls, { C0ControlValue } from "./c0_controls.ts";
import c1Controls, { C1ControlValue } from "./c1_controls.ts";

/**
 * This object contains all ANSI control codes.
 * 
 * [Wikipedia](https://en.wikipedia.org/wiki/C0_and_C1_control_codes#C0_controls) |
 * [vt100](https://vt100.net/docs/vt510-rm/chapter4.html)
 */
const allControls = {
    ...c0Controls,
    ...c1Controls
}

export default allControls;

export type AllControl = C0ControlValue | C1ControlValue;
