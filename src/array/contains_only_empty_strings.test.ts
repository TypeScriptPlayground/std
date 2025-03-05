import { assertEquals } from 'https://deno.land/std@0.203.0/assert/assert_equals.ts';
import isEmpty from './is_empty.ts';

Deno.test(
  'Calculate median value of number array.',
  async (test) => {
    await test.step({
      name: 'Empty array []',
      fn: () => {
        assertEquals(
          isEmpty([]),
          true,
        );
      },
    });

    await test.step({
      name: 'Array with empty string',
      fn: () => {
        assertEquals(
          isEmpty(['']),
          true,
        );
      },
    });

    await test.step({
      name: 'Array with multiple empty strings',
      fn: () => {
        assertEquals(
          isEmpty([
            '',
            ''
          ]),
          true,
        );
      },
    });

    await test.step({
      name: 'Array with string',
      fn: () => {
        assertEquals(
          isEmpty([' ']),
          false,
        );
      },
    });
  },
);
