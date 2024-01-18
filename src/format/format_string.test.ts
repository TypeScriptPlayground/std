import { assertEquals } from "https://deno.land/std@0.203.0/assert/assert_equals.ts";
import { assertThrows } from "https://deno.land/std@0.203.0/assert/assert_throws.ts";
import formatString from "./format_string.ts";

Deno.test(
    'Format string.',
    async (test) => {
        await test.step({
            name: 'Normal template string. ("{{person}}")',
            fn: () => {
                assertEquals(
                    formatString(
                        'Test, hello {{person}}',
                        {person: 'User'}
                    ),
                    'Test, hello User'
                )
            }
        })

        await test.step({
            name: 'Special template string. ("\\{{person}}")',
            fn: () => {
                assertEquals(
                    formatString(
                        'Test, hello \\{{person}}',
                        {person: 'User'}
                    ),
                    'Test, hello \\{{person}}'
                )
            }
        })
        
        await test.step({
            name: 'Special template string. ("\\\\{{person}}")',
            fn: () => {
                assertEquals(
                    formatString(
                        'Test, hello \\\\{{person}}',
                        {person: 'User'}
                    ),
                    'Test, hello \\\\User'
                )
            }
        })

        await test.step({
            name: 'Special template string. ("{\\\\{person}}")',
            fn: () => {
                assertEquals(
                    formatString(
                        'Test, hello {\\\\{person}}',
                        {person: 'User'}
                    ),
                    'Test, hello {\\\\{person}}'
                )
            }
        })
        
        await test.step({
            name: 'Special template string. ("{{person\\}}")',
            fn: () => {
                assertEquals(
                    formatString(
                        'Test, hello {{person\\}}',
                        {person: 'User'}
                    ),
                    'Test, hello {{person\\}}'
                )
            }
        })
        
        await test.step({
            name: 'Object does not exist. Throw reference error.',
            fn: () => {
                assertThrows(
                    () => formatString(
                        'Test, hello {{keyDoesNotExist}}',
                        {person: 'User'}
                    ),
                    ReferenceError
                )
            }
        })
    }
)
