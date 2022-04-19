const express = require("express");

const postLogin = require("./controllers/users/login");
const postUser = require("./controllers/users/register");
const putUserDetails = require("./controllers/users/putUserDetails");
const authentication = require("./middlewares/authentication");
const authorise = require("./middlewares/authorisation");
const getUserTypes = require("./controllers/users/userTypes");
// artist imports
const getArtistsById = require("./controllers/artists/getArtistById");
const postArtist = require("./controllers/artists/postArtist");
const getAllArtists = require("./controllers/artists/getAllArtists");
// admin
const { ADMIN } = require("~root/constants/userTypes");

const router = express.Router();

// USER MANAGEMENT
router.post("/login", postLogin);
router.post(
  "/register",
  authentication,
  authorise({ roles: [ADMIN] }),
  postUser
);

// users endpoints

router.put("/edit/user", authentication, putUserDetails);

router.get("/user-types", getUserTypes);

// artists endpoints
router.get("/get/artistBy/:artistId", getArtistsById);

router.get("/get/allArtists", getAllArtists);

router.post("/post/artist", postArtist);

module.exports = router;
