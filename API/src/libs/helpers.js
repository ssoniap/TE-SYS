const transporter = require("../mailer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const path = require("path");
const config = require(path.resolve("config.json"));

exports.hash = (params) => {
  return bcrypt.hashSync(params, 10);
};

exports.compare = function (password, hashPassword) {
  return bcrypt.compareSync(password, hashPassword);
};

exports.generateToken = (payload) => {
  const token = jwt.sign(payload, config.server.jwtKey, {
    expiresIn: config.server.jwtKeyExpiresIn,
  });
  return {
    access_token: token,
    expires_in: config.server.jwtKeyExpiresIn,
  };
};

exports.sendEmail = async (body) => {
  try {
    const { to, subject, html } = body;
    return await transporter.sendMail({
      from: "PAWEB <support@paweb.com>",
      to,
      subject,
      html,
    });
  } catch (error) {
    return error;
  }
};
