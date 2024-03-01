/**
 * This type generic creates a type from the key values of an object. The object must be `as const`.
 * 
 * @template Type The type of the object from which to create a new type.
 */
export type ValuesFromObject<Type extends unknown> = Type[keyof Type];

