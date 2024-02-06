import { assertEquals } from "https://deno.land/std@0.203.0/assert/assert_equals.ts";
import {
  assertSpyCall,
  assertSpyCalls,
  spy,
} from "https://deno.land/std@0.214.0/testing/mock.ts";
import forEachPair from "./for_each_pair.ts";

Deno.test(
    'Remove duplicates from array.',
    async (test) => {
        await test.step({
            name: 'Empty array',
            fn: () => {
                
            }
        })
    }
)
