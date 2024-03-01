import {
  bit4BackgroundColors,
  bit4ForegroundColors,
  bit8Colors,
  bit8GrayscaleColors
} from './colors/mod.ts'
import {
  c0Controls,
  c1Controls,
  instructions
} from './controls/mod.ts'
import {
  
} from "./formats/mod.ts";

import {
  Bit4BackgroundColor,
  Bit4ForegroundColor,
  Bit8ColorfulColor,
  Bit8GrayscaleColor,
  Bit24Color
} from './colors/mod.ts'
import { 
  C0Control,
  C1Control,
  Instruction
} from "./controls/mod.ts";
import { 
  Color,
  Font,
  Action,
  Ideogram,
  Script,
  TextDecoration
} from "./formats/mod.ts";

export const ansi = {
  colors,
  controls,
  formats
}

export type {
    Bit4BackgroundColor,
    Bit4ForegroundColor,
    Bit8ColorfulColor,
    Bit8GrayscaleColor,
    Bit24Color,
    C0Control,
    C1Control,
    Control,
    Color,
    Font,
    Action,
    Ideogram,
    Script,
    TextDecoration
}













console.log(red('Hello World!', 'FOREGROUND'))
console.log(red('Hello World!', 'BACKGROUND'))
console.log(red('Hello World!', 'BOTH'))

console.log(whiteForeground() + redBackground() + 'Hello World!');

red(str)
