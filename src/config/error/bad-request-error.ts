import CustomError from "./custom-error";

export default class BadRequestError extends CustomError {
  constructor(message: string, data?: object) {
    super(70, "BadRequestError", message, data);
  }
}
