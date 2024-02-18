/**
 * This function truncates (cuts off) the provided string at the `maxLength` (including the ellipsis pattern) and
 * appends the `ellipsis` pattern to the string. The ellipsis defaults to "...".
 * 
 * @example
 * ```ts
 * console.log(truncate(
 *   'This is a very long string that I would like to cut off at a certain length.',
 *   36
 * ));
 * // This is a very long string that I...
 * 
 * console.log(truncate(
 *   'This is a very long string that I would like to cut off at a certain length.',
 *   32,
 *   ' >>>>>'
 * ));
 * // This is a very long string >>>>>
 * ```
 * 
 * @param input The string to truncate
 * @param maxLength The maximum length of the string (including the ellipsis pattern)
 * @param ellipsis Ellipsis pattern (default "...")
 * @returns The truncated string
 */
export default function truncate(
    input : string,
    maxLength : number,
    ellipsis : string = '...'
) : string {
    if (input.length <= maxLength) {
        return input;
    } else {
        return input.slice(0, maxLength - ellipsis.length) + ellipsis;
    }
}
