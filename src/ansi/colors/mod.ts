import * as bit4 from './4bit/mod.ts'
import * as bit8 from './8bit/mod.ts';

import { BackgroundColorCode as Bit4BackgroundColorCode } from './4bit/background_color_codes.ts';
import { ForegroundColorCode as Bit4ForegroundColorCode } from './4bit/foreground_color_codes.ts';
import { ColorfulColorCode as Bit8ColorfulColorCode } from './8bit/colorful_colors.ts';
import { GrayscaleColorCode as Bit8GrayscaleColorCode } from './8bit/grayscale_colors.ts';
import { Color as Bit24Color } from './24bit/color.ts';

export {
  bit4,
  bit8,
}

export type {
  Bit4BackgroundColorCode,
  Bit4ForegroundColorCode,
  Bit8ColorfulColorCode,
  Bit8GrayscaleColorCode,
  Bit24Color,
}
