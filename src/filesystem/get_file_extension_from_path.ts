/**
 * This function returns the file extension without the `.` of an provided path. If the path does not contain a file
 * extension, `undefined` is returned.
 * 
 * @example
 * ```ts
 * getFileExtensionFromPath('path/to/file.txt');
 * // txt
 * 
 * getFileExtensionFromPath('path/to/file.tar.gz');
 * // gz
 * 
 * getFileExtensionFromPath('path/to/directory');
 * // undefined
 * ```
 * 
 * @param path Path to the file
 * @returns File extension or undefined
 */
export default function getFileExtensionFromPath(path : string) : string | undefined {
  const matchFileExtension = /(?<=\.)[^\/\\]+$/
  return path.match(matchFileExtension)?.[0]
}
