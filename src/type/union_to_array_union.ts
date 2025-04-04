/**
 * This type creates an array of each type in the Union.
 * 
 * @example
 * ```ts
 * type MyUnion = string | number | number[];
 * type MyArray = UnionToArrayUnion<MyUnion>;
 * // type MyArray = string[] | number[] | number[][];
 * ```
 * @template Type The type of the union from which to create a new array type
 */
// deno-lint-ignore no-explicit-any
export type UnionToArrayUnion<Type> = Type extends any ? Type[] : never;
