/**
 * This function checks if the provided path is a path to a file.
 * 
 * @example
 * ```ts
 * isPathToFile('path/to/file.txt');
 * // true
 * 
 * isPathToFile('path/to/directory');
 * // false
 * ```
 * 
 * @param path Path to directory
 * @returns If path is path to file
 */
export default function isPathToFile(path : string) : boolean {
    const matchFileExtension = /(?<=\.)[^\/\\]+$/
    return matchFileExtension.test(path)
}
