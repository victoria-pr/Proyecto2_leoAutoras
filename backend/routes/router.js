import { Router } from "express";
import userRouter from "./users.js";
import autoraRouter from "./autoras.js";
import bookRouter from "./books.js";
import authRouter from "./auth.js";

const router = Router();

router.use("/users", userRouter);
router.use("/autoras", autoraRouter);
router.use("/books", bookRouter);
router.use("/auth", authRouter);

export default router;
