export default function isPathToFile(path : string) : boolean {
    const matchFileExtension = /(?<=\.)[^\/\\]+$/
    return matchFileExtension.test(path)
}
