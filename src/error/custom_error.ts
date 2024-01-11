/**
 * This error class provides the default behavior of the base Error class when inheriting,
 * but takes into account the inheritance of the types.
 * This allows you to check `error instanceof CustomError`.
 * The error class suppresses the correct inheritance of the prototype if you inherit directly from it. 
 * inherits directly from it
 *
 * @param message The custom error message
 * @returns The custom error
 */
export default class CustomError extends Error {
  constructor(message : string) {
    super(message);
    Object.setPrototypeOf( this, new.target.prototype );
  }
}
