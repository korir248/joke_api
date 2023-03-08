require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT;
const router = require("./routes/routes");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json(), cors());

app.use("/", router);
app.use("/", express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log("listening on port:", PORT);
});
