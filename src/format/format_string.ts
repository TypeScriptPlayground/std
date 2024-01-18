/**
 * This function replaces defined patterns in the given string with the corresponding key provided by the object. It can
 * be used to replace defined keys in translation texts or other templates.
 * 
 * @example
 * ```ts
 * console.log(formatString('Template {{name}}', {name: 'Hello'}));
 * // Template Hello
 * ```
 * 
 * @param string The string to format
 * @param formatArgs An object with the corresponding keys matching the ones in the string
 * @returns The formatted string
 */
export default function formatString(
    string : string,
    formatArgs : Record<string, string | number>
) : string {
    return string.replace(/(?<!\\)\{\{\s*(\w+)\s*}}/gm, (_, formatKey : string) : string => {
        if (!Object.hasOwn(formatArgs, formatKey)) {
            throw new ReferenceError(`Format key '${formatKey}' does not exist on the provided format object`);
        }
        return formatArgs[formatKey].toString()
    })
}
