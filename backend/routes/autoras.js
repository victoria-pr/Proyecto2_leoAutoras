import { Router } from "express";
import autorasController from "../controllers/autorasController.js";

const router = Router();

router.get("/", (req, res) => {
  autorasController.getAll(req, res);
});

export default router;
