import controls from '../../controls/controls.ts';
import Color from './color.ts';

export default function generateColor(color : Color) : string {
  return controls.CSI + color + controls.FORMAT_TERMINATOR;
}
