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
const {
  loginMod,
  signupMod,
  approveMod,
  getAllMods,
} = require("../controllers/modController");

// Joke routes
router.route("/get-random-joke").post(getRandomJoke);
router.route("/save-joke").post(createJoke);
router.route("/get-joke-types").get(getTypes);
router.route("/delete-joke").delete(auth, deleteJoke);
router.route("/edit-joke").put(updateJoke);
router.route("/get-all-jokes").get(getAllJokes);

// Moderator routes
router.route("/login").post(loginMod);
router.route("/sign-up").post(signupMod);
router.route("/edit-user").put(approveMod);
router.route("/get-all-users").get(getAllMods);

module.exports = router;
