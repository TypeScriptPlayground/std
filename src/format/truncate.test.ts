import { assertEquals } from 'https://deno.land/std@0.203.0/assert/assert_equals.ts';
import truncate from './truncate.ts';

Deno.test(
  'Truncate string.',
  async (test) => {
    await test.step({
      name: 'string.length <= maxLength',
      fn: () => {
        assertEquals(
          truncate(
            'This is a short string.',
            100,
          ),
          'This is a short string.',
        );
      },
    });

    await test.step({
      name: 'string.length > maxLength',
      fn: () => {
        assertEquals(
          truncate(
            'This is a very long string that I would like to cut off at a certain length.',
            36,
          ),
          'This is a very long string that I...',
        );
      },
    });

    await test.step({
      name: 'string.length > maxLength with custom ellipsis.',
      fn: () => {
        assertEquals(
          truncate(
            'This is a very long string that I would like to cut off at a certain length.',
            32,
            ' >>>>>',
          ),
          'This is a very long string >>>>>',
        );
      },
    });
  },
);
