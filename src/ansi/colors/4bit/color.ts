import { BackgroundColor } from './background_colors.ts';
import { ForegroundColor } from './foreground_colors.ts';

/**
 * This type represents a 4 bit color
 */
type Color = ForegroundColor | BackgroundColor;

export default Color;
