/**
 * ErrorHandler provides a fluent API for selectively handling errors.
 * 
 * Supports built-in errors (SyntaxError, TypeError, ReferenceError) as well as custom errors
 * through the `.catch()` method. If no handler matches, the error is automatically thrown.
 */
class ErrorHandler {
  private handled : boolean = false;
  private scheduled : boolean = false;

  /**
   * Creates a new ErrorHandler instance for the given error.
   * 
   * @param currentError The error to handle (unknown)
   */
  constructor(private currentError : unknown) {}

  /** Marks the error as handled */
  private markHandled() : void {
    this.handled = true;
  }

  /**
   * Checks if the current error is an instance of the given class
   * and calls the callback if it matches.
   * 
   * @param errorClass The constructor of the error class
   * @param callback Function to handle the error if it matches
   */
  private handleOnce<ErrorType extends Error>(
    errorClass : new (...args : string[]) => ErrorType,
    callback : (error : ErrorType) => void
  ) : void {
    if (!this.handled && this.currentError instanceof errorClass) {
      callback(this.currentError as ErrorType);
      this.markHandled();
    }
    this.scheduleDone();
  }

  /** Checks if the error has been handled and throws it otherwise */
  private done() : void {
    if (!this.handled) {
      throw this.currentError;
    }
  }

  /**
   * Schedules an asynchronous call to `done()` after the current call stack,
   * ensuring automatic check at the end of the chain.
   */
  private scheduleDone() : void {
    if (!this.scheduled) {
      this.scheduled = true;
      setTimeout(() => {
        this.done();
      }, 0);
    }
  }

  /**
   * Handles the error if it is a SyntaxError.
   * 
   * @param callback Function that handles the SyntaxError
   */
  syntax(callback : (error : SyntaxError) => void) : this {
    this.handleOnce(SyntaxError, callback);
    return this;
  }

  /**
   * Handles the error if it is a TypeError.
   * 
   * @param callback Function that handles the TypeError
   */
  type(callback : (error : TypeError) => void) : this {
    this.handleOnce(TypeError, callback);
    return this;
  }

  /**
   * Handles the error if it is a ReferenceError.
   * 
   * @param callback Function that handles the ReferenceError
   */
  reference(callback : (error : ReferenceError) => void) : this {
    this.handleOnce(ReferenceError, callback);
    return this;
  }

  /**
   * Handles the error if it is a RangeError.
   * 
   * @param callback Function that handles the RangeError
   */
  range(callback : (error : RangeError) => void) : this {
    this.handleOnce(RangeError, callback);
    return this;
  }

  /**
   * Handles the error if it is a URIError.
   * 
   * @param callback Function that handles the URIError
   */
  uri(callback : (error : URIError) => void) : this {
    this.handleOnce(URIError, callback);
    return this;
  }

  /**
   * Handles the error if it is a EvalError.
   * 
   * @param callback Function that handles the EvalError
   */
  eval(callback : (error : EvalError) => void) : this {
    this.handleOnce(EvalError, callback);
    return this;
  }

  /**
   * Handles the error if it is an instance of the provided error class.
   * Supports custom errors as well.
   * 
   * @param errorClass The constructor of the error class
   * @param callback Function to handle the error if it matches
   */
  catch<ErrorType extends Error>(
    errorClass : new (...args : unknown[]) => ErrorType,
    callback : (error : ErrorType) => void
  ): this {
    this.handleOnce(errorClass, callback);
    return this;
  }

  /**
   * Fallback handler: called if no previous handler matched the error.
   * 
   * @param callback Function that handles the error
   */
  unknown(callback : (error : unknown) => void) : this {
    if (!this.handled) {
      callback(this.currentError);
      this.markHandled();
    }
    return this;
  }
}

/**
 * Creates a new ErrorHandler for the given error and returns a Proxy
 * that supports fluent API and method chaining.
 * 
 * @param error The error object (unknown)
 * @returns ErrorHandler Proxy for fluent chaining
 */
export function error(error : unknown): ErrorHandler {
  const handler = new ErrorHandler(error);

  return new Proxy(handler, {
    // deno-lint-ignore no-explicit-any
    get(target, prop, receiver) : any {
      // deno-lint-ignore no-explicit-any
      const orig = (target as any)[prop];
      if (typeof orig === "function") {
        return (...args: unknown[]) => {
          orig.apply(target, args);
          return receiver;
        };
      }
      return orig;
    },
  });
}
