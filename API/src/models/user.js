const mongoose = require("mongoose");
const helper = require("../libs/helpers");

const schema = new mongoose.Schema(
  {
    userName: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    password: { type: String, required: true },
    active: { type: Boolean, default: true },
    role: { ref: "Role", type: mongoose.Schema.Types.ObjectId },
    person: {
      ref: "Person",
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },
  },
  {
    timestamps: false,
    versionKey: false,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

schema.pre("save", function (next) {
  if (this.password) {
    this.password = helper.hash(this.password);
  }
  next();
});

schema.pre("findOneAndUpdate", async function (next) {
  const body = this.getUpdate();
  body.password = helper.hash(body.password);
  this.setUpdate(body);
  next();
});

schema.methods.comparePassword = function (password) {
  return helper.compare(password, this.password);
};

schema.methods.generateToken = function (payload) {
  return helper.generateToken(payload);
};

module.exports = mongoose.model("User", schema);
