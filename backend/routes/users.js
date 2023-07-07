import { Router } from "express";
import usersController from "../controllers/usersController.js";
import verifyToken from "../middlewares/jwt.js";

const router = Router();

router.get("/", (req, res) => {
  usersController.getAll(req, res);
});

router.post("/register", (req, res) => {
  usersController.create(req, res);
});

router.post("/login", (req, res) => {
  usersController.login(req, res);
});

export default router;
