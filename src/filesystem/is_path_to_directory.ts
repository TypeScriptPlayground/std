/**
 * This function checks if the provided path is a path to a directory.
 * 
 * @example
 * ```ts
 * isPathToDirectory('path/to/file.txt');
 * // false
 * 
 * isPathToDirectory('path/to/directory');
 * // true
 * ```
 * 
 * @param path Path to directory
 * @returns If path is path to directory
 */
export default function isPathToDirectory(path : string) : boolean {
    const matchFileExtension = /(?<=\.)[^\/\\]+$/
    return !matchFileExtension.test(path)
}
