import { c0Controls } from '../../../controls/mod.ts';
import * as format from '../../../formats/mod.ts';
import { backgroundColorCodes } from '../mod.ts';

/**
 * This function generates a string with magenta background color. If no text is specified, than this function just
 * returns the color code.
 * @param text Optional, only this text gets formatted
 * @returns The formatted string
 */
export default function magenta(text? : string) : string {
  if (!text) {
    return `${c0Controls.ESC}[${backgroundColorCodes.MAGENTA}`;
  }
  return `${c0Controls.ESC}[${backgroundColorCodes.MAGENTA}${text}${format.colors.BACKGROUND_COLOR_DEFAULT}`;
}
