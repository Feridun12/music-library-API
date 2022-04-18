const handleApiError = require("~root/utils/handleAPIError");
const createArtist = require("~root/actions/artists/createArtists");

const postArtist = async (req, res) => {
  const { name, genre } = req.body;

  try {
    const { artistId } = await createArtist({ name, genre });
    res.status(201).send({
      artistId
    });
  } catch (err) {
    handleApiError(res, err);
  }
};

module.exports = postArtist;
