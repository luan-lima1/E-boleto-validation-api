import CustomError from "./custom-error";

export default class NotFoundError extends CustomError {
  constructor(message: string, data?: object) {
    super(40, "NotFoundError", message, data);
  }
}
