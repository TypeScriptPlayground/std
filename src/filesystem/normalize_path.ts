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
    const matchStackedSeparator = /(?<=[\/\\])[\/\\][\/\\]/gm;
    const matchDoubleSeparator = /[\/\\][\/\\]/gm;
    const matchCurrentDirectory = /(?<!\.)\.[\/\\]/gm;
    const matchParentDirectory = /([^\/\\]+[\/\\])\.\.[\/\\]/gm;

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

    for (
        let replaceIteration = 0;
        path.match(matchParentDirectory) && replaceIteration < maxIterations;
        replaceIteration++
    ) {
        path = path.replace(matchParentDirectory, '')
    }

    return path;
}
