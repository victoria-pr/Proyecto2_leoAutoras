import Autora from "../models/autoras.js";
import Book from "../models/books.js";

const getAll = async (req, res) => {
  try {
    let Books = await Book.findAll({
      attributes: [
        "idbook",
        "title",
        "publish_date",
        "isbn",
        "sinopsis",
        "pages",
        "publisher",
        "language",
        "cover",
        "editions",
      ],
      include: [
        {
          model: Autora,
          attributes: [
            "idauthor",
            "name",
            "surname",
            "country",
            "birthdate",
            "deathdate",
            "bio",
          ],
        },
      ],
    });
    res.send(Books);
  } catch (error) {
    res.status(500).send({
      message: error.message || "There was a problem trying to get the books",
    });
  }
};

export default { getAll };
