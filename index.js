const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

const publicPath = path.resolve(__dirname, "public");

app.use(express.static(publicPath));
app.listen(port, (error) => {
  if (error) throw new Error(error);
  else console.log(`Example app listening on port ${port}!!!!!`);
});
