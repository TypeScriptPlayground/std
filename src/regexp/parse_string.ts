/**
 * This function parses an input string representing a RegExp pattern to a valid RegExp object, including flags.
 * 
 * @example
 * ```
 * console.log(parseString('/abc/gm'));
 * // /abc/gm
 * console.log(parseString('/ab/c/gmi'));
 * // /ab\/c/gmi
 * console.log(parseString('/ab\/c/gm'));
 * // /ab\/c/gm
 * ```
 * @param input The RegExp input string
 * @returns The RegExp object
 */
export default function parseString(input : string) : RegExp {
    const flags = input.replace(/.*\/([dgimsuvy]*)$/, (_, flags) => flags);
    const pattern = input.replace(new RegExp('^/(.*)/.*$'), (_, pattern) => pattern);
    return new RegExp(pattern, flags);
}

console.log(parseString('/ab.c/gm'));
