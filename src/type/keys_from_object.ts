/**
 * This type generic creates a type from the keys of an object. The object must be `as const`.
 * 
 * @template Type The type of the object from which to create a new type.
 */
export type KeysFromObject<Type extends unknown> = keyof Type;
