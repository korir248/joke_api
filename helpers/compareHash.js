const bcrypt = require("bcrypt");

const compareHash = async (password, hash) => {
  let val = await bcrypt.compare(password, hash);

  return val;
};

module.exports = compareHash;
