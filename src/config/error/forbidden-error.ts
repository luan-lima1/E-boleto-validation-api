import CustomError from "./custom-error";

export default class ForbiddenError extends CustomError {
  constructor(message: string, data?: object) {
    super(30, "ForbiddenError", message, data);
  }
}
