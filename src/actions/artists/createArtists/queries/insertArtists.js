const { submitQuery, getInsertId } = require("~root/lib/database");

const insertArtist = ({ name, genre }) => submitQuery`

INSERT INTO artists (name, genre)
VALUES(${name}, ${genre});

`;

module.exports = getInsertId(insertArtist);
