import {assertEquals} from 'https://deno.land/std@0.203.0/assert/assert_equals.ts'
import {mapFromObjectValueArray} from "./map_from_object_value_array.ts";

Deno.test(
    'Generate map from object.',
    () => {
        const map = new Map()
        map.set('b', 'a')
        map.set('c', 'a')

        assertEquals(
            map,
            mapFromObjectValueArray({a: [
                'b',
                'c'
            ]})
        )
    }
)
