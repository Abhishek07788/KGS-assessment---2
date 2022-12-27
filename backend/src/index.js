const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, This is ksg assignment 2 backend");
});

app.listen(8080, () => {
  console.log("Started at: http://localhost:8080");
});
