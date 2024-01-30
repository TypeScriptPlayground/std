import { assertEquals } from "https://deno.land/std@0.203.0/assert/assert_equals.ts";
import parseBoolean from "./parse_boolean.ts";

Deno.test(
  'Parse boolean string to boolean type.',
  async (test) => {
    await test.step({
      name: 'Invalid boolean',
      fn: () => {
        assertEquals(
            parseBoolean('not valid'),
            false
        )
      }
    })

    await test.step({
      name: 'Valid boolean ("true")',
      fn: () => {
        assertEquals(
            parseBoolean('true'),
            true
        )
      }
    })

    await test.step({
      name: 'Valid boolean ("True")',
      fn: () => {
        assertEquals(
            parseBoolean('True'),
            true
        )
      }
    })
  }
)
