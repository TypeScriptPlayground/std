import { assertEquals } from "https://deno.land/std@0.203.0/assert/assert_equals.ts";
import trimCharactersStart from "./trim_characters_end.ts";

Deno.test(
    'Trim characters at the end of a string.',
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
                    trimCharactersStart('\babc123\b', '\b'),
                    '\babc123'
                )
            }
        })

        await test.step({
            name: 'Real Escaped characters in input string',
            fn: () => {
                assertEquals(
                    trimCharactersStart('abc123t\t', '\t'),
                    'abc123t'
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
                    trimCharactersStart('abc123', '312ca'),
                    'ab'
                )
            }
        })
    }
)
