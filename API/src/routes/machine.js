const express = require("express");
const ctrl = require("../controllers/machine");
const guards = require("../guards/index");
const router = express.Router();

router.post("/", [guards.verifyToken, guards.isShopping], ctrl.create);
router.put("/:id", [guards.verifyToken, guards.isShopping], ctrl.updateById);
router.put(
  "/review/:id",
  [guards.verifyToken, guards.isTechnical],
  ctrl.updateByIdReview
);
router.put(
  "/fail/:id",
  [guards.verifyToken, guards.isTechnical],
  ctrl.updateByIdFail
);
router.get("/", guards.verifyToken, ctrl.getAll);
router.get("/:id", guards.verifyToken, ctrl.getById);
router.delete("/:id", guards.verifyToken, ctrl.deleteById);

module.exports = router;
