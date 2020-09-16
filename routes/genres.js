const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

// Create a DB Schemas

const genreSchema = new mongoose.Schema({
  name: String,
});

// Create schema Models
const Genres = mongoose.model("Genre", genreSchema);

router.get("/", async (req, res) => {
  const genres = await Genres.find();
  if (!genres) return res.status(400).send("Genres not found.");
  res.send(genres);
});

router.get("/:id", async (req, res) => {
  const genre = await Genres.findById(req.params.id);
  res.send(genre);
});

module.exports = router;
