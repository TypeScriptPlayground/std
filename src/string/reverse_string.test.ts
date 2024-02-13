import { assertEquals } from 'https://deno.land/std@0.203.0/assert/assert_equals.ts';
import reverseString from './reverse_string.ts';

Deno.test(
  'Reverse a string.',
  async (test) => {
    await test.step({
      name: 'Empty string',
      fn: () => {
        assertEquals(
          reverseString(''),
          '',
        );
      },
    });

    await test.step({
      name: 'Normal string',
      fn: () => {
        assertEquals(
          reverseString('abc'),
          'cba',
        );
      },
    });
  },
);
