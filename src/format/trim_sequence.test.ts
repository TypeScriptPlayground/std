import { assertEquals } from "https://deno.land/std@0.203.0/assert/assert_equals.ts";
import trimSequence from './trim_sequence.ts';

Deno.test(
  'Trims a sequence from a string.',
  async (test) => {
    await test.step({
      name: 'Empty input string',
      fn: () => {
        assertEquals(
          trimSequence('', '123'),
          ''
        )
      }
    })
    await test.step({
      name: 'Empty sequence',
      fn: () => {
        assertEquals(
          trimSequence('321abc123', ''),
          '321abc123'
        )
      }
    })

    await test.step({
      name: 'Normal input string',
      fn: () => {
        assertEquals(
          trimSequence('321abc123', '123'),
          '321abc'
        )
      }
    })

    await test.step({
      name: 'Normal input string reversed',
      fn: () => {
        assertEquals(
          trimSequence('321abc123', '321', true),
          'abc'
        )
      }
    })
  }
)
