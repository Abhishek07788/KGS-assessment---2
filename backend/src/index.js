const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dbConnection = require("./config/db");
const URL = require("./Schema/url.schema");

dotenv.config();
let PORT = process.env.PORT || 8080;


const app = express();
app.use(express.json());
app.use(cors());

// --------------- (Post new url) ---------
app.post("/", async (req, res) => {
  const { fullUrl, shortUrl } = req.body;
  try {
    const url = await URL.create({ fullUrl, shortUrl });
    res.send("New url Generated");
  } catch (e) {
    res.status(404).send(e);
    console.log(e);
  }
});

// ---------- (get url by shortUrl) -----------
app.get("/:shortUrl", async (req, res) => {
  const { shortUrl } = req.params;
  try {
    const url = await URL.findOne({ shortUrl });
    res.redirect(url.fullUrl);
  } catch (e) {
    res.status(404).send(e);
  }
});

// ------------ ( get all url ) --------
app.get("/", async (req, res) => {
  try {
    const url = await URL.find();
    res.send(url);
  } catch (e) {
    res.status(404).send(e);
  }
});

// ------------ ( delete url ) --------
app.delete("/:id", async (req, res) => {
  try {
    const url = await URL.deleteOne({ _id: req.params.id });
    res.send("Url Deleted..");
  } catch (e) {
    res.status(404).send(e);
  }
});


app.listen(PORT || 8080, async () => {
  await dbConnection();
  console.log(`Started at: http://localhost:${PORT}`);
});
