export class InvalidMethodValueError extends Error {
  public readonly method : string;
  public readonly args: (string | number)[];
  constructor(
    method : string,
    args : (string | number)[]
  ) {
    super(`Invalid value for method '${method}': (${args.join(', ')})`)

    this.method = method,
    this.args = args
  }
}
