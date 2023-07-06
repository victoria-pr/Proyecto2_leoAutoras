import Autora from "../models/autoras.js";

const getAll = async (req, res) => {
  try {
    let autoras = await Autora.findAll({
      attributes: [
        "idauthor",
        "name",
        "surname",
        "country",
        "birthdate",
        "deathdate",
        "image",
        "bio",
      ],
    });
    res.send(autoras);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Error al conseguir las autoras",
    });
  }
};

export default {
  getAll,
};
