const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/role");
const guards = require("../guards/index");

router.get("/", guards.verifyToken, ctrl.getAll);
router.get("/:id", guards.verifyToken, ctrl.getById);

module.exports = router;
