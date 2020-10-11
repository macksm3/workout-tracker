// Server.js - This file is the initial starting point for the Node/Express server.

const express = require("express");
// const mongoose = require("mongoose");
const routes = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("/api", routes));
// app.use(require("./routes/api.js"));

// Start the server on the port
app.listen(PORT, () => console.info(`App running on port ${PORT}!`));
