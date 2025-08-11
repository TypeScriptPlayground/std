/**
 * this function strips the indent from the given text. It removes any leading whitespace characters
 * at the beginning of each line and trims any trailing newline characters. The function also
 * identifies the minimum indentation length among all lines and removes that amount of leading
 * whitespace from each line.
 * This is useful for cleaning up code or formatting text consistently.
 * 
 * @example
 * ```ts
 * console.log(stripIndent(`
 *     Hello
 *       World!
 * `))
 * // Hello
 * //   World!
 * ```
 * 
 * @param text Text to trip
 * @returns The trimmed text.
 */
export default function stripIndent(text : string) {
  const formatted = text.trimEnd().replace(/^ *\n/gm, '');
  
  const indentLength = formatted.match(/^ +/)?.[0].length;

  return formatted.replace(new RegExp(`^ {${indentLength}}`, 'gm'), '')
}
