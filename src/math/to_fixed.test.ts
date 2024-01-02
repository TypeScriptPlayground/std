import { assertEquals } from 'https://deno.land/std@0.203.0/assert/assert_equals.ts'
import toFixed from "./to_fixed.ts";

Deno.test(
    'Trim number decimal places',
    async (test) => {
        await test.step({
            name: 'One decimal place (default Math.round)',
            fn: () => {
                assertEquals(
                    toFixed(
                        100.6235,
                        1
                    ),
                    100.6
                )
            }
        })

        await test.step({
            name: 'One decimal place (Math.floor)',
            fn: () => {
                assertEquals(
                    toFixed(
                        100.6735,
                        1,
                        Math.floor
                    ),
                    100.6
                )
            }
        })

        await test.step({
            name: 'One decimal place (Math.ceil)',
            fn: () => {
                assertEquals(
                    toFixed(
                        100.6235,
                        1,
                        Math.ceil
                    ),
                    100.7
                )
            }
        })
    }
)
