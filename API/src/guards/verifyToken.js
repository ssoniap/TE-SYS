const express = require("express");
const jwt = require("jsonwebtoken");
const path = require("path");
const config = require(path.resolve("config.json"));
const router = express.Router();

function senResponse(res, type, data, status = 200) {
  const result = {
    type: type,
    data: data,
  };
  return res.status(status).send(result);
}

router.use((req, res, next) => {
  const token = req.headers["access-token"];
  if (token) {
    jwt.verify(token, config.server.jwtKey, (err, decoded) => {
      if (err) {
        return senResponse(res, "error", { mensaje: "Token inválido" }, 401);
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return senResponse(
      res,
      "error",
      { mensaje: "El token no fue enviado en el header 'access-token'" },
      401
    );
  }
});

module.exports = router;
