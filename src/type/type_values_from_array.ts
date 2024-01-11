/**
 * This type generic creates a type from the values of an array. The array must be `as const`.
 * 
 * @template Type The type of the array from which to create a new type.
 */
type TypeValuesFromArray<Type extends readonly unknown[]> = Type[number];

export default TypeValuesFromArray
