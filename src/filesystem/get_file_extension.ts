export default function getFileExtension(path : string) {
  const matchExtension = /(?<=\.)[^.]+$/
  return path.match(matchExtension)
}
