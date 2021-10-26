const mongoose = require("mongoose");
const path = require("path");
const config = require(path.resolve("config.json"));

mongoose.connect(config.db.connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
