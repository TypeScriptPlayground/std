import { assertEquals } from "https://deno.land/std@0.203.0/assert/assert_equals.ts";
import trimCharactersStart from "./trim_characters_start.ts";

Deno.test(
    'Trim characters at the start of a string.',
    async (test) => {
        await test.step({
            name: 'Empty input string, empty characters',
            fn: () => {
                assertEquals(
                    trimCharactersStart('', ''),
                    ''
                )
            }
        })

        await test.step({
            name: 'Empty characters',
            fn: () => {
                assertEquals(
                    trimCharactersStart('abc123', ''),
                    'abc123'
                )
            }
        })

        await test.step({
            name: 'Empty input string',
            fn: () => {
                assertEquals(
                    trimCharactersStart('', 'abc'),
                    ''
                )
            }
        })

        await test.step({
            name: 'Fake Escaped characters in input string',
            fn: () => {
                assertEquals(
                    trimCharactersStart('\aabc123\a', '\a'),
                    'bc123\a'
                )
            }
        })

        await test.step({
            name: 'Real Escaped characters in input string',
            fn: () => {
                assertEquals(
                    trimCharactersStart('\ttabc123', '\t'),
                    'tabc123'
                )
            }
        })

        await test.step({
            name: 'Skip characters in input string',
            fn: () => {
                assertEquals(
                    trimCharactersStart('abc123', '1'),
                    'abc123'
                )
            }
        })

        await test.step({
            name: 'Normal trim',
            fn: () => {
                assertEquals(
                    trimCharactersStart('abc123', 'cab23'),
                    '123'
                )
            }
        })
    }
)
