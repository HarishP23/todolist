const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/usersDB");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



app.use(require("./routes/index"));
app.use(require("./routes/todo"));

app.listen(3000, () => {
  console.log("Server started On port 3000");
});
