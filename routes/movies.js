const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

// Create a DB Schemas

const movieSchema = new mongoose.Schema({
  title: String,
  numberInStock: Number,
  dailyRentalRate: Number,
  genre: Object,
});

// Create schema Models

const Movies = mongoose.model("Movie", movieSchema);

// Create API endpoints

router.get("/", async (req, res) => {
  const movies = await Movies.find();
  res.send(movies);
});

router.get("/:id", async (req, res) => {
  const movie = await Movies.findById(req.params.id);
  res.send(movie);
});

module.exports = router;
