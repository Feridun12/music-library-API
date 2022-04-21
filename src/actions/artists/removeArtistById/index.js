const deleteArtistByQuery = require("./queries/index");

const removeArtistById = async ({ artistId }) => {
  const deletedArtist = await deleteArtistByQuery({
    artistId
  });
  return { deletedArtist };
};

module.exports = removeArtistById;
