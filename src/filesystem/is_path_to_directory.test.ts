import { assertEquals } from "https://deno.land/std@0.203.0/assert/assert_equals.ts";
import isPathToDirectory from "./is_path_to_directory.ts";

Deno.test(
    'Is the path a path to a directory.',
    async (test) => {
        await test.step({
            name: 'Path to directory',
            fn: () => {
                assertEquals(
                    isPathToDirectory('path/to/directory'),
                    true
                )
            }
        })
        await test.step({
            name: 'Path to file',
            fn: () => {
                assertEquals(
                    isPathToDirectory('path/to/file.ts'),
                    false
                )
            }
        })
    }
)
