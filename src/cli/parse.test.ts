import { assertEquals } from "https://deno.land/std@0.203.0/assert/assert_equals.ts";
import parse from "./parse.ts";

Deno.test(
    'Parsing CLI string arguments.',
    (test) => {
        test.step({
            name: 'Long bool arguments (--argument)',
            fn: () => {
                
            }
        })

        test.step({
            name: 'Short bool arguments (-a)',
            fn: () => {

            }
        })

        test.step({
            name: 'Multiple short bool arguments (-abc)',
            fn: () => {

            }
        })

        test.step({
            name: 'Value Arguments (--argument=value)',
            fn: () => {

            }
        })

        test.step({
            name: 'List arguments (--argument:value1,value2)',
            fn: () => {

            }
        })
    }
)
