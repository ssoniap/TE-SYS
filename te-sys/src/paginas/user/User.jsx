import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import CrearUsuario from "./components/createUser";
import ListaUsuarios from "./components/listUser";
import apiUser from "../../services/apiUser";
import Swal from "sweetalert2";
import "./components/user.css";
import "../../styles/Styles.css";

const Usuarios = () => {
  const handleCreate = async (e) => {
    e.preventDefault();
    const body = {
      userName: e.target[0].value,
      password: e.target[1].value,
      role: e.target[2].value,
      person: e.target[3].value,
    };
    Swal.fire({
      title: "Crear usuario",
      text: `¿Asignar usuario ${e.target[0].value}?`,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Actualizar",
      cancelButtonText: "No, Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        apiUser
          .createUser(body)
          .then((response) => {
            if (response.status == 200) {
              Swal.fire({
                title: "Creado",
                text: `El usuario ${e.target[0].value} ha sido creado correctamente`,
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
      }
    });
  };

  return (
    <div>
      <NavBar />
      <CrearUsuario handleCreate={handleCreate} />
      <ListaUsuarios />
      <Footer />
    </div>
  );
};

export default Usuarios;
