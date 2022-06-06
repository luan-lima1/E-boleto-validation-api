import { Router } from "express";
import bancoRouter from "./bank";

const router = Router();

router.use(bancoRouter);

export default router;
