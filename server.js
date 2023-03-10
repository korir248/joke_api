require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT;
const router = require("./routes/routes");
const cors = require("cors");
const path = require("path");
const connectDB = require("./mongo/config/db.config");

const app = express();
app.use(express.json(), cors());

app.use("/", router);
app.use("/", express.static(path.join(__dirname, "public")));

connectDB()

app.listen(PORT, () => {
  console.log("listening on port:", PORT);

});
