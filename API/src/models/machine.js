const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    orderDate: { type: Date },
    serial: { type: String, unique: true, trim: true, index: true },
    machineName: { type: String, uppercase: true, trim: true },
    description: { type: String, trim: true },
    brand: { type: String, uppercase: true, trim: true },
    accessories: { type: String, trim: true, default: null },
    peripherals: { type: String, trim: true, default: null },
    manufacturer: { type: String, uppercase: true, trim: true, default: null },
    active: { type: Boolean, default: true },
    status: { type: String, default: "Almacén", required: true }, //status: [Almacén, Cuarentena]
    reviews: [],
    fails: [],
  },
  {
    timestamps: false,
    versionKey: false,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    strict: false,
  }
);

module.exports = mongoose.model("Machine", schema);
