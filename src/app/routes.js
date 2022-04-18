const express = require("express");

const postLogin = require("./controllers/users/login");
const postUser = require("./controllers/users/register");
const putUserDetails = require("./controllers/users/putUserDetails");
const authentication = require("./middlewares/authentication");
const authorise = require("./middlewares/authorisation");
const getUserTypes = require("./controllers/users/userTypes");
const postArtist = require("./controllers/artists/postArtist");
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

router.post("/post/artist", postArtist);

module.exports = router;
