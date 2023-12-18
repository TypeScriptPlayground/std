import { assertEquals } from "https://deno.land/std@0.203.0/assert/assert_equals.ts";
import isPathToFile from "./is_path_to_file.ts";

Deno.test(
    'Is the path a path to a directory.',
    async (test) => {
        await test.step({
            name: 'Path to file.',
            fn: () => {
                assertEquals(
                    isPathToFile('path/to/file.ts'),
                    true
                )
            }
        })
        await test.step({
            name: 'Path to directory.',
            fn: () => {
                assertEquals(
                    isPathToFile('path/to/directory'),
                    false
                )
            }
        })
    }
)
