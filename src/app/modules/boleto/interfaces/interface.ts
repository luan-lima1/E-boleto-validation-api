import { NextFunction, Request, Response } from "express";

export interface BoletoResponse {
  barCode: string;
  expirationDate: string;
  amount: string;
}

export interface IBoletoController {
  controller(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void>;
}

export interface IBoletoService {
  serv(line: string): Promise<BoletoResponse>;
}
