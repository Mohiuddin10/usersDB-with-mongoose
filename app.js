const express = require("express");
const bodyParser = require("body-parser");
const { router:usersRouter } = require("./routes/users.route")
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", usersRouter)

module.exports = { app };