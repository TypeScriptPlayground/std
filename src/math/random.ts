/**
 * This function generates a random number between `0` and `max`.
 * @param min Minimum number
 * @returns A random number
 */
export default function random(max : number) : number;
/**
 * This function generates a random number between `min` and `max`.
 * @param min Minimum number
 * @param max Maximum number
 * @returns A random number
 */
export default function random(
  min : number,
  max : number
) : number;
export default function random(...parameters : number[]) : number {
  if (parameters.length === 1) {
    const [max] = parameters
    return Math.random() * max
  }
  const [min, max] = parameters
  return Math.random() * (max - min) + min;
}
