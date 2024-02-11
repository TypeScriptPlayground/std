
import { assertEquals } from 'https://deno.land/std@0.203.0/assert/assert_equals.ts';
import parseString from './parse_string.ts';

Deno.test(
  'Split string between tokens.',
  async (test) => {
    await test.step({
      name: 'Empty string without tokens',
      fn: () => {
        assertEquals(
          parseString(
            '',
            []
          ),
          []
        );
      },
    });

    await test.step({
      name: 'Empty string with empty tokens',
      fn: () => {
        assertEquals(
          parseString(
            '',
            ['']
          ),
          []
        );
      },
    });

    await test.step({
      name: 'Empty string with tokens',
      fn: () => {
        assertEquals(
          parseString(
            '',
            ['-']
          ),
          []
        );
      },
    });

    await test.step({
      name: 'String without tokens',
      fn: () => {
        assertEquals(
          parseString(
            '100*(2^12/(7-5))/14.2',
            []
          ),
          ['100*(2^12/(7-5))/14.2']
        );
      },
    });

    await test.step({
      name: 'String without empty tokens',
      fn: () => {
        assertEquals(
          parseString(
            '100*(2^12/(7-5))/14.2',
            ['']
          ),
          ['100*(2^12/(7-5))/14.2']
        );
      },
    });

    await test.step({
      name: 'String with tokens',
      fn: () => {
        assertEquals(
          parseString(
            '100*(2^12/(7-5))/14.2',
            ['-']
          ),
          [
            '100*(2^12/(7',
            '-',
            '5))/14.2'
          ],
        );
      },
    });
  },
);
