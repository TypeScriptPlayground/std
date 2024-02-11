/**
 * This function calculates the average value of a number array.
 * 
 * @function
 * @param list List of number elements
 * @returns number, the average amount from the number array
 */
export default function average(list : number[]) : number {
  return list.reduce((last, current) => last + current, 0) / list.length || 0;
}
