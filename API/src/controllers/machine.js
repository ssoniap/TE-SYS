const model = require("../models/machine");
const person = require("../models/person");
const modelUser = require("../models/user");
const modelRole = require("../models/role");
const moment = require("moment");

function senResponse(res, type, data, status = 200) {
  const result = {
    type: type,
    data: data,
  };
  return res.status(status).send(result);
}

async function generateUserName(identityDocument, roleId, personId) {
  const user = await modelUser.findOne({ userName: identityDocument });
  if (!user) {
    const newUser = new modelUser({
      userName: identityDocument,
      password: identityDocument,
      role: roleId,
      person: personId,
    });
    await newUser.save();
    return { userName: identityDocument, password: identityDocument };
  } else {
    return { userName: "", password: "" };
  }
}

exports.create = async (req, res) => {
  try {
    const body = req.body;
    if (body.status) {
      if (body.status != "Almacén" && body.status != "Cuarentena") {
        throw "Los estados permitidos son: Almacén y Cuarentena";
      }
    }
    const found = await model.findOne({ serial: body.serial });
    if (found) {
      throw "Ya existe un equipo asociado al serial " + body.serial;
    }

    const machine = new model(body);
    const result = await machine.save();
    senResponse(res, "ok", result);
  } catch (error) {
    senResponse(res, "error", error);
  }
};

exports.updateById = async (req, res) => {
  try {
    const id = req.params.id;
    if (req.body.status) {
      if (
        req.body.status != "Almacén" &&
        req.body.status != "Cuarentena" &&
        req.body.status != "Revisión" &&
        req.body.status != "Baja"
      ) {
        throw "Los estados permitidos son: Almacén, Cuarentena, Revisión y Baja";
      }
    }

    const machine = await model.findByIdAndUpdate(id, req.body, { new: true });
    if (machine == null) {
      throw "Id no encontrado";
    }
    senResponse(res, "ok", machine);
  } catch (error) {
    senResponse(res, "error", error);
  }
};

exports.updateByIdReview = async (req, res) => {
  try {
    const id = req.params.id;
    if (req.body.status) {
      if (
        req.body.status != "Almacén" &&
        req.body.status != "Cuarentena" &&
        req.body.status != "Revisión" &&
        req.body.status != "Baja"
      ) {
        throw "Los estados permitidos son: Almacén, Cuarentena, Revisión y Baja";
      }
    }

    let machine = await model.findById(id);
    if (machine == null) {
      throw "Id no encontrado";
    }
    if (req.body.status) {
      machine.status = req.body.status;
    }
    let reviews = machine.reviews;
    let index = -1;
    reviews.forEach((e, idx) => {
      if (
        moment(e.reviewDate).format("YYYY-MM-DD") ==
        moment(req.body.reviewDate).format("YYYY-MM-DD")
      ) {
        index = idx;
      }
    });
    // Nueva revisión
    if (index == -1) {
      machine.reviews.push(req.body);
    } else {
      // Actualizar revisión
      reviews[index].reviewDate = req.body.reviewDate;
      reviews[index].reason = req.body.reason;
      reviews[index].diagnostic = req.body.diagnostic;
      reviews[index].accesories = req.body.accesories;
      reviews[index].peripherals = req.body.peripherals;
    }

    machine = await model.findByIdAndUpdate(id, machine, { new: true });
    if (machine == null) {
      throw "Id no encontrado";
    }
    senResponse(res, "ok", machine);
  } catch (error) {
    senResponse(res, "error", error);
  }
};

exports.updateByIdFail = async (req, res) => {
  try {
    const id = req.params.id;
    if (req.body.status) {
      if (
        req.body.status != "Garantía" &&
        req.body.status != "Devolución" &&
        req.body.status != "Reparación"
      ) {
        throw "Los estados permitidos son: Garantia, Devolución y Reparación";
      }
    }

    let machine = await model.findById(id);
    if (machine == null) {
      throw "Id no encontrado";
    }
    // if (req.body.status) {
    //   machine.status = req.body.status;
    // }
    let fails = machine.fails;
    let index = -1;
    fails.forEach((e, idx) => {
      if (
        moment(e.failDate).format("YYYY-MM-DD") ==
        moment(req.body.failDate).format("YYYY-MM-DD")
      ) {
        index = idx;
      }
    });
    // Nuevo registro de daño
    if (index == -1) {
      machine.fails.push(req.body);
    } else {
      // Actualizar daño
      fails[index].reason = req.body.reason;
      fails[index].diagnostic = req.body.diagnostic;
      fails[index].accesories = req.body.accesories;
      fails[index].peripherals = req.body.peripherals;
      fails[index].invoice = req.body.invoice;
      fails[index].userName = req.body.userName;
      fails[index].workerName = req.body.workerName;
      fails[index].status = req.body.status;
    }

    machine = await model.findByIdAndUpdate(id, machine, { new: true });
    if (machine == null) {
      throw "Id no encontrado";
    }
    senResponse(res, "ok", machine);
  } catch (error) {
    senResponse(res, "error", error);
  }
};

exports.getAll = async (req, res) => {
  try {
    let filter = req.query;
    Object.entries(filter).forEach((e) => {
      if (
        e[0] == "machineName" ||
        e[0] == "description" ||
        e[0] == "brand" ||
        e[0] == "accessories" ||
        e[0] == "peripherals" ||
        e[0] == "manufacturer"
      ) {
        filter[e[0]] = { $regex: `.*${e[1]}.*` };
      }
    });
    const machine = await model.find(filter);
    senResponse(res, "ok", machine);
  } catch (error) {
    senResponse(res, "error", error);
  }
};

exports.getById = async (req, res) => {
  try {
    const id = req.params.id;
    const machine = await model.findById({ _id: id });
    senResponse(res, "ok", machine);
  } catch (error) {
    senResponse(res, "error", error);
  }
};

exports.deleteById = async (req, res) => {
  try {
    const id = req.params.id;
    const machine = await model.findByIdAndRemove(id);
    senResponse(res, "ok", machine);
  } catch (error) {
    senResponse(res, "error", error);
  }
};
