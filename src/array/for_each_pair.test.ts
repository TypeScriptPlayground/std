import {
  assertSpyCall,
  assertSpyCalls,
  spy,
} from "https://deno.land/std@0.214.0/testing/mock.ts";
import forEachPair from "./for_each_pair.ts";

Deno.test(
  'Call function for each pair.',
  async (test) => {
    function dummyFunction(
      previousValue : number,
      currentValue : number,
      currentIndex: number, 
      array: number[]
    ) : {
      previousValue : number,
      currentValue : number,
      currentIndex: number, 
      array: number[]
    } {
      return {
        previousValue,
        currentValue,
        currentIndex,
        array
      }
    }
    
    const dummyFunctionSpy = spy(dummyFunction);

    forEachPair(
      [
        0,
        2, 
        3, 
        7
      ],
      dummyFunctionSpy
    )
    
    await test.step({
      name: 'Function call arguments.',
      fn: () => {
        assertSpyCall(dummyFunctionSpy, 0, {
          args: [
            0,
            2,
            1,
            [
              0, 
              2, 
              3, 
              7
            ]
          ]
        })
    
        assertSpyCall(dummyFunctionSpy, 1, {
          args: [
            2,
            3,
            2,
            [
              0, 
              2, 
              3, 
              7
            ]
          ]
        })
    
        assertSpyCall(dummyFunctionSpy, 2, {
          args: [
            3,
            7,
            3,
            [
              0, 
              2, 
              3, 
              7
            ]
          ]
        })
      }
    })

    await test.step({
      name: 'Function calls.',
      fn: () => {
        assertSpyCalls(dummyFunctionSpy, 3);
      }
    })
  }
)
