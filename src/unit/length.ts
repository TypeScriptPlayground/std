import { Millimeter } from "./millimeter.ts";

export interface Length {
    to: {
        terameter() : number,
        gigameter() : number,
        megameter() : number,
        kilometer() : number,
        meter() : number,
        decimeter() : number,
        centimeter() : number,
        millimeter : Millimeter,
        micrometer() : number,
        nanometer() : number,
        picometer() : number,
        femtometer() : number,
        attometer() : number
    }
}
