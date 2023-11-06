/**
 * This function calculates the median value of a number array.
 * 
 * @function
 * @param array List of numbers
 * @returns The median value
 */
export function median(array : number[]) : number {
    const sumOfArray = array.reduce(
        (
            previousValue,
            currentValue
        ) => {
            return previousValue + currentValue
        },
        0
    );

    if (sumOfArray === 0) {
        return 0;
    }

    const isOdd = ((array.length % 2) === 1);

    array.sort((a, b) => a - b);
    
    if (isOdd) {
        return array[(array.length + 1) / 2];
    } 
    
    return (array[(array.length / 2) - 1] + array[array.length / 2]) / 2
}
