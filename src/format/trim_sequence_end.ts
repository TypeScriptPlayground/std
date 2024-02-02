/**
 * This function searches for the `sequence` at the end of the `inputString` and trims it.
 *
 * @example
 * ```
 * console.log(trimSequenceEnd('1abc123', 'c123'))
 * // 1ab
 * ```
 * @param inputString The input string to trim the end
 * @param sequence The sequence to trim
 * @returns The trimmed input string
 */
export default function trimSequenceEnd(
  inputString : string,
  sequence : string
) : string {
  if (!sequence || !sequence) {
    return inputString;
  }

  const sequenceLength = sequence.length;

  if (inputString.endsWith(sequence)) {
    return inputString.slice(0, -sequenceLength);
  }

  return inputString;
}
