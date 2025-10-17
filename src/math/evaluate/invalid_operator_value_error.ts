export class InvalidOperatorValueError extends Error {
  public readonly operator : string;
  public readonly a : string | number;
  public readonly b : string | number;

  constructor(
    operator: string,
    a: string | number,
    b: string | number
  ) {
    super(`Invalid value for operator '${operator}': (${a}, ${b})`)

    this.operator = operator,
    this.a = a;
    this.b = b;
  }
}
