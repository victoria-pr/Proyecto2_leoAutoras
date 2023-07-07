import User from "../models/users.js";
import bcrypt from "bcrypt";

const getAll = async (req, res) => {
  try {
    let users = await User.findAll({
      attributes: ["iduser", "username", "name", "email", "password"],
    });
    res.send(users);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Error al obtener todos los usuarios",
    });
  }
};

const create = async (req, res) => {
  try {
    const newUser = await User.findOne({
      where: { username: req.body.username },
    });
    if (newUser) {
      res.status(400).send("El usuario ya existe");
      return;
    }
    //Verificar que la contraseña cumpla con los requisitos:
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(req.body.password)) {
      res
        .status(400)
        .send(
          "La contraseña debe tener al menos 6 caracteres, una letra mayúscula y un número"
        );
      return;
    }
    const password = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: password,
    });

    res.send(user);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Error al crear el usuario",
    });
  }
};

const login = async (req, res) => {
  const username = req.body.username;
  let user = await User.findOne({ where: { username: username } });
  if (!user) {
    res.status(404).send("El usuario no existe");
    return;
  }
  let password = req.body.password;
  if (await bcrypt.compare(password, user.password)) {
    res.send("Usuario y contraseña correctos");
  } else {
    res.status(401).send("Contraseña incorrecta");
  }
};

export default {
  getAll,
  create,
  login,
};
