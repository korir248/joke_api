const express = require("express");
const router = express.Router();
const {
  getRandomJoke,
  createJoke,
  getTypes,
  deleteJoke,
  updateJoke,
  getAllJokes,
} = require("../controllers/jokesController");
const auth = require("../controllers/auth");
const { loginMod, signupMod } = require("../controllers/modController");

// Joke routes
router.route("/get-random-joke").post(getRandomJoke);
router.route("/save-joke").post(createJoke);
router.route("/get-joke-types").get(getTypes);
router.route("/delete-joke").delete(auth,deleteJoke);
router.route("/edit-joke").put(auth, updateJoke);
router.route("/get-all-jokes").get(getAllJokes)

// Moderator routes
router.route("/login").post(loginMod);
router.route("/sign-up").post(signupMod);


module.exports = router;
