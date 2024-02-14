import { assertEquals } from "https://deno.land/std@0.203.0/assert/assert_equals.ts";
import { assertThrows } from "https://deno.land/std@0.203.0/assert/assert_throws.ts";
import replacePlaceholder from "./replace_placeholder.ts";

Deno.test(
  'Replacing a placeholder in a string.',
  async (test) => {
    await test.step({
      name: 'Normal placeholder string. ("{{person}}")',
      fn: () => {
        assertEquals(
          replacePlaceholder(
            'Test, hello {{person}}',
            {person: 'User'}
          ),
          'Test, hello User'
        );
      }
    })

    await test.step({
      name: 'Special placeholder string. ("\\{{person}}")',
      fn: () => {
        assertEquals(
          replacePlaceholder(
            'Test, hello \\{{person}}',
            {person: 'User'}
          ),
          'Test, hello \\{{person}}'
        );
      }
    })
    
    await test.step({
      name: 'Special placeholder string. ("\\\\{{person}}")',
      fn: () => {
        assertEquals(
          replacePlaceholder(
            'Test, hello \\\\{{person}}',
            {person: 'User'}
          ),
          'Test, hello \\\\User'
        );
      }
    })

    await test.step({
      name: 'Special placeholder string. ("{\\\\{person}}")',
      fn: () => {
        assertEquals(
          replacePlaceholder(
            'Test, hello {\\\\{person}}',
            {person: 'User'}
          ),
          'Test, hello {\\\\{person}}'
        );
      }
    })
    
    await test.step({
      name: 'Special placeholder string. ("{{person\\}}")',
      fn: () => {
        assertEquals(
          replacePlaceholder(
            'Test, hello {{person\\}}',
            {person: 'User'}
          ),
          'Test, hello {{person\\}}'
        );
      }
    })
    
    await test.step({
      name: 'Object does not exist. Throw reference error.',
      fn: () => {
        assertThrows(
          () => replacePlaceholder(
            'Test, hello {{keyDoesNotExist}}',
            {person: 'User'}
          ),
          ReferenceError
        )
      }
    })
  }
)
