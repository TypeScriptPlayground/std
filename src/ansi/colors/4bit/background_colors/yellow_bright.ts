import backgroundColor from '../background_color.ts';
import { backgroundColorCodes } from '../mod.ts';

/**
 * This function generates a string with bright yellow background color. If no text is specified, than this function
 * just returns the color code.
 * @param text Optional, only this text gets formatted
 * @returns The formatted string
 */
export default function yellowBright(text? : string) : string {
  if (!text) {
    return backgroundColor(backgroundColorCodes.YELLOW_BRIGHT);
  }
  return backgroundColor(backgroundColorCodes.YELLOW_BRIGHT) + text + backgroundColor(backgroundColorCodes.DEFAULT);
}
