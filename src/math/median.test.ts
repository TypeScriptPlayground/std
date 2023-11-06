import { assertEquals } from 'https://deno.land/std@0.203.0/assert/assert_equals.ts'
import median from "./median.ts"

Deno.test(
    'Calculate median value of number array',
    async (test) => {
        await test.step({
            name: 'Empty array []',
            fn: () => {
                assertEquals(
                    median([]),
                    0
                )
            }
        })

        await test.step({
            name: 'Array with [0]',
            fn: () => {
                assertEquals(
                    median([0]),
                    0
                )
            }
        })

        await test.step({
            name: 'Array with [1]',
            fn: () => {
                assertEquals(
                    median([1]),
                    1
                )
            }
        })

        await test.step({
            name: 'Array with even amount of numbers [7, 2, 6, 13]',
            fn: () => {
                assertEquals(
                    median([7, 2, 6, 13]),
                    6.5
                )
            }
        })

        await test.step({
            name: 'Array with odd amount of numbers [7, 2, 6, 13, 27]',
            fn: () => {
                assertEquals(
                    median([7, 2, 6, 13, 27]),
                    7
                )
            }
        })
    }
)
