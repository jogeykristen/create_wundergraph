import { OperationError } from "@wundergraph/sdk/operations";

export class CustomError extends OperationError {
  statusCode: number;
  code = "CustomError" as const;
  constructor(message: string, statusCode: number) {
    super({ message, code: "CustomError", statusCode });
    this.statusCode = statusCode;
  }
}
