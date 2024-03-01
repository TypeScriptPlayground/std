import type { BackgroundColor } from './background_colors.ts';
import type { ForegroundColor } from './foreground_colors.ts';

/**
 * This type represents a 4 bit color
 */
type Color = ForegroundColor | BackgroundColor;

export default Color;
