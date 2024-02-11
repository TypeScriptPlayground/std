/**
 * This function generates an array from the values of the object.
 * 
 * @param object The object to generate the array from
 * @returns The generated array
 */
export default function valuesFromObject<Type>(object : {[key : string]: Type} | ArrayLike<Type>) : Type[] {
  return Object.values(object);
}
