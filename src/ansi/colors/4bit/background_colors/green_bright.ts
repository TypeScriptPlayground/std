import backgroundColor from '../background_color.ts';
import { backgroundColorCodes } from '../mod.ts';

/**
 * This function generates a string with bright green background color. If no text is specified, than this function just
 * returns the color code.
 * @param text Optional, only this text gets formatted
 * @returns The formatted string
 */
export default function greenBright(text? : string) : string {
  if (!text) {
    return backgroundColor(backgroundColorCodes.GREEN_BRIGHT);
  }
  return backgroundColor(backgroundColorCodes.GREEN_BRIGHT) + text + backgroundColor(backgroundColorCodes.DEFAULT);
}
