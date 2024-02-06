import { assertEquals } from "https://deno.land/std@0.203.0/assert/assert_equals.ts";
import removeDuplicates from "../format./array/remove_duplicates.ts";

Deno.test(
    'Remove duplicates from array.',
    async (test) => {
        await test.step({
            name: 'Empty array',
            fn: () => {
                assertEquals(
                    removeDuplicates([]),
                    []
                )
            }
        })

        await test.step({
            name: 'Undefined array',
            fn: () => {
                assertEquals(
                    removeDuplicates([
                        undefined,
                        undefined
                    ]),
                    [undefined]
                )
            }
        })
        
        await test.step({
            name: 'Number array',
            fn: () => {
                assertEquals(
                    removeDuplicates([
                        1,
                        2,
                        3,
                        4,
                        3,
                        5,
                        4
                    ]),
                    [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                )
            }
        })

        await test.step({
            name: 'String array',
            fn: () => {
                assertEquals(
                    removeDuplicates([
                        'Apple',
                        'Banana',
                        'Banana',
                        'Cherry',
                        'Apple'
                    ]),
                    [
                        'Apple',
                        'Banana',
                        'Cherry'
                    ]
                )
            }
        })
    }
)
