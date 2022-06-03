export default class CustomError extends Error {
  code: number;

  name: string;

  data: object | undefined;

  constructor(code: number, name: string, message: string, data?: object) {
    super(message);
    this.code = code;
    this.name = name;
    this.data = data;
  }
}
