export default function isPathToDirectory(path : string) : boolean {
    const matchFileExtension = /(?<=\.)[^\/\\]+$/
    return !matchFileExtension.test(path)
}
