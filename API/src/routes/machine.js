const express = require("express");
const ctrl = require("../controllers/machine");
const guards = require("../guards/index");
const multer = require("multer");
const router = express.Router();
const path = require("path");

const storage = multer.diskStorage({
  destination: "public/uploads/images",
  filename: function (req, file, cb) {
    const body = JSON.parse(req.body.body);
    const machine = body.serial.replace(/ /g, "_");
    const imageName = machine + path.extname(file.originalname);
    body.picture = "/images/" + imageName;
    req.body = JSON.stringify(body);
    cb(null, imageName);
  },
});

const upload = multer({
  dest: "public/uploads/images",
  storage: storage,
}).single("image");

router.post(
  "/",
  [guards.verifyToken, guards.isNotCustomer, upload],
  ctrl.create
);
router.put(
  "/:id",
  [guards.verifyToken, guards.isNotCustomer, upload],
  ctrl.updateById
);
router.put(
  "/review/:id",
  [guards.verifyToken, guards.isNotCustomer],
  ctrl.updateByIdReview
);
router.put(
  "/review/delete/:id",
  [guards.verifyToken, guards.isNotCustomer],
  ctrl.deleteByIdReview
);
router.put(
  "/fail/:id",
  [guards.verifyToken, guards.isNotCustomer],
  ctrl.updateByIdFail
);
router.get("/", guards.verifyToken, ctrl.getAll);
router.get("/:id", guards.verifyToken, ctrl.getById);
router.delete("/:id", guards.verifyToken, ctrl.deleteById);

module.exports = router;
