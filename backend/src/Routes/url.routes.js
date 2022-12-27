const express = require("express");
const URL = require("../Schema/url.schema");
const app = express.Router();

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

module.exports = app;
