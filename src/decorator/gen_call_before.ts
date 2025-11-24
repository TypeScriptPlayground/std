/**
 * This function generator generates a class method decorator, that calls a function before the
 * class method gets called.
 * 
 * @example
 * ```ts
 * const RunBefore = genCallBefore<Foo>((instance) => {
 *   if (instance.logging) {
 *     console.log('Run before method call!');
 *   }
 * });
 * 
 * class Foo {
 *   public logging : boolean;
 * 
 *   constructor() {
 *     this.logging = false;
 *   }
 * 
 *   public enableLogging() {
 *     this.logging = true;
 *   }
 * 
 *   @RunBefore
 *   public hello() {
 *     console.log('Hello');
 *   }
 * }
 * 
 * const logger = new Foo();
 * 
 * logger.hello();
 * // Hello
 * logger.enableLogging();
 * logger.hello();
 * // Run before method call!
 * // Hello
 * ```
 * @param callbackFn Function to call before class method
 * @returns The decorator function.
 */
export function genCallBefore<Class>(
  callbackFn : (instance : Class, ...args : Array<unknown>) => void
) : <
  MethodArguments extends Array<unknown>,
  MethodReturn extends unknown
>(
  method : (this: Class, ...args : MethodArguments) => MethodReturn,
  _context : ClassMethodDecoratorContext<
    Class,
    (this : Class, ...args : MethodArguments) => MethodReturn
  >
) => (this : Class, ...args : MethodArguments) => MethodReturn {
  return function callBefore<
    MethodArguments extends Array<unknown>,
    MethodReturn extends unknown
  >(
    method : (this : Class, ...args : MethodArguments) => MethodReturn,
    _context : ClassMethodDecoratorContext<
      Class,
      (this : Class, ...args : MethodArguments) => MethodReturn
    >
  ) : (this : Class, ...args : MethodArguments) => MethodReturn {
    return function decorator(this : Class, ...args : MethodArguments) : MethodReturn {
      callbackFn(this, ...args);
      return method.call(this, ...args);
    };
  };
}
