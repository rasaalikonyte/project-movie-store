const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// const port = 3000;
const PORT = process.env.PORT || 3000;
// Middleware
app.use(bodyParser.json());

let movies = [];

// Create a new movie
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
