
import { assertEquals } from 'https://deno.land/std@0.203.0/assert/assert_equals.ts';
import splitBetweenTokens from './split_between_tokens.ts';

Deno.test(
  'Split string between tokens.',
  async (test) => {
    await test.step({
      name: 'Empty string without tokens',
      fn: () => {
        assertEquals(
          splitBetweenTokens(
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
          splitBetweenTokens(
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
          splitBetweenTokens(
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
          splitBetweenTokens(
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
          splitBetweenTokens(
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
          splitBetweenTokens(
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
