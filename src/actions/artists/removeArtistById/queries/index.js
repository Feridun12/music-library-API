const { submitQuery } = require("~root/lib/database");

const deleteArtistByQuery = () => submitQuery`
DELETE FROM
artists
WHERE
artist_id = 1
`;

module.exports = deleteArtistByQuery;
