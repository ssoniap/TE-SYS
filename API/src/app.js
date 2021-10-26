const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const setup = require("./setup");
const path = require("path");
const config = require(path.resolve("config.json"));

const app = express();

// Importar Rutas
const routes = require("./routes/index");

// Configuraciones
app.set("port", process.env.PORT || config.server.port);

// Librerías Midllewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Rutas
app.use("/", routes.router);
app.use("/machine", routes.machineRouter);
app.use("/person", routes.personRouter);
app.use("/login", routes.authRouter);
app.use("/send", routes.authRouter);
app.use("/user", routes.userRouter);
app.use("/role", routes.roleRouter);

// Iniciar el server
app.listen(app.get("port"), () => {
  console.log(`Servidor en el puerto ${app.get("port")}`);
  require("./db");
  console.log("Conectado a la base de datos");
  setup.createRoles().then(console.log("Roles creados"));
  setup.createUserAdmin().then(console.log("Administrador creado"));
});
