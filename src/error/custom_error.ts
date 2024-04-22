/**
 * This error class provides the default behavior of the base Error class when inheriting,
 * but takes into account the inheritance of the types.
 * This allows you to check `error instanceof CustomError`.
 * The error class suppresses the correct inheritance of the prototype if you inherit directly from it. 
 *
 * @param message The custom error message
 * @param options The custom error options
 * @returns The custom error
 */
export default class CustomError extends Error {
  constructor(
    message : string,
    options? : ErrorOptions
  ) {
    super(message, options);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
