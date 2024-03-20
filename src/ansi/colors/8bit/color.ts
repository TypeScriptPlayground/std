import { ColorfulColorCode } from './colorful_colors.ts';
import { GrayscaleColorCode } from './grayscale_colors.ts'

/**
 * This type represents a 4 bit color
 */
export type Color = ColorfulColorCode | GrayscaleColorCode;
