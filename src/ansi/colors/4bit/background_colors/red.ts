import backgroundColor from '../background_color.ts';
import { backgroundColorCodes } from '../mod.ts';

/**
 * This function generates a string with red background color. If no text is specified, than this function just
 * returns the color code.
 * @param text Optional, only this text gets formatted
 * @returns The formatted string
 */
export default function red(text? : string) : string {
  if (!text) {
    return backgroundColor(backgroundColorCodes.RED);
  }
  return backgroundColor(backgroundColorCodes.RED) + text + backgroundColor(backgroundColorCodes.DEFAULT);
}
