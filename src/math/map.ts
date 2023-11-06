/**
 * This function maps a value from one range to another range. This can be used for example to
 * calculate a percentage from a value.
 * 
 * @function
 * @param value The number to map
 * @param fromMin The lower bound of the value’s current range
 * @param fromMax The upper bound of the value’s current range
 * @param toMin The lower bound of the value’s target range
 * @param toMax The upper bound of the value’s target range
 * @returns The mapped value
 */
export default function map(
    value : number,
    fromMin : number,
    fromMax : number,
    toMin : number,
    toMax : number
) : number {
    if (value === 0) {
        return 0;
    }
    
    return (value - fromMin) * (toMax - toMin) / (fromMax - fromMin) + toMin;
}
