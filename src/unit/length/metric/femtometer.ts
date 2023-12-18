import { Length } from "../length.ts";

export type Femtometer = () => number

export default function femtometer(length : number) : Length {
    return {
        to: {
            // metric
            attometer: () => length * 1e3,
            femtometer: () => length,
            picometer: () => length / 1e3,
            nanometer: () => length / 1e6,
            micrometer: () => length / 1e9,
            millimeter: () => length / 1e12,
            centimeter: () => length / 1e13,
            decimeter: () => length / 1e14,
            meter: () => length / 1e15,
            kilometer: () => length / 1e18,
            megameter: () => length / 1e21,
            gigameter: () => length / 1e24,
            terameter: () => length / 1e27,

            // imperial
            inch: () => length / 2.54e13,
            foot: () => length / 3.048e14,
            yard: () => length / 9.144e14,
            mile: () => length / 1.60934e18,
            fathom: () => length / 1.8288e15,
            chain: () => length / 2.01168e16,
            rod: () => length / 5.0292e15,
            link: () => length / 1.6152e13,
            hand: () => length / 1.016e14,
            league: () => length / 4.82803e18,
        }
    };
}
