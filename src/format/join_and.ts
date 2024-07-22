
/**
 * This function takes an array of elements and returns a new string by concatenating all of the
 * elements in this array except of the last element. The last element is concatenated with the
 * `and` character string as a prefix.
 * 
 * @example
 * ```
 * console.log(joinAnd([1, 2, 3]))
 * // 1,2 and 3
 * 
 * console.log(joinAnd(['foo', 'bar', 'baz'], ', ', ' but not '))
 * // foo, bar but not baz
 * ```
 * @param elements 
 * @param [separator=','] A string to separate each pair of adjacent elements of the array
 * @param [and=' and '] A string prefix for concatenating the last element
 * @returns The new concatenated string
 */
export default function joinAnd(
  elements : (string | number)[],
  separator : string = ',',
  and : string = ' and '
) : string {
  if (elements.length === 0) {
    return ''
  }
  if (elements.length === 1) {
    return elements[0].toString()
  }

  return elements.slice(0, -1).join(separator) + and + elements.at(-1)
}
