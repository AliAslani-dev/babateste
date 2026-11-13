export class ApiException extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly data?: unknown,
    public readonly code?: string
  ) {
    super(message);
    this.name = "ApiException";
  }
}