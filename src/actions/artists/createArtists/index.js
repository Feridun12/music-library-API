const insertArtist = require("./queries/insertArtists");

const createArtist = async ({ name, genre }) => {
  const artistId = await insertArtist({ name, genre });
  return { artistId };
};

module.exports = createArtist;
