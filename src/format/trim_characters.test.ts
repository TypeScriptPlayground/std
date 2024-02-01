import { assertEquals } from "https://deno.land/std@0.203.0/assert/assert_equals.ts";
import trimCharacters from "./trim_characters.ts";

Deno.test(
    'Trim characters at the start of a string.',
    async (test) => {
        await test.step({
            name: 'Empty input string, empty characters',
            fn: () => {
                assertEquals(
                    trimCharacters('', ''),
                    ''
                )
            }
        })

        await test.step({
            name: 'Empty characters',
            fn: () => {
                assertEquals(
                    trimCharacters('abc123', ''),
                    'abc123'
                )
            }
        })

        await test.step({
            name: 'Empty input string',
            fn: () => {
                assertEquals(
                    trimCharacters('', 'abc'),
                    ''
                )
            }
        })

        await test.step({
            name: 'Fake Escaped characters in input string',
            fn: () => {
                assertEquals(
                    trimCharacters('\aabc123\a', '\a'),
                    'bc123'
                )
            }
        })

        await test.step({
            name: 'Real Escaped characters in input string',
            fn: () => {
                assertEquals(
                    trimCharacters('\ttabc123t\t', '\t'),
                    'tabc123'
                )
            }
        })

        await test.step({
            name: 'Skip characters in input string',
            fn: () => {
                assertEquals(
                    trimCharacters('321abc123', '1'),
                    '321abc123'
                )
            }
        })

        await test.step({
            name: 'Normal trim',
            fn: () => {
                assertEquals(
                    trimCharacters('abc123', 'cab23'),
                    '1'
                )
            }
        })
    }
)
