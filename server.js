// Server.js - This file is the initial starting point for the Node/Express server.
// testing heroku deploy commit

const express = require("express");
// require("dotenv").config();
const mongoose = require("mongoose");
const apiRoutes = require("./routes/api-routes.js");
// const routes = require("./public/index");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// routes
require("./routes/html-routes.js")(app);
app.use("/api", apiRoutes);
// app.use(require("./routes/api-routes.js"));

// Start the server on the port
app.listen(PORT, () => console.info(`App running on port ${PORT}!`));

