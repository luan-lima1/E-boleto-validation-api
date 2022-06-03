import { Router } from "express";
import bankRouter from "./bank";

const router = Router();

router.use(bankRouter);

export default router;
