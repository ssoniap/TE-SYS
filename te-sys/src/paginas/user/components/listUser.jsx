import React, { useEffect, useState } from "react";
import Fila from "./elementosFila";
import apiUser from "../../../services/apiUser";

const ListarTerceros = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await apiUser.getUsers();
    setUsers(response.data.data);
  };

  const handleEdit = async (user, form) => {
    console.log("algo");
    return;
    const body = { active: !user.active };
    const response = await apiUser.updateUser(user.id, body);
    getUsers();
  };

  const handleInactivate = async (user) => {
    const body = { active: !user.active };
    const response = await apiUser.updateUser(user.id, body);
    getUsers();
  };

  const handleDelete = async (user) => {
    const response = await apiUser.deleteUser(user.id);
    getUsers();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <div className="mt-3">
        <h2>Lista de usuarios</h2>
      </div>
      <div className="table-responsive">
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">Usuario</th>
              <th scope="col">Rol</th>
              <th scope="col">Nombre</th>
              <th scope="col">Estado</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((fila) => {
              return (
                <Fila
                  key={fila.id}
                  info={{
                    id: fila.id,
                    user: fila.userName,
                    role: fila?.role.roleName,
                    name: fila?.person?.fullName.toLowerCase(),
                    status: fila.active ? "Activo" : "Inactivo",
                    fullItem: fila,
                  }}
                  handleInactivate={handleInactivate}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              );
            })}
            ;
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListarTerceros;
