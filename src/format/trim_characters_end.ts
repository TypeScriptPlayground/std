/**
 * This function is similar to the standard `String.prototype.trimEnd()` function. With this function, several characters
 * can be specified as a string which are then trimmed at the end of the `inputString`.
 * 
 * @param inputString The input string to trim the end
 * @param characters The characters to trim
 * @returns The trimmed input string
 */
export default function trimCharactersEnd(
    inputString : string,
    characters : string
) : string {
    const charactersSet = new Set(characters.split(''));
    let endIndex = inputString.length - 1;

    while (endIndex >= 0 && charactersSet.has(inputString[endIndex])) {
        endIndex--;
    }

    return inputString.substring(0, endIndex + 1);
}
