import { Router } from "express";
import autoraRouter from "./autoras.js";

const router = Router();

router.use("/autoras", autoraRouter);

export default router;
