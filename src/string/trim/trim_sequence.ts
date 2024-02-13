import reverseString from '../reverse_string.ts';
import trimSequenceEnd from "./trim_sequence_end.ts";
import trimSequenceStart from "./trim_sequence_start.ts";

/**
 * This function searches for the `sequence` at the start and end of the `inputString` and trims it.
 * 
 * @example
 * ```
 * console.log(trimSequence('321abc123', '123'))
 * // 321abc
 * 
 * console.log(trimSequence('321abc123', '123', true))
 * // abc
 * ```
 * @param inputString The input string to trim the start and end
 * @param characters The characters to trim
 * @param [reverse=false] If the end sequence to search should be reversed
 * @returns The trimmed input string
 */
export default function trimSequence(
  inputString : string,
  sequence : string,
  reverse : boolean = false
) : string {
  return trimSequenceStart(trimSequenceEnd(inputString, reverse ? reverseString(sequence) : sequence), sequence);
}
