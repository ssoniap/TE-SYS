const model = require("../models/user");
const modelPerson = require("../models/person");
const modelRole = require("../models/role");

function senResponse(res, type, data, status = 200) {
  data.password = "";
  const result = {
    type: type,
    data: data,
  };
  return res.status(status).send(result);
}

exports.create = async (req, res) => {
  try {
    const oldUser = await model.findOne({ userName: req.body.userName });
    if (oldUser) {
      return senResponse(res, "error", "El usuario ya existe");
    }

    const newUser = new model(req.body);
    const user = await newUser.save();
    senResponse(res, "ok", user);
  } catch (error) {
    senResponse(res, "error", error, 500);
  }
};

exports.updateById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await model
      .findByIdAndUpdate(id, req.body, { new: true })
      .populate("role");

    if (user == null) {
      throw "Id no encontrado";
    }

    senResponse(res, "ok", user);
  } catch (error) {
    senResponse(res, "error", error, 500);
  }
};

exports.getAll = async (req, res) => {
  try {
    const user = await model
      .find({}, { password: 0 })
      .populate(["role", "person"]);
    senResponse(res, "ok", user);
  } catch (error) {
    senResponse(res, "error", error, 500);
  }
};

exports.getById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await model
      .findById({ _id: id }, { password: 0 })
      .populate(["role", "person"]);
    senResponse(res, "ok", user);
  } catch (error) {
    senResponse(res, "error", error, 500);
  }
};

exports.deleteById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await model.findByIdAndRemove(id);
    senResponse(res, "ok", user);
  } catch (error) {
    senResponse(res, "error", error, 500);
  }
};
