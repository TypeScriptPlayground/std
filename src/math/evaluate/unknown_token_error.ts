export class UnknownTokenError extends Error {
  public readonly token : string;

  constructor(token : string) {
    super(`Unknown token '${token}'`);

    this.token = token;
  }
}
