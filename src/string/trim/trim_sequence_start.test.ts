import { assertEquals } from "https://deno.land/std@0.203.0/assert/assert_equals.ts";
import trimSequenceStart from './trim_sequence_start.ts';

Deno.test(
  'Trims a sequence at the start of a string.',
  async (test) => {
    await test.step({
      name: 'Empty input string',
      fn: () => {
        assertEquals(
          trimSequenceStart('', '123'),
          ''
        )
      }
    })
    await test.step({
      name: 'Empty sequence',
      fn: () => {
        assertEquals(
          trimSequenceStart('321abc123', ''),
          '321abc123'
        )
      }
    })

    await test.step({
      name: 'Normal input string',
      fn: () => {
        assertEquals(
          trimSequenceStart('321abc321', '321'),
          'abc321'
        )
      }
    })
  }
)
