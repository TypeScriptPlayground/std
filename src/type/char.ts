
export type Char<Type extends string> = Type extends `${infer FirstChar}${infer Rest}`
  ? Rest extends ''
    ? Type
    : never
  : never;
