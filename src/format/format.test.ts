import { assertEquals } from "https://deno.land/std@0.203.0/assert/assert_equals.ts";
import format from "./format.ts";

Deno.test(
    'Format string.',
    async (test) => {
        await test.step({
            name: 'Normal template string.',
            fn: () => {
                assertEquals(
                    format(
                        'Test, hello {{person}}',
                        {person: 'User'}
                    ),
                    'Test, hello User'
                )
            }
        })
        await test.step({
            name: 'Object does not exist.',
            fn: () => {
                assertEquals(
                    format(
                        'Test, hello {{keyDoesNotExist}}',
                        {person: 'User'}
                    ),
                    new ReferenceError();
                )
            }
        })
    }
)
