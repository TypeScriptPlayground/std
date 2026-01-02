const lowerPixelChar = '\u2584';
const upperPixelChar = '\u2580';
const fullBlockChar = '\u2588';

export function renderBitMap(
  bitMap: boolean[],
  width: number,
  height: number
): string {
  let result = '';

  for (let bitMapY = 0; bitMapY < height; bitMapY += 2) {
    for (let bitMapX = 0; bitMapX < width; bitMapX++) {
      const upperPixel = bitMap[bitMapY * width + bitMapX];
      const lowerPixel = (bitMapY + 1 < height) ? bitMap[(bitMapY + 1) * width + bitMapX] : false;

      if (upperPixel && lowerPixel) {
        // Both pixels set
        result += '\x1b[37m' + fullBlockChar + '\x1b[0m';
      } else if (upperPixel && !lowerPixel) {
        // Upper pixel set
        result += '\x1b[37;48;5;16m' + upperPixelChar + '\x1b[0m';
      } else if (!upperPixel && lowerPixel) {
        // Lower pixel set
        result += '\x1b[37;48;5;16m' + lowerPixelChar + '\x1b[0m';
      } else {
        // No pixels set
        result += '\x1b[30m' + fullBlockChar + '\x1b[0m';
      }
    }
    result += '\n';
  }

  return result;
}
