import { assertEquals } from "https://deno.land/std@0.203.0/assert/assert_equals.ts";
import isValidUrl from './is_valid_url.ts';

Deno.test(
  'Test for valid url string.',
  async (test) => {
    await test.step({
      name: 'Invalid URL',
      fn: () => {
        assertEquals(
          isValidUrl('abc'),
          false
        )
      }
    })

    await test.step({
      name: 'Valid URL',
      fn: () => {
        assertEquals(
          isValidUrl('https://example.com'),
          true
        )
      }
    })
  }
)
