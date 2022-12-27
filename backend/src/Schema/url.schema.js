const mongoose = require("mongoose");

const urlSchema = mongoose.Schema({
  fullUrl: { type: String, required: true },
  shortUrl: { type: String, required: true },
});

const URL = mongoose.model("url", urlSchema);
module.exports = URL;
