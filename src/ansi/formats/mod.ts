import actions, { Action } from './actions.ts';
import colors, { Color } from './colors.ts';
import fonts, { Font } from './fonts.ts';
import ideograms, { Ideogram } from './ideograms.ts';
import scripts, { Script } from './scripts.ts';
import textDecorations, { TextDecoration } from './text_decoreations.ts';

export const format = {
  actions,
  colors,
  fonts,
  ideograms,
  scripts,
  textDecorations
}

export type {
  Action,
  Color,
  Font,
  Ideogram,
  Script,
  TextDecoration
}
