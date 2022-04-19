const { submitQuery, camelKeys } = require("~root/lib/database");

const selectAllArtists = () => submitQuery`
SELECT 
* 
FROM
artists;
`;

module.exports = camelKeys(selectAllArtists);
