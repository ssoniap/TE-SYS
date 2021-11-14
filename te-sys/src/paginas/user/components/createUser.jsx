

const Form =() => {
    return(
        <div className="container-fluid">
          <form action="">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-md-6 col-lg-5">
                  <div className="form-floating mb-3 div-date">
                      <input
                      type="text"
                      className="form-control"
                      id="floatingName"
                      placeholder="Escriba el nombre de usuario"
                      required
                      />
                      <label for="floatingName">Nombre de Usuario</label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-5">
                    <div className="form-floating mb-3">
                      <input 
                        type="password"
                        className="form-control"
                        id="floatingPassword" 
                        placeholder="Escribe tus apellidos"
                        required
                      />
                      <label htmlFor="floatingPassword">Contraseña</label>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-5">
                <select className="form-select form-select-lg mb-3">
                    <option selected disabled>Rol asignado al usuario</option>
                    <option>Rol 1</option>
                    <option>Rol 2</option>
                    <option>Rol 3</option>
                  </select>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-5">
                  <select className="form-select form-select-lg mb-3">
                    <option selected disabled>Tercero asignado al usuario</option>
                    <option>Tercero 1</option>
                    <option>Tercero 2</option>
                    <option>Tercero 3</option>
                  </select>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-5">
                  <button type="button" class="btn btn-primary mx-1">Agregar usuario</button>
                  <button type="button" class="btn btn-success">Listar usuarios</button>
                </div>
              </div>
            </form>
        </div>
    )
}

export default Form;