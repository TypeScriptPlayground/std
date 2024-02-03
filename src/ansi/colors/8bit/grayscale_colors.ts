import type { ValuesFromObject } from "../../../type/mod.ts";

/**
 * This object contains all 8-Bit grayscale color codes.
 * 
 * [Wikipedia](https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit)
 */
const grayscaleColors = {
  HEX_080808: '232',
  HEX_121212: '233',
  HEX_1C1C1C: '234',
  HEX_262626: '235',
  HEX_303030: '236',
  HEX_3A3A3A: '237',
  HEX_444444: '238',
  HEX_4E4E4E: '239',
  HEX_585858: '240',
  HEX_626262: '241',
  HEX_6C6C6C: '242',
  HEX_767676: '243',
  HEX_808080: '244',
  HEX_8A8A8A: '245',
  HEX_949494: '246',
  HEX_9E9E9E: '247',
  HEX_A8A8A8: '248',
  HEX_B2B2B2: '249',
  HEX_BCBCBC: '250',
  HEX_C6C6C6: '251',
  HEX_D0D0D0: '252',
  HEX_DADADA: '253',
  HEX_E4E4E4: '254',
  HEX_F0F0F0: '255'
} as const;

export default grayscaleColors;

/**
 * This type gets generated from the values of {@linkcode grayscaleColors}.
 */
export type GrayscaleColor = ValuesFromObject<typeof grayscaleColors>;
