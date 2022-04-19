const handleAPIerror = require("~root/utils/handleAPIError");
const modifyArtistById = require("~root/actions/artists/updateArtistById");

const patchArtistById = async (req, res) => {
  const { artistId } = req.params;
  const { name, genre } = req.body;

  try {
    const { artist } = await modifyArtistById({
      artistId,
      genre,
      name
    });
    res.status(201).send({ artist });
  } catch (err) {
    handleAPIerror(res, err);
  }
};

module.exports = patchArtistById;
