const bcrypt = require("bcrypt");

const encryptPassword = (password) => {
  let saltRounds = 10;
  let hash = bcrypt.hashSync(password, saltRounds);

  return hash;
};

module.exports = encryptPassword;
