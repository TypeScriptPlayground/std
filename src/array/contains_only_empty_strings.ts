/**
 * This function checks if the input array is empty (only contains empty strings).
 * 
 * @example
 * ```ts
 * console.log(containsOnlyEmptyStrings([' ']))
 * // false
 * 
 * console.log(containsOnlyEmptyStrings(['']))
 * // true
 * 
 * console.log(containsOnlyEmptyStrings([
 *   '',
 *   ''
 * ]))
 * // true
 * ```
 * @param input The input array to check
 * @returns If the array only contains empty strings
 */
export default function containsOnlyEmptyStrings(input : string[]) : boolean {
  return input.join('') === '';
}
