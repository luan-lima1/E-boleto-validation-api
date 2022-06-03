import { Router } from "express";
import BoletoController from "../app/modules/boleto/controller/boleto-controller";
import BoletoService from "../app/modules/boleto/services/boleto-service";

const bancoRouter = Router();

const instanceBoleto = new BoletoController(new BoletoService());

bancoRouter.get("/boleto/:linha", instanceBoleto.controller);

export default bancoRouter;
