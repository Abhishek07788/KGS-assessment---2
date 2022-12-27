const express = require("express");
const urlRouter = require("./Routes/url.routes");
const cors = require("cors");
const dbConnection = require("./config/db");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/url", urlRouter);

app.get("/", (req, res) => {
  res.send("Hello, This is ksg assignment 2 backend");
});


app.listen(8080, async () => {
  await dbConnection();
  console.log("Started at: http://localhost:8080");
});
