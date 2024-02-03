import { NumberRange } from "../../type/mod.ts";

/**
 * This interface represents a 24 bit color.
 */
export interface Bit24Color {
    red : NumberRange<0, 255>,
    green : NumberRange<0, 255>,
    blue : NumberRange<0, 255>
};

