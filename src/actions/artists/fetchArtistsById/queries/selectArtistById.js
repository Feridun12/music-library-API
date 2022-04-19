const { submitQuery, camelKeys } = require("~root/lib/database");

const selectArtistById = ({ artistId }) => submitQuery`
SELECT * FROM artists WHERE artist_id=${artistId}
`;

module.exports = camelKeys(selectArtistById);
