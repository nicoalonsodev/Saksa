const postProductController = require("../controllers/postProductController");

const postProductHandler = async (req, res) => {
  try {
    const {
      productName,
      type,
      images,
      description,
      year,
      surface
    } = req.body;
    const userPosted = await postProductController(
      productName,
      type,
      images,
      description,
      year,
      surface
    );
    return res.status(200).json(userPosted);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postProductHandler,
};
