export class AppError<T = undefined> extends Error {
  constructor(message: string, statusCode: number, data?: T) {
    super(message);
    this.statusCode = statusCode;
    this.data = data;
  }
  public statusCode: number;
  public data?: T;
}

