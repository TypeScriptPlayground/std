/**
 * This function takes a path and a separator and returns the normalized path.
 * 
 * @example
 * ```
 * normalizePath('this///////is/a//very/messed//./up//.//long/../path//to///a//..../special/../file///.///');
 * // this/is/a/very/messed/up/path/file/
 * ```
 * @param path The path to normalize
 * @param separator The separator used for the path
 * @returns The normalized path
 */
export default function normalizePath(
    path : string,
    separator : string | RegExp
) : string {
    return path;
}
