const express = require("express");
const modelPerson = require("../models/person");
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

async function getRoleName(id) {
  const person = await modelPerson.findById(id);
  return person.roleName;
}

function validateGrants(req, res, next, role, rolePerson) {
  let valid = false;
  if (role == "Administrador") {
    valid = true;
  } else if (role == "Asesor comercial") {
    valid = rolePerson == "Cliente";
  } else if (role == "Coordinador técnico") {
    valid = rolePerson == "Técnico";
  }

  if (valid) {
    next();
  } else {
    return senResponse(
      res,
      "error",
      { mensaje: `Permiso denegado al rol ${role}` },
      401
    );
  }
}

router.use((req, res, next) => {
  const token = req.headers["access-token"];

  if (token) {
    jwt.verify(token, config.server.jwtKey, (err, decoded) => {
      if (err) {
        return senResponse(res, "error", { mensaje: "Token inválido" }, 401);
      } else {
        req.decoded = decoded;
        const role = decoded.role.roleName;
        let rolePerson = req.body.roleName;
        // si no viene el rol buscar por el id
        if (!rolePerson) {
          const id = req.url.substr(1); // se extrae el id
          getRoleName(id).then((r) => {
            rolePerson = r;
            validateGrants(req, res, next, role, rolePerson);
          });
        } else {
          validateGrants(req, res, next, role, rolePerson);
        }
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
