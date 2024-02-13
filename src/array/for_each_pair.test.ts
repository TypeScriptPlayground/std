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
        function dummyFunction(
          previousValue : number,
          currentValue : number
        ) : {
          previousValue : number,
          currentValue : number
        } { return {
          previousValue, currentValue
        }}
        
        const dummyFunctionSpy = spy(dummyFunction);

        forEachPair(
          [0, 2, 3, 7],
          dummyFunctionSpy
        )

        assertSpyCall(dummyFunctionSpy, 0, {
          args: [
            0,
            2
          ],
          returned: {
            currentValue: 0,
            previousValue: 2
          }
        })
        assertSpyCall(dummyFunctionSpy, 1, {
          args: [
            2,
            3
          ],
          returned: {
            currentValue: 2,
            previousValue: 3
          }
        })
        assertSpyCall(dummyFunctionSpy, 2, {
          args: [
            3,
            7
          ],
          returned: {
            currentValue: 3,
            previousValue: 7
          }
        })

        assertSpyCalls(dummyFunctionSpy, 3);
      }
    })
  }
)
