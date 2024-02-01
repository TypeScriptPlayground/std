/**
 * This function is similar to the standard `String.prototype.trimStart()` function. With this function, several
 * characters can be specified as a string which are then trimmed at the start of the `inputString`.
 * 
 * @param inputString The input string to trim the start
 * @param characters The characters to trim
 * @returns The trimmed input string
 */
export default function trimCharactersStart(
    inputString : string,
    characters : string
) : string {
    const charactersSet = new Set(characters.split(''));
    let startIndex = 0;

    while (startIndex < inputString.length && charactersSet.has(inputString[startIndex])) {
        startIndex++;
    }

    return inputString.substring(startIndex);
}
