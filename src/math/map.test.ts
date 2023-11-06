import { assertEquals } from "https://deno.land/std@0.203.0/assert/assert_equals.ts";
import map from "./map.ts";

Deno.test(
    'Map a value from one range to another range.',
    async (test) => {
        await test.step({
            name: 'Value of 0',
            fn: () => {
                assertEquals(
                    map(
                        0,
                        0,
                        10,
                        0,
                        100
                    ),
                    0
                )
            }
        })

        await test.step({
            name: 'Value of 5 from range [0...10] to [0...100]',
            fn: () => {
                assertEquals(
                    map(
                        5,
                        0,
                        10,
                        0,
                        100
                    ),
                    50
                )
            }
        })

        await test.step({
            name: 'Negative value of -5 from range [0...10] to [0...100]',
            fn: () => {
                assertEquals(
                    map(
                        -5,
                        0,
                        10,
                        0,
                        100
                    ),
                    -50
                )
            }
        })

        await test.step({
            name: 'Value of 5 from negative range [-10...10] to [0...100]',
            fn: () => {
                assertEquals(
                    map(
                        5,
                        -10,
                        10,
                        0,
                        100
                    ),
                    75
                )
            }
        })

        await test.step({
            name: 'Value of 5 from range [0...10] to negative [-100...100]',
            fn: () => {
                assertEquals(
                    map(
                        5,
                        0,
                        10,
                        -100,
                        100
                    ),
                    0
                )
            }
        })
    }
)
