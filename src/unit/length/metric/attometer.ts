import { Length } from "../length.ts";

export type Attometer = () => number

export default function attometer(length : number) : Length {
    return {
        to: {
            // metric
            attometer: () => length,
            femtometer: () => length / 1e3,
            picometer: () => length / 1e6,
            nanometer: () => length / 1e9,
            micrometer: () => length / 1e12,
            millimeter: () => length / 1e15,
            centimeter: () => length / 1e16,
            decimeter: () => length / 1e17,
            meter: () => length / 1e18,
            kilometer: () => length / 1e21,
            megameter: () => length / 1e24,
            gigameter: () => length / 1e27,
            terameter: () => length / 1e30,

            // imperial
            inch: () => length / 2.54e16,
            foot: () => length / 3.048e17,
            yard: () => length / 9.144e17,
            mile: () => length / 1.60934e21,
            fathom: () => length / 1.8288e18,
            chain: () => length / 2.01168e19,
            rod: () => length / 5.0292e18,
            link: () => length / 1.6152e16,
            hand: () => length / 1.016e17,
            league: () => length / 4.82803e21
        }
    }
}
