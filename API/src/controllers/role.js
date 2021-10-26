const model = require("../models/role");

function senResponse(res, type, data, status = 200) {
  const result = {
    type: type,
    data: data,
  };
  return res.status(status).send(result);
}

exports.getAll = async (req, res) => {
  try {
    const role = await model.find();
    senResponse(res, "ok", role);
  } catch (error) {
    senResponse(res, "error", error, 500);
  }
};

exports.getById = async (req, res) => {
  try {
    const id = req.params.id;
    const role = await model.findById(id);
    senResponse(res, "ok", role);
  } catch (error) {
    senResponse(res, "error", error, 500);
  }
};
