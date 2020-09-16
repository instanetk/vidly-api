// Import required modules

const express = require("express");
const mongoose = require("mongoose");
const home = require("./routes/home");
const genres = require("./routes/genres");
const movies = require("./routes/movies");
// Initialize Express
const app = express();

// Declare port

const port = process.env.PORT || 7000;

// app.use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", home);
app.use("/api/genres", genres);
app.use("/api/movies", movies);

// Connect to MongoDB

mongoose
  .connect("mongodb://localhost/vidly", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to DB", err));

app.listen(port, () => console.log(`Listening on port ${port}`));
