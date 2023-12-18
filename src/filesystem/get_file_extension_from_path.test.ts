import { assertEquals } from "https://deno.land/std@0.203.0/assert/assert_equals.ts";
import getFileExtensionFromPath from "./get_file_extension_from_path.ts";

Deno.test(
    'Get file extension.',
    async (test) => {
        await test.step({
            name: 'Path to normal file',
            fn: () => {
                assertEquals(
                    getFileExtensionFromPath('test/path/to/file.ts'),
                    'ts'
                )
            }
        })
        await test.step({
            name: 'Path to normal file with backslash (\\) path',
            fn: () => {
                assertEquals(
                    getFileExtensionFromPath('test\\path\\to\\file.ts'),
                    'ts'
                )
            }
        })
        await test.step({
            name: 'Path to directory',
            fn: () => {
                assertEquals(
                    getFileExtensionFromPath('test/path/to'),
                    undefined
                )
            }
        })
        await test.step({
            name: 'Path to directory with trailing slash (/)',
            fn: () => {
                assertEquals(
                    getFileExtensionFromPath('test/path/to/'),
                    undefined
                )
            }
        })
        await test.step({
            name: 'Path to directory with trailing backslash (\\)',
            fn: () => {
                assertEquals(
                    getFileExtensionFromPath('test/path/to\\'),
                    undefined
                )
            }
        })
        await test.step({
            name: 'Path to normal file with special characters in path',
            fn: () => {
                assertEquals(
                    getFileExtensionFromPath('test/path/with.dot/file.ts'),
                    'ts'
                )
            }
        })
        await test.step({
            name: 'Path to directory with special characters in path',
            fn: () => {
                assertEquals(
                    getFileExtensionFromPath('te$t/p4th/with.dot/'),
                    undefined
                )
            }
        })
    }
)
