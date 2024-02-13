import { assertEquals } from "https://deno.land/std@0.203.0/assert/assert_equals.ts";
import trimSequenceEnd from './trim_sequence_end.ts';

Deno.test(
  'Trims a sequence at the end of a string.',
  async (test) => {
    await test.step({
      name: 'Empty input string',
      fn: () => {
        assertEquals(
          trimSequenceEnd('', '123'),
          ''
        )
      }
    })
    await test.step({
      name: 'Empty sequence',
      fn: () => {
        assertEquals(
          trimSequenceEnd('321abc123', ''),
          '321abc123'
        )
      }
    })

    await test.step({
      name: 'Normal input string',
      fn: () => {
        assertEquals(
          trimSequenceEnd('321abc321', '321'),
          '321abc'
        )
      }
    })
  }
)
