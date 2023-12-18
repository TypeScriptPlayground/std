import { assertEquals } from "https://deno.land/std@0.203.0/assert/assert_equals.ts";
import getFileExtension from "./get_file_extension.ts";

Deno.test(
    'Get file extension.',
    async (test) => {
        await test.step({
            name: 'Path to normal file',
            fn: () => {
                assertEquals(
                    getFileExtension('test/path/to/file.ts'),
                    'ts'
                )
            }
        })
        await test.step({
            name: 'Path to normal file with backslash (\\) path',
            fn: () => {
                assertEquals(
                    getFileExtension('test\\path\\to\\file.ts'),
                    'ts'
                )
            }
        })
        await test.step({
            name: 'Path to directory',
            fn: () => {
                assertEquals(
                    getFileExtension('test/path/to'),
                    undefined
                )
            }
        })
        await test.step({
            name: 'Path to directory with trailing slash (/)',
            fn: () => {
                assertEquals(
                    getFileExtension('test/path/to/'),
                    undefined
                )
            }
        })
        await test.step({
            name: 'Path to directory with trailing backslash (\\)',
            fn: () => {
                assertEquals(
                    getFileExtension('test/path/to\\'),
                    undefined
                )
            }
        })
        await test.step({
            name: 'Path to normal file with special characters in path',
            fn: () => {
                assertEquals(
                    getFileExtension('test/path/with.dot/file.ts'),
                    'ts'
                )
            }
        })
        await test.step({
            name: 'Path to directory with special characters in path',
            fn: () => {
                assertEquals(
                    getFileExtension('te$t/p4th/with.dot/'),
                    undefined
                )
            }
        })
    }
)
