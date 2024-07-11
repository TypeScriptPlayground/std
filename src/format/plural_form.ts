/**
 * This function returns a sigular or plural string based on the count.
 */
export default function pluralForm(
  count : number,
  singular : string,
  plural : string
): string {
  return count === 1 ? singular : plural;
}
