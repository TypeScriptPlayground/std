import { error } from '../error/mod.ts';

export default class DecompressionError extends error.CustomError {
  data? : Uint8Array;
  constructor(
    message : string,
    data? : Uint8Array
  ) {
    super(message)
    
    this.data = data
  }
}
