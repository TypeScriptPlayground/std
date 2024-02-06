/**
 * This function removes duplicates in an array. This function does not work for objects.
 * 
 * @example
 * ```ts
 * console.log(removeDuplicates([1, 2, 3, 4, 3, 5, 4]));
 * // [1, 2, 3, 4, 5]
 * 
 * console.log(removeDuplicates(['Apple', 'Banana', 'Banana', 'Cherry', 'Apple']));
 * // ['Apple', 'Banana', 'Cherry']
 * ```
 * @param array The array from where to remove duplicates from
 * @returns The array without duplicated items
 */
export default function removeDuplicates<
    ArrayType extends number | string | undefined
>(array : ArrayType[]) : ArrayType[] {
    return [...new Set(array)];
}
