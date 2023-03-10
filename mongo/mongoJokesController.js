const Jokes = require("./model/JokeSchema");

const addJokeMD = async (joke) => {
  console.log("In fn", joke);
  try {
    let n_joke = await Jokes.create(joke);
    console.log("n joke",n_joke);
  } catch (error) {
    console.log(error.message);
  }
};

const deleteJokeMD = async (joke_id) => {
  try {
    await Jokes.findOneAndDelete(joke_id);
  } catch (error) {
    console.log("Error deleting Joke");
  }
};

module.exports = {
  deleteJokeMD,
  addJokeMD,
};
