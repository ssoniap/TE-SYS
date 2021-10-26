const model = require("../models/person");
const modelUser = require("../models/user");
const modelRole = require("../models/role");
const modelMachine = require("../models/machine");
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
    const role = await modelRole.findOne({ roleName: req.body.roleName });
    body.role = role.id;
    const found = await model.findOne({
      identityDocument: body.identityDocument,
    });

    if (!found) {
      const person = new model(body);
      const result = await person.save();
      // Asignar usuario por defecto
      generateUserName(body.identityDocument, role.id, result.id).then(
        (user) => {
          result._doc.user = user;
          senResponse(res, "ok", result, 201);
        }
      );
    } else {
      senResponse(res, "error", "El tercero ya existe");
    }
  } catch (error) {
    senResponse(res, "error", error, 500);
  }
};

exports.updateById = async (req, res) => {
  try {
    const id = req.params.id;
    const people = await model
      .findByIdAndUpdate(id, req.body, { new: true })
      .populate(["role", "machine.machine"]);

    if (people == null) {
      throw "Id no encontrado";
    }

    senResponse(res, "ok", people);
  } catch (error) {
    senResponse(res, "error", error, 500);
  }
};

exports.addMachineByPersonId = async (req, res) => {
  try {
    const id = req.params.id;
    const actualPerson = await model.findById(id);
    //#region Validaciones
    if (actualPerson == null) {
      throw "El tercero no existe";
    }
    if (actualPerson.roleName != "Cliente") {
      throw "Los equipos sólo pueden ser asignados a un tercero tipo cliente";
    }
    if (req.body.entryType) {
      if (
        req.body.entryType != "Venta" &&
        req.body.entryType != "Comodato" &&
        req.body.entryType != "Préstamo"
      ) {
        throw "Los tipos en entrega permitidos son: Venta, Comodato y Préstamo";
      }
    }
    //#endregion
    const foundMachine = await modelMachine.findById(req.body.machine);
    if (foundMachine == null) {
      throw "El equipo no existe";
    }
    //#region Validar si el equipo existe

    //#endregion

    //#region Actulaizar un equipo asignado al cliente
    let index = -1;
    let machines = actualPerson.machine;
    machines.forEach((e, idx) => {
      if (e.machine.toString() == req.body.machine) {
        index = idx;
      }
    });
    // Si existe lo actualiza
    if (index >= 0) {
      if (req.body.entryDate) {
        machines[index].entryDate = moment(req.body.entryDate).format(
          "YYYY-MM-DD"
        );
      }
      if (req.body.leaveDate) {
        machines[index].leaveDate = moment(req.body.leaveDate).format(
          "YYYY-MM-DD"
        );
      }
      if (req.body.hasOwnProperty("active")) {
        machines[index].active = req.body.active;
      }
    } else {
      // Si no existe lo agrega
      actualPerson.machine.push(req.body);
    }
    //#endregion

    // Actualizar cliente con la asignación del equipo
    const people = await model
      .findByIdAndUpdate(id, actualPerson, { new: true })
      .populate(["role", "machine.machine"]);

    senResponse(res, "ok", people);
  } catch (error) {
    senResponse(res, "error", error);
  }
};

exports.getAll = async (req, res) => {
  try {
    let { identityDocument, firstName, lastName, roleName } = req.query;
    // Filtrar por identificaión, nombre y/o rol
    let filter = {};
    if (identityDocument) {
      if (identityDocument.indexOf("=") != 0) {
        filter.identityDocument = { $regex: `.*${identityDocument}.*` };
      } else {
        filter.identityDocument = identityDocument.substring(1);
      }
    }
    if (firstName) {
      if (firstName.indexOf("=") != 0) {
        filter.firstName = { $regex: `.*${firstName}.*` };
      } else {
        filter.firstName = firstName.substring(1);
      }
    }
    if (lastName) {
      if (lastName.indexOf("=") != 0) {
        filter.lastName = { $regex: `.*${lastName}.*` };
      } else {
        filter.lastName = lastName.substring(1);
      }
    }
    if (roleName) {
      filter.roleName = roleName;
    }
    const people = await model
      .find(filter)
      .populate(["role", "machine.machine"]);
    senResponse(res, "ok", people);
  } catch (error) {
    senResponse(res, "error", error, 500);
  }
};

exports.getById = async (req, res) => {
  try {
    const id = req.params.id;
    const people = await model
      .findById({ _id: id })
      .populate(["role", "machine.machine"]);
    senResponse(res, "ok", people);
  } catch (error) {
    senResponse(res, "error", error, 500);
  }
};
