import { useState, useEffect } from "react";
import apiThirdParty from "../../../services/apiThirdParty";
import apiUser from "../../../services/apiUser";

const Fila = (props) => {
  const { id, user, role, name, status, fullItem } = props.info;
  const { handleInactivate, handleDelete, handleEdit } = props;

  const [thirdParties, setThirdParties] = useState([]);
  const [roles, setRoles] = useState([]);
  const [password, setPassword] = useState("");
  const [newRole, setNewRole] = useState(fullItem.role?._id);
  const [thirdParty, setThirdParty] = useState(fullItem.person?.id);

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
    <tr>
      <td>{user}</td>
      <td>{role}</td>
      <td>{name}</td>
      <td>{status}</td>
      <td>
        {/* // Button trigger modal */}
        <button
          type="button"
          className="btn btn-warning mx-1"
          data-bs-toggle="modal"
          data-bs-target={"#Editar" + id}
        >
          Editar
        </button>
        {/* // Modal */}
        <div
          className="modal fade"
          id={"Editar" + id}
          tabindex="-1"
          aria-labelledby="EditarLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg ">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="EditarLabel">
                  Editar usuario
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleEdit}>
                  <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-6 col-lg-5">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id={id}
                          value={user}
                          required
                          disabled
                        />
                        <label htmlFor={id}>Nombre de Usuario</label>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-5">
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id={id}
                          placeholder="Contraseña"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                        <label htmlFor={id}>Contraseña</label>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-5">
                      <div className="form-floating mb-3">
                        <select
                          className="form-select"
                          id={id}
                          value={newRole}
                          onChange={(e) => {
                            setNewRole(e.target.value);
                          }}
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
                        <label htmlFor={id}>Lista de roles</label>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-5">
                      <div className="form-floating mb-3">
                        <select
                          className="form-select"
                          id={id}
                          value={thirdParty}
                          onChange={(e) => {
                            setThirdParty(e.target.value);
                          }}
                          required
                        >
                          {thirdParties &&
                            thirdParties.map((thirdParty) => {
                              return (
                                <option
                                  key={thirdParty.id}
                                  value={thirdParty.id}
                                >
                                  {thirdParty.showName}
                                </option>
                              );
                            })}
                        </select>
                        <label htmlFor={id}>Lista de terceros</label>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-outline-dark"
                      data-bs-dismiss="modal"
                    >
                      Cerrar
                    </button>
                    <button
                      type="submit"
                      className="btn btn-warning"
                      data-bs-dismiss="modal"
                    >
                      Realizar cambios
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* // Button trigger modal */}
        <button
          type="button"
          className="btn btn-danger mx-1"
          data-bs-toggle="modal"
          data-bs-target={"#Eliminar" + id}
        >
          Eliminar
        </button>

        {/* // Modal */}
        <div
          className="modal fade"
          id={"Eliminar" + id}
          tabindex="-1"
          aria-labelledby="EliminarLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="EliminarLabel">
                  Eliminar usuario
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <h5>¿Desea eliminar este usuario?</h5>
                <h9>{fullItem.userName + "-" + fullItem.person?.fullName}</h9>
                <h6>No podrás recuperar la información</h6>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  data-bs-dismiss="modal"
                >
                  No deseo eliminar el usuario
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                  onClick={() => handleDelete(fullItem)}
                >
                  Si, deseo eliminar el usuario
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* // Button trigger modal */}
        <button
          type="button"
          className="btn btn-light"
          data-bs-toggle="modal"
          data-bs-target={"#Inactivar" + id}
        >
          {fullItem?.active ? "Inactivar" : "Activar"}
        </button>

        <div
          className="modal fade"
          id={"Inactivar" + id}
          tabindex="-1"
          aria-labelledby="InactivarLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="InactivarLabel">
                  {fullItem?.active ? "Inactivar" : "Activar"} usuario
                </h5>
              </div>
              <div className="modal-body">
                <h5>
                  ¿Desea {fullItem?.active ? "inactivar" : "activar"} este
                  usuario?
                </h5>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  data-bs-dismiss="modal"
                >
                  No deseo {fullItem?.active ? "inactivar" : "activar"} el
                  usuario
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                  onClick={() => handleInactivate(fullItem)}
                >
                  Si, deseo {fullItem?.active ? "inactivar" : "activar"} el
                  usuario
                </button>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default Fila;
