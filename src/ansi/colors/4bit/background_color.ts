import { c0Controls, instructions } from '../../controls/mod.ts';
import { BackgroundColorCode } from './background_color_codes.ts'

export default function backgroundColor(colorCode : BackgroundColorCode) : string {
  return `${c0Controls.ESC}${instructions.SEQUENCE_INTRODUCER}${colorCode}${instructions.FORMAT_TERMINATOR}`
}
