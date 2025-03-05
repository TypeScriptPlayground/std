import { assertEquals } from 'https://deno.land/std@0.203.0/assert/assert_equals.ts';
import containsOnlyEmptyStrings from './contains_only_empty_strings.ts';

Deno.test(
  'Calculate median value of number array.',
  async (test) => {
    await test.step({
      name: 'Empty array []',
      fn: () => {
        assertEquals(
          containsOnlyEmptyStrings([]),
          true,
        );
      },
    });

    await test.step({
      name: 'Array with empty string',
      fn: () => {
        assertEquals(
          containsOnlyEmptyStrings(['']),
          true,
        );
      },
    });

    await test.step({
      name: 'Array with multiple empty strings',
      fn: () => {
        assertEquals(
          containsOnlyEmptyStrings([
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
          containsOnlyEmptyStrings([' ']),
          false,
        );
      },
    });
  },
);
