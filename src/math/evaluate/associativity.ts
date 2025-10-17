export const associativity = {
  left: 'LEFT',
  right: 'RIGHT'
} as const;

export type Associativity = typeof associativity[keyof typeof associativity]
