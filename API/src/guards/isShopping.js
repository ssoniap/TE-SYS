const express = require("express");
const router = express.Router();

function senResponse(res, type, data, status = 200) {
  const result = {
    type: type,
    data: data,
  };
  return res.status(status).send(result);
}

router.use((req, res, next) => {
  const decoded = req.decoded;
  if (decoded) {
    if (
      decoded.role.roleName == "Administrador" ||
      decoded.role.roleName == "Compras"
    ) {
      next();
    } else {
      return senResponse(
        res,
        "error",
        { mensaje: `Permiso denegado al rol ${decoded.role.roleName}` },
        401
      );
    }
  } else {
    return senResponse(res, "error", { mensaje: "Rol no determinado" }, 401);
  }
});

module.exports = router;
