import { Router } from "express";
import autoraRouter from "./autoras.js";
import bookRouter from "./books.js";

const router = Router();

router.use("/autoras", autoraRouter);
router.use("/books", bookRouter);

export default router;
