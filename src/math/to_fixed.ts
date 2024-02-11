/**
 * This function removes decimal places based on the `precision`. No string conversion is used! By default `Math.round`
 * is used for the last decimal place.
 * 
 * @param value The number for which the decimal places are to be removed
 * @param precision The number of decimal places
 * @param [handleTrailingDecimalPlaces=Math.round] The function for calculating the last decimal place 
 * @returns The converted number
 */
export default function toFixed(
  value : number,
  precision : number,
  handleTrailingDecimalPlaces : (decimalPlacesValue : number) => number = Math.round
) : number {
  const decimalPlaces = Math.pow(10, precision)
  return (handleTrailingDecimalPlaces(value * decimalPlaces)) / decimalPlaces;
}
