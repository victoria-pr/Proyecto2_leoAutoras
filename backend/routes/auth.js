import { Router } from "express";
import jwt from "jsonwebtoken"; // para crear un token por cada usuario que se registre o inicie sesión
import User from "../models/users.js";
import bcrypt from "bcrypt"; // para encriptar la contraseña

const authRouter = Router();

authRouter.post("/register", async (req, res) => {
  try {
    const { username, name, email, password } = req.body;
    const passwordHash = bcrypt.hashSync(password, 10);
    const newUser = await User.create({
      username,
      name,
      email,
      password: passwordHash,
    });
    res.json({ message: "User created successfully", data: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error", data: error });
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    let user = await User.findOne({ where: { username: username } });
    if (!user) {
      res.status(400).send("Usuario no encontrado");
    }

    let result = await bcrypt.compare(password, user.password);

    if (!result) {
      res.status(401).send("Contraseña incorrecta");
      return;
    }

    const token = jwt.sign(
      {
        name: user.username,
        id: user.iduser,
      },
      process.env.TOKEN_SECRET,
      { expiresIn: "12h" }
    );
    res.send({ username: user.username, token: token, id: user.iduser });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al iniciar sesión");
  }
});

authRouter.get("/logout", (req, res) => {
  res.clearCookie("access_token").send("Sesión cerrada"); // borra la cookie, es decir, los datos del usuario que se guardaron en ella al iniciar sesión
});

export default authRouter;
