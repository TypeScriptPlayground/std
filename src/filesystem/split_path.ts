/**
 * This function takes a path and a separator and returns a separated string array, containing the single path elements.
 *
 * @param path The path to separate
 * @param separator The separator used for the path
 * @returns The separated path
 */
export default function splitPath(
    path : string,
    separator : string | RegExp
) : string[] {
    return path.split(separator);
}
