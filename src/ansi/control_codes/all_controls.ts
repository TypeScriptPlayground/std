import c0Controls, { C0Control } from "./c0_controls.ts";
import c1Controls, { C1Control } from "./c1_controls.ts";

const allControls = {
    ...c0Controls,
    ...c1Controls
}

export default allControls;

export type AllControl = C0Control | C1Control;
