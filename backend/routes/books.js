import { Router } from "express";
import booksController from "../controllers/booksController.js";

const router = Router();

router.get("/", (req, res) => {
  booksController.getAll(req, res);
});

export default router;
