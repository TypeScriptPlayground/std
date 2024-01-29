import { assertEquals } from "https://deno.land/std@0.203.0/assert/assert_equals.ts";
import splitPath from './split_path.ts';

Deno.test(
    'Split path.',
    async (test) => {
        await test.step({
            name: 'Path to file with separator "/".',
            fn: () => {
                assertEquals(
                    splitPath(
                        'path/to/file.ts',
                        '/'
                    ),
                    [
                        'path',
                        'to',
                        'file.ts'
                    ]
                )
            }
        })

        await test.step({
            name: 'Path to directory with separator "/".',
            fn: () => {
                assertEquals(
                    splitPath(
                        'path/to/directory',
                        '/'
                    ),
                    [
                        'path',
                        'to',
                        'directory'
                    ]
                )
            }
        })

        await test.step({
            name: 'Path to directory with separator "\\".',
            fn: () => {
                assertEquals(
                    splitPath(
                        'path\\to\\directory',
                        '\\'
                    ),
                    [
                        'path',
                        'to',
                        'directory'
                    ]
                )
            }
        })
    }
)
