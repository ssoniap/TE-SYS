const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    identityType: { type: String, uppercase: true, trim: true },
    identityDocument: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    firstName: { type: String, uppercase: true, trim: true },
    lastName: { type: String, uppercase: true, trim: true },
    address: { type: String, uppercase: true, trim: true },
    phone: { type: String, trim: true },
    city: { type: String, uppercase: true, trim: true },
    contract: { type: String, uppercase: true, trim: true, default: null },
    roleName: { type: String },
    active: { type: Boolean, default: true },
    role: { ref: "Role", type: mongoose.Schema.Types.ObjectId },
    machine: [
      {
        entryType: { type: String, default: null },
        entryDate: { type: Date, default: null },
        leaveDate: { type: Date, default: null },
        active: { type: Boolean, default: true },
        machine: { ref: "Machine", type: mongoose.Schema.Types.ObjectId },
      },
    ],
  },
  {
    timestamps: false,
    versionKey: false,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    strict: false,
  }
);

schema.pre("findOneAndUpdate", async function (next) {
  const body = this.getUpdate();
  // Si llega el rol, entonces se hace la actualización sobre el usuario
  if (!body.roleName) {
    next();
    return;
  }
  // Actualizar el rol del usuario
  const id = this.getFilter();
  if (id) {
    // Consultar la persona
    const p = await this.model.findById(id);
    // Consultar el usuario por número de documento
    const modelUser = require("../models/user");
    const user = await modelUser
      .findOne({ userName: p.identityDocument })
      .populate("role");
    // Validar si el rol es diferente al que ingresa, si es así se actualiza
    if (body.roleName == user.role.roleName) {
      // Consultar id del rol
      const modelRole = require("../models/role");
      const role = await modelRole.findOne({ roleName: body.roleName });
      user.role = role._id;
      await modelUser
        .findByIdAndUpdate({ _id: user.id }, user, { new: true })
        .populate("role");
    }
  }
  next();
});

schema.virtual("fullName").get(function () {
  return [this.firstName, this.lastName].filter(Boolean).join(" ");
});

module.exports = mongoose.model("Person", schema);
