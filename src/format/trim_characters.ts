import trimCharactersEnd from "./trim_characters_end.ts";
import trimCharactersStart from "./trim_characters_start.ts";

/**
 * This function is similar to the standard `String.prototype.trim()` function. With this function, several characters
 * can be specified as a string which are then trimmed at the start and end of the `inputString`.
 * 
 * @param inputString The input string to trim the start and end
 * @param characters The characters to trim
 * @returns The trimmed input string
 */
export default function trimCharacters(
    inputString : string,
    characters : string
) : string {
    return trimCharactersStart(trimCharactersEnd(inputString, characters), characters)
}
