/**
 * This function takes a path and a separator and returns the normalized path.
 * 
 * @example
 * ```
 * normalizePath('this///////is/a//very/messed//./up//.//long/../path//to///a//../../special/../file///.///');
 * // this/is/a/very/messed/up/path/file/
 * ```
 * @param path The path to normalize
 * @param separator The separator used for the path
 * @param maxIterations The maximum amount of iterations used when replacing the parent directory (`../`)
 * @returns The normalized path
 */
export default function normalizePath(
    path : string,
    separator : '\\' | '\/',
    maxIterations : number = 200
) : string {
    const matchStackedSeparator = new RegExp(`(?<=\\${separator})\\${separator}\\${separator}`, 'gm');
    const matchDoubleSeparator = new RegExp(`\\${separator}\\${separator}`, 'gm');
    const matchCurrentDirectory = new RegExp(`(?<!\.)\.\\${separator}`, 'gm');
    const matchParentDirectory = new RegExp(`([^\\${separator}]+\\${separator})\.\.\\${separator}`, 'gm');
    
    console.log(path);
    

    path = path.replace(
        matchStackedSeparator,
        ''
    ).replace(
        matchDoubleSeparator,
        separator
    ).replace(
        matchCurrentDirectory,
        ''
    );

    console.log(path);
    

    for (
        let replaceIteration = 0;
        path.match(matchParentDirectory) && replaceIteration < maxIterations;
        replaceIteration++
    ) {
        path = path.replace(matchParentDirectory, '')
        
        console.log(path);
    }

    return path;
}
