import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ListFailures from "./components/ListFailures";
import "./failure.css";

const Failure = () => {
  return (
    <div>
      <div className="mt-5 p-5 text-start">
        <NavBar />
        <h1>Registro de Incidencias</h1>
      </div>
      <div className="container">
        <form action="" className="row needs-validation" novalidate>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="form-floating mb-3">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Listado de equipos"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
                <label for="floatingSelect">Serial</label>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputName"
                  aria-label="Nombre del equipo"
                  disabled
                  readonly
                />
                <label for="floatingInputName">Nombre</label>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputBrand"
                  aria-label="Marca del equipo"
                  disabled
                  readonly
                />
                <label for="floatingInputBrand">Marca</label>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-2">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputState"
                  aria-label="Estado del equipo"
                  disabled
                  readonly
                />
                <label for="floatingInputState">Estado</label>
              </div>
            </div>
          </div>
          <hr className="seperator" />
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="form-floating mb-3 div-date">
                <input
                  type="date"
                  className="form-control"
                  id="floatingInputDate"
                  min="2021-01-01"
                  max="2021-12-31"
                  pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                  aria-label="Fecha del registro"
                  required
                />
                <span className="validity"></span>
                <label for="floatingInputDate">Feha de reporte</label>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="form-floating mb-3">
                <textarea
                  type="text"
                  className="form-control"
                  id="floatingInputReason"
                  aria-label="Motivo de la falla"
                  cols="10"
                  rows="10"
                  required
                ></textarea>
                <label for="floatingInputReason">Detalle del reporte</label>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-5">
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="floatingInputAccesories"
                  aria-label="Accesorios con los que se encuentra el equipo"
                  cols="10"
                  rows="10"
                ></textarea>
                <label for="floatingInputAccesories">Accesorios</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputInvoice"
                  aria-label="Factura del equipo"
                  required
                />
                <label for="floatingInputInvoice">Factura</label>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="form-floating mb-3">
                <select
                  className="form-select"
                  id="floatingInputState"
                  aria-label="Estado al registrar la falla"
                  required
                >
                  <option>Garantía</option>
                  <option>Devolución</option>
                  <option>Reparación</option>
                </select>
                <label for="floatingInputState">Estado del registro</label>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-5">
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="floatingInputPeripherals"
                  aria-label="Periféricos con los que se encuentra el equipo"
                  cols="10"
                  rows="10"
                ></textarea>
                <label for="floatingInputPeripherals">Periféricos</label>
              </div>
            </div>
          </div>
          <hr className="seperator" />
          <div className="row">
            <div className="col-12">
              <input
                type="button"
                className="btn btn-primary mx-2"
                value="Nuevo"
              />
              <button className="btn btn-primary" type="submit">
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="container">
        <ListFailures />
      </div>
      <div><Footer/></div>

      
    </div>
  );
};

export default Failure;
