import CustomError from '../../../error/custom_error.ts';

export default class InvalidInputError extends CustomError {
  value : string;
  constructor(
    message : string,
    value : string
  ) {
    super(message);
    this.value = value;
  }
}
