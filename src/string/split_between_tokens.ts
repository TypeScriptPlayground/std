import { isEmpty } from '../array/mod.ts';

/**
 * This function spits a string between tokens.
 * 
 * @param input The input string
 * @param tokens A list of char tokens
 * @returns The spited array
 */
export default function splitBetweenTokens(
  input : string,
  tokens : string[]
) : string[] {
  if (!input) {
    return [];
  }
  if (isEmpty(tokens)) {
    return [input];
  }
  const escapedTokens = `\\${tokens.join('\\')}`;
  return input.split(new RegExp(`(?=[${escapedTokens}])|(?<=[${escapedTokens}]+)`));
}
