/**
 * This function searches for the `sequence` at the start of the `inputString` and trims it.
 *
 * @example
 * ```
 * console.log(trimSequenceStart('1abc123', '1abc'))
 * // 123
 * ```
 * @param inputString The input string to trim the start
 * @param sequence The sequence to trim
 * @returns The trimmed input string
 */
export default function trimSequenceStart(
  inputString : string,
  sequence : string
) : string {
  if (!sequence || !sequence) {
    return inputString;
  }

  const sequenceLength = sequence.length;

  if (inputString.startsWith(sequence)) {
    return inputString.slice(sequenceLength);
  }

  return inputString;
}
