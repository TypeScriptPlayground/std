/**
 * This type
 */
export type UnionToArrayUnion<Type> = Type extends any ? Type[] : never;
