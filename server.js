const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// const port = 3000;
const PORT = process.env.PORT || 3000;
// Middleware
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
