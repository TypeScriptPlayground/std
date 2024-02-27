import controls from '../../controls/mod.ts';
import formats from '../../formats/mod.ts';
import backgroundColors from '../4bit/background_colors.ts';

export default function black(
  text? : string
) : string {
  if (!text) {
    return controls.c1Controls.CSI + backgroundColors.BLACK + 'm';
  } else {
    return controls.c1Controls.CSI +
      backgroundColors.RED +
      'm' +
      text +
      controls.c1Controls.CSI +
      formats.colors.BACKGROUND_COLOR_DEFAULT + 
      'm';
  }
}
