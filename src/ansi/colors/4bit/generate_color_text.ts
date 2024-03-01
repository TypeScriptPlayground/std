import Color from './color.ts';
import generateColor from './generate_color.ts'

export default function generateColorText(
  color : Color,
  text : string
) : string {
  return generateColor(color) + text + generateColor()
}
