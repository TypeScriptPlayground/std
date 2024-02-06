/**
 * This function calls the specified `pairFunction` for all the elements in an array. The function
 * starts with the second element and calls the `pairFunction` for every element. If the array
 * contains less than two elements, the `pairFunction` does not get called.
 * 
 * @example
 * ```ts
 * forEachPair(
 *   [1, 2, 3, 4],
 *   (previousValue, currentValue) => {console.log(previousValue, currentValue)}
 * )
 * // 1 2
 * // 2 3
 * // 3 4
 * ```
 * @param array The array to loop over
 * @param pairFunction A function that the method calls for each element in the array
 */
export default function forEachPair<ArrayType>(
  array : ArrayType[],
  pairFunction : (
    previousValue : ArrayType,
    currentValue : ArrayType,
    currentIndex : number,
    array : ArrayType[]
  ) => void
) : void {
  array.reduce(
    (
      previousValue,
      currentValue,
      currentIndex,
      array
    ) => {
      pairFunction(
        previousValue,
        currentValue,
        currentIndex,
        array
      );
      return currentValue
    }
  )
}
