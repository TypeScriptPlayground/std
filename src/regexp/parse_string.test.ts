import { assertEquals } from "https://deno.land/std@0.203.0/assert/assert_equals.ts";
import parseString from "./parse_string.ts";

Deno.test(
  'Parse RegExp object from string.',
  async (test) => {
    await test.step({
      name: 'Pattern without flags',
      fn: () => {
        assertEquals(
          parseString(
            '/abc/',
          ),
          new RegExp('abc')
        )
      }
    })

    await test.step({
      name: 'Pattern with flags',
      fn: () => {
        assertEquals(
          parseString(
            '/abc/gm',
          ),
          new RegExp('abc', 'gm')
        )
      }
    })

    await test.step({
      name: 'Pattern with special characters',
      fn: () => {
        assertEquals(
          parseString(
            '/a/bc/gm',
          ),
          new RegExp('a/bc', 'gm')
        )
      }
    })
  }
)
