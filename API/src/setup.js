const models = require("./models/index");
const path = require("path");
const config = require(path.resolve("config.json"));

async function getEstimatedDocumentCount(model) {
  return await model.estimatedDocumentCount();
}

exports.createRoles = async () => {
  try {
    // No se crean datos si hay elementos existentes
    const model = models.Role;
    const count = await getEstimatedDocumentCount(model);
    if (count > 0) return;

    // Crear los roles parametrizados
    const array = config.roles;
    const promises = array.map((element) => {
      new model({ roleName: element }).save();
    });
    await Promise.all(promises);
  } catch (error) {
    console.error({ title: "Error al crear roles: ", message: error });
  }
};

exports.createUserAdmin = async () => {
  try {
    // No se crean datos si hay elementos existentes
    // Validar si existe el usuario admin
    const user = await models.User.findOne({
      userName: config.setupUser.userName,
    });
    if (!user) {
      const role = await models.Role.findOne({ roleName: "Administrador" });
      // Asignar role administrador al rol creado
      const newUser = new models.User({
        userName: config.setupUser.userName,
        password: config.setupUser.password,
        role: role.id,
      });
      await newUser.save();
    }
  } catch (error) {
    console.error({
      title: "Error al crear usuario administrador: ",
      message: error,
    });
  }
};
