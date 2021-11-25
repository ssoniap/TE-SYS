import { useState, useEffect } from "react";
import "../../../styles/Styles.css";
import logo from "../../../assets/images/logo_black.png";
import api from "../../../services/apiUser";
import ls from "../../../services/localStorage";
import Swal from "sweetalert2";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const model = {
      userName: userName,
      password: password,
    };

    await api
      .login(model)
      .then((res) => {
        if (res.status === 200) {
          const data = res.data.data;
          const userAuthenticated = {
            id: data.id,
            userName: data.userName,
            role: {
              id: data.role._id,
              roleName: data.role.roleName,
            },
            person: {
              id: data.person?.id,
              fullName: data.person?.fullName,
            },
            access_token: data.token.access_token,
            expires_in: data.token.expires_in,
          };

          ls.setLocalStorage("tesys", userAuthenticated);
          window.location.href = "/userhome";
        }
      })
      .catch((err) => {        
        console.log(err) //aqui va la respuesta
        Swal.fire({
          title: "Usuario o contraseña incorrecta",
          icon: "warning",
          timer: 2000,
          timerProgressBar: true,          
        });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <div className="LogIn p-3 mt-5 pb-md-4 mx-auto">
      <div className="cardLogIn">
        <div className="card-body">
          <img
            className="avatar"
            src={logo}
            alt=""
            width="150"
            height="80"
          ></img>
        </div>
        <div className="container-logIn">
          <div className="card-title-login text-light">Bienvenido</div>
          <div className="card-text-login text-light">Iniciar sesión</div>
          <div className="card-body mt-2">
            <form
              className="row g-3 needs-validation"
              novalidate
              onSubmit={handleSubmit}
            >
              <div className="mb-3 text-black">
                <label
                  for="validationDefaultUsername"
                  class="form-label text-light"
                >
                  Usuario
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationDefaultUsername"
                  aria-describedby="inputGroupPrepend2"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3 text-black">
                <label
                  for="validationDefaultUsername"
                  class="form-label text-light"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="validationDefaultPassword"
                  aria-describedby="inputGroupPrepend2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div class="boton-login d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                  type="submit"
                  id="login"
                  className="btn btn-primary w-50 border-primary text-light fw-light"
                  onClick={() => login()}
                >
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
