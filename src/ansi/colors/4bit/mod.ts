import backgroundColorCodes from './background_color_codes.ts';
import foregroundColorCodes from './foreground_color_codes.ts';
import * as backgroundColors from './background_colors/mod.ts'
import * as foregroundColors from './foreground_colors/mod.ts'

import { Color } from './color.ts';
import { BackgroundColorCode } from './background_color_codes.ts';
import { ForegroundColorCode } from './foreground_color_codes.ts';

export {
  backgroundColorCodes,
  foregroundColorCodes,
  backgroundColors,
  foregroundColors
}

export type {
  BackgroundColorCode,
  ForegroundColorCode,
  Color
}
