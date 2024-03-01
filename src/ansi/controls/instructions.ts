import { ValuesFromObject } from "../../type/mod.ts";

/**
 * This object contains all instruction ANSI control codes.
 */
const instructions = {
  CURSOR_UP_TERMINATOR: 'A',
  CURSOR_DOWN_TERMINATOR: 'B',
  CURSOR_RIGHT_TERMINATOR: 'C',
  CURSOR_LEFT_TERMINATOR: 'D',
  CURSOR_DOWN_BEGIN_TERMINATOR: 'E',
  CURSOR_UP_BEGIN_TERMINATOR: 'F',
  CURSOR_TO_COLUMN_TERMINATOR: 'G',
  DEC_SET: 'h',
  SCREEN_ERASE: 'J',
  SCREEN_FROM_CURSOR_TO_END_ERASE: 'K',
  DEC_RESET: 'l',
  FORMAT_TERMINATOR: 'm',
  CURSOR_SAVE_POSITION: 's',
  U: 'u',
  PRIVATE: '?'
} as const;

export default instructions;

/**
 * This type gets generated from the values of {@linkcode instructions}.
 */
export type Instruction = ValuesFromObject<typeof instructions>;

