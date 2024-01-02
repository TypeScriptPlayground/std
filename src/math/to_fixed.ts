/** */
export default function toFixed(
    value : number,
    precision : number,
    handleTrailingDecimalPlaces : (value : number) => number = Math.round
) {
    return (handleTrailingDecimalPlaces(value * precision)) / precision;
}
