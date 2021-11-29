import React, { useEffect, useState } from "react";
import Fila from "./elementosFila";
import apiUser from "../../../services/apiUser";
import Swal from "sweetalert2";

const ListarTerceros = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await apiUser.getUsers();
    setUsers(response.data.data);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const id = e.target[0].id;
    const body = {};
    if (e.target[1].value != "") {
      body.password = e.target[1].value;
    }
    body.role = e.target[2].value;
    body.person = e.target[3].value;

    Swal.fire({
      title: "Actualizar",
      text: `¿Actualizar usuario ${e.target[0].value}?`,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Actualizar",
      cancelButtonText: "No, Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        apiUser
          .updateUser(id, body)
          .then((response) => {
            if (response.status == 200) {
              Swal.fire({
                title: "Actualizado",
                text: `El usuario ${e.target[0].value} ha sido actualizado correctamente`,
                icon: "success",
                confirmButtonText: "Cerrar",
                timer: 3000,
                timerProgressBar: true,
              });
            }
          })
          .catch((error) => {
            Swal.fire({
              title: "Error",
              text: "No se logró actualzar el usuario",
              icon: "error",
              confirmButtonText: "Cerrar",
            });
          });

        getUsers();
      }
    });
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
