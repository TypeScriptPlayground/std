import type LowerCaseLetter from './lower_case_letter.ts';

/**
 * This type represents all upper case letters.
 */
type UpperCaseLetter = Capitalize<LowerCaseLetter>;

export default UpperCaseLetter;
