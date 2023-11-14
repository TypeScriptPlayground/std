export function getFileExtension(path : string) {
  const matchEntension = /(?<=\.)[^.]+$/
  return path.match(matchEntension)
}
