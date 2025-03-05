/**
 * This function checks if the input array is empty (only contains empty strings).
 * 
 * @example
 * ```ts
 * console.log(isEmpty([' ']))
 * // false
 * 
 * console.log(isEmpty(['']))
 * // true
 * 
 * console.log(isEmpty([
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
