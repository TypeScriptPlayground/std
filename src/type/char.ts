
export type Char<Type extends string> = Type extends `${infer _FirstChar}${infer Rest}`
  ? Rest extends ''
    ? Type
    : never
  : never;

