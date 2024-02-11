/**
 * This function generates an array from the keys of the object.
 * 
 * @param object The object to generate the array from
 * @returns The generated array
 */
export default function keysFromObject(object : object) : string[] {
  return Object.keys(object);
}
