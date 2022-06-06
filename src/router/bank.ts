import { Router } from "express";
import BoletoController from "../app/modules/boleto/controller/boleto-controller";

const bancoRouter = Router();

const instanceBoleto = new BoletoController();

bancoRouter.get("/boleto/:linha", instanceBoleto.controller);

export default bancoRouter;
