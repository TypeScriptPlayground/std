/**
 * This type generic creates a type from an object.
 * 
 * @template Type The type of the object from which to create a new type.
 */
export type TypeFromObject<Type> = Type[keyof Type];
