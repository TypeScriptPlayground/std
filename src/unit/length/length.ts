import { Chain } from "./imperial/chain.ts";
import { Fathom } from "./imperial/fathom.ts";
import { Foot } from "./imperial/foot.ts";
import { Hand } from "./imperial/hand.ts";
import { Inch } from "./imperial/inch.ts";
import { League } from "./imperial/league.ts";
import { Link } from "./imperial/link.ts";
import { Mile } from "./imperial/mile.ts";
import { Rod } from "./imperial/rod.ts";
import { Yard } from "./imperial/yard.ts";
import { Attometer } from "./metric/attometer.ts";
import { Centimeter } from "./metric/centimeter.ts";
import { Decimeter } from "./metric/decimeter.ts";
import { Femtometer } from "./metric/femtometer.ts";
import { Gigameter } from "./metric/gigameter.ts";
import { Kilometer } from "./metric/kilometer.ts";
import { Megameter } from "./metric/megameter.ts";
import { Meter } from "./metric/meter.ts";
import { Micrometer } from "./metric/micrometer.ts";
import { Millimeter } from "./metric/millimeter.ts";
import { Nanometer } from "./metric/nanometer.ts";
import { Picometer } from "./metric/picometer.ts";
import { Terameter } from "./metric/terameter.ts";

export interface Length {
    to: {
        // metric
        attometer : Attometer
        femtometer : Femtometer,
        picometer : Picometer,
        nanometer : Nanometer,
        micrometer : Micrometer,
        millimeter : Millimeter,
        centimeter : Centimeter,
        decimeter : Decimeter,
        meter : Meter,
        kilometer : Kilometer,
        megameter : Megameter,
        gigameter : Gigameter,
        terameter : Terameter,

        // imperial
        inch : Inch,
        foot : Foot,
        yard : Yard,
        mile : Mile,
        fathom : Fathom,
        chain : Chain,
        rod : Rod,
        link : Link,
        hand : Hand,
        league : League
    }
}
