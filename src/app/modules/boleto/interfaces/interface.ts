import { NextFunction, Request, Response } from "express";

export interface IBoletoController {
  controller(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void>;
}
