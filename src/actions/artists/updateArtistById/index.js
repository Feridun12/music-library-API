const updateArtistById = require("./queries/index");

const modifyArtistById = async ({ artistId, name, genre }) => {
  const artist = await updateArtistById({
    artistId,
    genre,
    name
  });
  return { artist };
};

module.exports = modifyArtistById;
