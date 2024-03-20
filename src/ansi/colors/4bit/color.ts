import { BackgroundColorCode } from './background_color_codes.ts';
import { ForegroundColorCode } from './foreground_color_codes.ts';

/**
 * This type represents a 4 bit color
 */
export type Color = ForegroundColorCode | BackgroundColorCode;
