import {c0Controls} from '../../controls/mod.ts';
import backgroundColors from '../4bit/background_colors.ts';
import generateColor from '../4bit/generate_color.ts';

export default function black(
  text? : string
) : string {
  if (!text) {
    return generateColor(backgroundColors.BLACK)
  }
  return generateColor(backgroundColors.BLACK) + text
}
