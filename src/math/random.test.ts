import { assertGreaterOrEqual } from "https://deno.land/std@0.224.0/assert/assert_greater_or_equal.ts";
import { assertLessOrEqual } from "https://deno.land/std@0.224.0/assert/assert_less_or_equal.ts";
import random from './random.ts';

Deno.test(
  'Generate a random number.',
  async (test) => {
    await test.step({
      name: 'Number is not below min.',
      fn: () => {
        assertGreaterOrEqual(
          random(
            10,
            20,
          ),
          10,
        );
      },
    });

    await test.step({
      name: 'Number is not above max.',
      fn: () => {
        assertLessOrEqual(
          random(
            10,
            20,
          ),
          20,
        );
      },
    });
  },
);
