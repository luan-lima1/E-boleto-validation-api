import { NextFunction, Request, Response } from "express";
import { ServiceError } from "../../../../config/error";
import logger from "../../../../config/logger";
import { StatusCodes } from "../../../../enums/status-code";
import { bankOrConv } from "../../local/bank-or-conv";
import { IBoletoController, IBoletoService } from "../interfaces/interface";

export default class BoletoController implements IBoletoController {
  private BoletoService: IBoletoService;

  constructor(BoletoService: IBoletoService) {
    this.BoletoService = BoletoService;
  }

  controller = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    logger.info("Controller::: Validando seu boleto");

    try {
      const { linha } = request.params;

      const resp = await bankOrConv(linha);
      response.status(StatusCodes.OK).json(resp);
      return next();
    } catch (error: any) {
      if (error.isAxiosError) {
        const errorMessage = "Erro ao tentar validar seu boleto.";
        return next(new ServiceError(errorMessage));
      }
      next(error);
    }
  };
}
