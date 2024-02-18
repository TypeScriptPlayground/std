import DecompressionError from '../error/decompress_error.ts';

export default async function decompress(
  data : Uint8Array,
  format : string
) : Promise<Uint8Array> {
  const decompressionStream = new DecompressionStream(format);
  const compressedBlob = new Blob([data.buffer]);
  const decompressedStream = compressedBlob.stream().pipeThrough(decompressionStream);

  const {
    value: decompressedData,
    done: decompressingDone
  } = await decompressedStream.getReader().read();
  

  if (!decompressingDone) {
    return Uint8Array.from(decompressedData!);
  } else {
    throw new DecompressionError(
      'An error occurred while decompressing the data.',
      data
    );
  }
}
