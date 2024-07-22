/**
 * This function capitalizes a word.
 * 
 * @example
 * ```
 * console.log(capitalizeWord('hello'))
 * // Hello
 * 
 * console.log(capitalizeWord('wOrLd'))
 * // World
 * ```
 * @param inputString The string to reverse
 * @returns The reversed string
 */
export function capitalizeWord(word : string) : string {
  return word ? word?.[0]?.toLocaleUpperCase() + word.slice(1).toLocaleLowerCase() : word;
}
