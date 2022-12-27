const mongoose = require("mongoose");

//  ----------- (generate short url) ------------
const generateShortUrl = () => {
  let words = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let bag = "";
  for (let i = 0; i < 8; i++) {
    bag += words[Math.floor(0 + Math.random() * 62)];
  }
  return bag;
};

// ------------------ (url Schema) --------------
const urlSchema = mongoose.Schema({
  fullUrl: { type: String, required: true },
  shortUrl: { type: String, required: true, default: generateShortUrl },
});

const URL = mongoose.model("url", urlSchema);
module.exports = URL;
