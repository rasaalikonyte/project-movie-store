const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// const port = 3000;
const PORT = process.env.PORT || 3000;
// Middleware
app.use(bodyParser.json());

let movies = [];

// Create a movie
app.post("/movies", (req, res) => {
  const { title, productionDate, producer, rating } = req.body;
  const movie = {
    id: movies.length + 1,
    title,
    productionDate,
    producer,
    rating,
  };
  movies.push(movie);
  res.status(201).send(movie);
});

// Get all
app.get("/movies", (req, res) => {
  res.status(200).send(movies);
});

// Get by ID
app.get("/movies/:id", (req, res) => {
  const movie = movies.find((m) => m.id === parseInt(req.params.id));
  if (!movie) {
    return res.status(404).send("Movie not found");
  }
  res.status(200).send(movie);
});

// Update by ID
app.put("/movies/:id", (req, res) => {
  const movie = movies.find((m) => m.id === parseInt(req.params.id));
  if (!movie) {
    return res.status(404).send("Movie not found");
  }
  const { title, productionDate, producer, rating } = req.body;
  movie.title = title;
  movie.productionDate = productionDate;
  movie.producer = producer;
  movie.rating = rating;
  res.status(200).send(movie);
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
