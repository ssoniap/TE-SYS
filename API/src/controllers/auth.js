const model = require("../models/user");
const helper = require("../libs/helpers");

function senResponse(res, type, data, status = 200) {
  const result = {
    type: type,
    data: data,
  };
  res.status(status).send(result);
}

exports.login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    let user = await model
      .findOne({ userName, active: true })
      .populate(["role", "person"])
      .exec();
    if (user) {
      const result = user.comparePassword(password);
      if (result) {
        const payload = {
          id: user._id,
          userName: user.userName,
          role: user.role,
          person: user.person,
        };
        const token = user.generateToken(payload);
        payload.token = token;
        senResponse(res, "ok", payload);
      } else {
        senResponse(res, "error", "Contraseña inválida");
      }
    } else {
      senResponse(res, "error", error, 401);
    }
  } catch (error) {
    senResponse(res, "error", error, 500);
  }
};

exports.sendEmail = async (req, res) => {
  const result = helper.sendEmail(req.body);
  senResponse(res, "ok", result);
};
