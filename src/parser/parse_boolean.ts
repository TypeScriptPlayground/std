/**
 * This function converts the provided string boolean to an actual boolean type.
 * 
 * @param booleanString The boolean string
 * @returns The boolean value of the string
 */
export default function parseBoolean(booleanString : string) : boolean {
  return String(booleanString).toLowerCase() === 'true';
}
