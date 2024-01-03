import { assertEquals } from 'https://deno.land/std@0.203.0/assert/assert_equals.ts'
import average from "./average.ts"

Deno.test(
    'Calculate average value of number array.',
    async (test) => {
        await test.step({
            name: 'Empty array []',
            fn: () => {
                assertEquals(
                    average([]),
                    0
                )
            }
        })

        await test.step({
            name: 'Array with [0]',
            fn: () => {
                assertEquals(
                    average([0]),
                    0
                )
            }
        })

        await test.step({
            name: 'Array with [1]',
            fn: () => {
                assertEquals(
                    average([1]),
                    1
                )
            }
        })

        await test.step({
            name: 'Array with even amount of numbers [7, 2, 6, 13]',
            fn: () => {
                assertEquals(
                    average([7, 2, 6, 13]),
                    7
                )
            }
        })

        await test.step({
            name: 'Array with odd amount of numbers [7, 2, 6, 13, 27]',
            fn: () => {
                assertEquals(
                    average([7, 2, 6, 13, 27]),
                    11
                )
            }
        })

        await test.step({
            name: 'Array with negative numbers [-7, 2, 6, -13, 27]',
            fn: () => {
                assertEquals(
                    average([-7, 2, 6, -13, 27]),
                    3
                )
            }
        })
    }
  );
  