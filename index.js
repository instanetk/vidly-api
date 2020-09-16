// Import required modules

const express = require("express");
const mongoose = require("mongoose");

// Initialize Express
const app = express();

// Declare port

const port = 7000;

// app.use
app.use(express.json());

// Connect to MongoDB

mongoose
  .connect("mongodb://localhost/vidly", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to DB", err));

// Create a DB Schemas

const genreSchema = new mongoose.Schema({
  name: String,
});
const movieSchema = new mongoose.Schema({
  title: String,
  numberInStock: Number,
  dailyRentalRate: Number,
  genre: Object,
});

// Create schema Models
const Genres = mongoose.model("Genre", genreSchema);

const Movies = mongoose.model("Movie", movieSchema);

// Create API endpoints

app.get("/", (req, res) => {
  res.send("Vidly API root");
});

app.get("/api/genres", async (req, res) => {
  const genres = await Genres.find();
  res.send(genres);
});

app.get("/api/genres/:id", async (req, res) => {
  const genre = await Genres.findById(req.params.id);
  res.send(genre);
});

app.get("/api/movies", async (req, res) => {
  const movies = await Movies.find();
  res.send(movies);
});

app.get("/api/movies/:id", async (req, res) => {
  const movie = await Movies.findById(req.params.id);
  res.send(movie);
});

app.listen(process.env.PORT || port, () =>
  console.log(`Listening on port ${port}`)
);
