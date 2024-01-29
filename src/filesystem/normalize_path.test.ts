import { assertEquals } from "https://deno.land/std@0.203.0/assert/assert_equals.ts";
import normalizePath from "./normalize_path.ts";

Deno.test(
    'Split path.',
    async (test) => {
        await test.step({
            name: 'Path to file with separator "/".',
            fn: () => {
                assertEquals(
                    normalizePath(
                        'this///////is/a//very/messed//./up//.//long/../path//to///a//../../special/../file///.///',
                        '/'
                    ),
                    'this/is/a/very/messed/up/path/file/'
                )
            }
        })
    }
)
