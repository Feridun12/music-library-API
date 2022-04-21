const handleAPIError = require("~root/utils/handleAPIError");
const removeArtistById = require("~root/actions/artists/removeArtistById");

const deleteArtistById = async (req, res) => {
  const { artistId } = req.params;

  try {
    const { deletedArtist } = await removeArtistById({
      artistId
    });

    res.status(204).send({
      deletedArtist
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteArtistById;
