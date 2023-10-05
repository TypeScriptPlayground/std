/**
 * This function converts the values of an array from an object key into a map. Each value in the array corresponds to
 * the new key of the map. The key of the array is used as a value.
 * 
 * ```ts
 * const obj = {a: [
 *   'b',
 *   'c'
 * ]}
 * 
 * const map = {
 *   b: 'a',
 *   c: 'a'
 * }
 * ```
 * 
 * @param object The object to convert into a map
 * @returns The converted map
 */
export function mapFromObjectValueArray(object : Record<string, (string | number)[]>) : Map<string | number, string> {
    return Object.entries(object).reduce(
        (map, [key, values]) => {
          values.forEach((value) => map.set(value, key));
          return map;
        },
        new Map<string | number, string>(),
    );
}

