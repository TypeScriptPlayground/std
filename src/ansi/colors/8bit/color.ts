import { ColorfulColor } from './colors.ts';
import { GrayscaleColor } from './grayscale_colors.ts'

/**
 * This type represents a 4 bit color
 */
type Color = ColorfulColor | GrayscaleColor;

export default Color;
