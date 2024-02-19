import controls from '../../controls/mod.ts';
import { ForegroundColor } from './foreground_colors.ts';

export default function generateForegroundColor(color : ForegroundColor) : string {
  return controls.c1Controls.CSI + color + '';
}
