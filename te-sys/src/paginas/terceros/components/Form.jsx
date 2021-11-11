const Form = () => {
  return (
    <div>
      <div className="container">
        <form action="" className="row needs-validation" novalidate>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="form-floating mb-3">
              <select
                className="form-select"
                id="floatingInputState"
                aria-label="Tipo documento"
                required
              >
                <option>CC</option>
                <option>CE</option>
                <option>TI</option>
              </select>
              <label>TIPO DOCUMENTO</label>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                id="floatingInputPeripherals"
                aria-label="Nombre del tercero"
                cols="10"
                rows="10"
              ></textarea>
              <label>NOMBRE</label>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                id="floatingInputPeripherals"
                aria-label="Apellidos del tercero"
                cols="10"
                rows="10"
              ></textarea>
              <label>APELLIDOS</label>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                id="floatingInputPeripherals"
                aria-label="Direccion del tercero"
                cols="10"
                rows="10"
              ></textarea>
              <label>DIRECCION</label>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                id="floatingInputPeripherals"
                aria-label="gmail"
                cols="10"
                rows="10"
              ></textarea>
              <label>CORREO ELECTRONICO</label>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                id="floatingInputPeripherals"
                aria-label="Numero de contacto"
                cols="10"
                rows="10"
              ></textarea>
              <label>NUMERO CONTACTO</label>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                id="floatingInputPeripherals"
                aria-label="Ciudad del tercero"
                cols="10"
                rows="10"
              ></textarea>
              <label>CIUDAD</label>
            </div>
          </div>
          <div className="col-12">
            <input
              type="button"
              className="btn btn-primary mx-2"
              value="Guardar"
            />
            <input
              type="button"
              className="btn btn-primary mx-2"
              value="Modificar"
            />
            <input
              type="button"
              className="btn btn-primary mx-2"
              value="Eliminar"
            />
          </div>
        </form>
      </div>
      <h2>Lista de Terceros</h2>

      <div className="container">
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
