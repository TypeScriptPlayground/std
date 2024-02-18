import { assertEquals } from "https://deno.land/std@0.203.0/assert/assert_equals.ts";
import isValidEmail from './is_valid_email.ts';

Deno.test(
  'Test for valid email string.',
  async (test) => {
    await test.step({
      name: 'Invalid email',
      fn: () => {
        assertEquals(
          isValidEmail('abc@example'),
          false
        )
      }
    })

    await test.step({
      name: 'Valid email',
      fn: () => {
        assertEquals(
          isValidEmail('abc@example.com'),
          true
        )
      }
    })
  }
)
