import type { Definition } from "./definition.ts"

export const defaults : Record<string, Definition> = {
  '+': {
    precedence: 1,
    associativity: 'LEFT',
    calculateFn: (a, b) => a + b
  },
  '-': {
    precedence: 1,
    associativity: 'LEFT',
    calculateFn: (a, b) => a - b
  },
  '*': {
    precedence: 2,
    associativity: 'LEFT',
    calculateFn: (a, b) => a * b
  },
  '/': {
    precedence: 2,
    associativity: 'LEFT',
    calculateFn: (a, b) => a / b,
    checkFn: (_, b) => b !== 0
  },
  '^': {
    precedence: 3,
    associativity: 'RIGHT',
    calculateFn: (a, b) => a ** b,
    checkFn: (a, b) => !(a < 0 && !Number.isInteger(b))
  }
}
