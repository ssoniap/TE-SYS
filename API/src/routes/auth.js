const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/auth");

router.post("/", ctrl.login);
router.post("/email", ctrl.sendEmail);

module.exports = router;
