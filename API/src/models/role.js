const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    roleName: String,
  },
  {
    timestamps: false,
    versionKey: false,
    // toObject: { virtuals: true },
    // toJSON: { virtuals: true },
    // strict: false,
  }
);

module.exports = mongoose.model("Role", schema);
