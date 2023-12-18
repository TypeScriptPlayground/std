/**
 * This function returns the file extension without the `.` of an provided path. If the path does not contain a file
 * extension, `undefined` is returned.
 * 
 * @param path Path to the file
 * @returns File extension or undefined
 */
export default function getFileExtensionFromPath(path : string) : string | undefined {
  const matchExtension = /(?<=\.)[^\/\\]+$/
  return path.match(matchExtension)?.[0]
}
