import CustomError from "./custom-error";

export default class ValidationError extends CustomError {
  constructor(message: string) {
    super(20, "ValidationError", message);
  }
}
