import { Length } from "../length.ts";

export type Picometer = () => number

export default function picometer(length : number) : Length {
    return {
        to: {
            // metric
            attometer: () => length * 1e6,
            femtometer: () => length * 1e3,
            picometer: () => length,
            nanometer: () => length / 1e3,
            micrometer: () => length / 1e6,
            millimeter: () => length / 1e9,
            centimeter: () => length / 1e10,
            decimeter: () => length / 1e11,
            meter: () => length / 1e12,
            kilometer: () => length / 1e15,
            megameter: () => length / 1e18,
            gigameter: () => length / 1e21,
            terameter: () => length / 1e24,

            // imperial
            inch: () => length / 2.54e10,
            foot: () => length / 3.048e11,
            yard: () => length / 9.144e11,
            mile: () => length / 1.60934e15,
            fathom: () => length / 1.8288e12,
            chain: () => length / 2.01168e13,
            rod: () => length / 5.0292e12,
            link: () => length / 1.6152e10,
            hand: () => length / 1.016e11,
            league: () => length / 4.82803e15,
        }
    };
}
