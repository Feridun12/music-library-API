const selectAllArtists = require("./queries/index");

const fetchAllArtists = async () => {
  const artists = await selectAllArtists();

  return { artists };
};

module.exports = fetchAllArtists;
