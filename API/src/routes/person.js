const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/person");
const guards = require("../guards/index");

router.post("/", guards.verifyToken, guards.validateGrants, ctrl.create);
router.put("/:id", guards.verifyToken, guards.validateGrants, ctrl.updateById);
router.put(
  "/machine/:id",
  guards.verifyToken,
  guards.isAdvisor,
  ctrl.addMachineByPersonId
);
router.get("/", guards.verifyToken, ctrl.getAll);
router.get("/:id", guards.verifyToken, ctrl.getById);

module.exports = router;
