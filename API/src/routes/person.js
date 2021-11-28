const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/person");
const guards = require("../guards/index");

router.post("/", guards.verifyToken, guards.isAdmin, ctrl.create);
router.put("/:id", guards.verifyToken, guards.isAdmin, ctrl.updateById);
router.put(
  "/machine/:id",
  guards.verifyToken,
  guards.isAdmin,
  ctrl.addMachineByPersonId
);
router.get("/", guards.verifyToken, ctrl.getAll);
router.get("/:id", guards.verifyToken, ctrl.getById);
router.delete("/:id", guards.verifyToken, ctrl.deleteById);

module.exports = router;
