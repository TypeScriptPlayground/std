type HexDigit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'a' | 'b' | 'c' | 'd' | 'e'| 'f' | 'A' | 'B' | 'C' | 'D' | 'E'| 'F';

type ThreeDigitHex = `${HexDigit}${HexDigit}${HexDigit}`
type HexColor<HexColor extends string> = HexColor extends `#${ThreeDigitHex}${infer Rest}` ? (
    Rest extends `` ? HexColor : (Rest extends ThreeDigitHex ? HexColor : never)
): never;

export default HexColor
