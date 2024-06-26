/**
 * This function replaces defined placeholders in the given string with the corresponding key provided by the object. It
 * can be used to replace defined keys in translation texts or other templates.
 * 
 * @example
 * ```ts
 * console.log(replacePlaceholder('Hello {{name}}', {name: 'TypeScript'}));
 * // Hello TypeScript
 * ```
 * 
 * @param input The string to format
 * @param formatArgs An object with the corresponding keys matching the ones in the string
 * @param placeholderPattern A pattern to search for the keys
 * @returns The formatted string
 */
export default function replacePlaceholder(
  input : string,
  formatArgs : Record<string, string | number>,
  placeholderPattern : RegExp = /(?<=(?:[^\\])(?:\\\\)*)\{\{\s*(\w+)\s*}}/gm
) : string {
  return input.replace(placeholderPattern, (_, formatKey : string) : string => {
    if (!Object.hasOwn(formatArgs, formatKey)) {
      throw new ReferenceError(`Format key '${formatKey}' does not exist on the provided format object`);
    }
    return formatArgs[formatKey].toString();
  })
}
