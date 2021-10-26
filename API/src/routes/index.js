const express = require("express");
const router = express.Router();
const personRouter = require("./person");
const authRouter = require("./auth");
const userRouter = require("./user");
const roleRouter = require("./role");
const machineRouter = require("./machine");

router.get("/", (req, res) => {
  res.json("Conectado");
});

module.exports = {
  authRouter,
  personRouter,
  router,
  userRouter,
  roleRouter,
  machineRouter,
};
