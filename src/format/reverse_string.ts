/**
 * This function reverses a string.
 * 
 * @param inputString The string to reverse
 * @returns The reversed string
 */
export default function reverseString(inputString : string) : string {
  if (!inputString || inputString.length === 1) {
    return inputString;
  }
  return inputString.split('').reverse().join('');
}
