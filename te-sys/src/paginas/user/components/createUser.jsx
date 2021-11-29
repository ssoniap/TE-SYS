import { useState, useEffect } from "react";
import apiThirdParty from "../../../services/apiThirdParty";
import apiUser from "../../../services/apiUser";

const Form = (props) => {
  const { handleCreate } = props;
  const [thirdParties, setThirdParties] = useState([]);
  const [roles, setRoles] = useState([]);
  const [newUser, setNewUser] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newRole, setNewRole] = useState("");
  const [newThirdparty, setNewThirdparty] = useState("");

  const getRoles = async () => {
    const response = await apiUser.getRoles();
    setRoles(response.data.data);
  };

  const getThirdParties = async () => {
    const params = { active: true };
    const response = await apiThirdParty.getThirdParties(params);
    const aux = [];
    response.data.data.map((thirdParty) => {
      aux.push({
        id: thirdParty.id,
        fullName: thirdParty.fullName,
        roleName: thirdParty?.role.roleName,
        showName:
          thirdParty.fullName.toLowerCase() +
          " [" +
          thirdParty?.role.roleName.toLowerCase() +
          "]",
      });
    });
    setThirdParties(aux);
  };

  useEffect(() => {
    getThirdParties();
    getRoles();
  }, []);

  return (
    <div className="container-fluid mb-3">
      <div className="mt-5 pt-5 text-center">
        <h1>Gestión de Usuarios</h1>
      </div>

      <form onSubmit={handleCreate}>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-6 col-lg-5">
            <div className="form-floating mb-3 div-date">
              <input
                type="text"
                className="form-control"
                id="floatingName"
                placeholder="Escriba el nombre de usuario"
                value={newUser}
                onChange={(e) => setNewUser(e.target.value)}
                required
              />
              <label htmlFor="floatingName">Nombre de Usuario</label>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-5">
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Contraseña"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <label htmlFor="floatingPassword">Contraseña</label>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-5">
            <div className="form-floating mb-3">
              <select
                className="form-select"
                id="floatingList1"
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                required
              >
                {roles &&
                  roles.map((role) => {
                    return (
                      <option key={role._id} value={role._id}>
                        {role.roleName}
                      </option>
                    );
                  })}
              </select>
              <label htmlFor="floatingList1">Lista de roles</label>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-5">
            <div className="form-floating mb-3">
              <select
                className="form-select"
                id="floatingList2"
                value={newThirdparty}
                onChange={(e) => setNewThirdparty(e.target.value)}
                required
              >
                {thirdParties &&
                  thirdParties.map((thirdParty) => {
                    return (
                      <option key={thirdParty.id} value={thirdParty.id}>
                        {thirdParty.showName}
                      </option>
                    );
                  })}
              </select>
              <label htmlFor="floatingList2">Lista de terceros</label>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-5">
            <button type="submit" class="btn btn-primary mx-1">
              Agregar usuario
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
