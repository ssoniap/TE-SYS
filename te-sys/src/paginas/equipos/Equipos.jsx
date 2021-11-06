import NavBar from "../../componentes/NavBar";
import ListarEquipos from "./componentes/ListarEquipos";
import "./equipos.css";

const Equipos= () => {
  return (
    <div>
      <div className="mt-5 p-5 text-start">
        <NavBar />
        <h1>EQUIPOS</h1>
        <h2>Gestion de Equipos</h2>
      </div>
      <div className="container">
            <form action="" className="row needs-validation" novalidate>
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
                        <label for="floatingInputDate">FECHA</label>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="form-floating mb-3">
                        <textarea
                        className="form-control"
                        id="floatingInputPeripherals"
                        aria-label="Serial del equipo"
                        cols="10"
                        rows="10"
                        ></textarea>
                        <label >SERIAL</label>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="form-floating mb-3">
                        <textarea
                        className="form-control"
                        id="floatingInputPeripherals"
                        aria-label="Nombre del equipo"
                        cols="10"
                        rows="10"
                        ></textarea>
                        <label >NOMBRE</label>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                <div className="form-floating mb-3">
                        <select
                            className="form-select"
                            id="floatingInputState"
                            aria-label="Estado del equipo"
                            required
                            >
                            <option>Almacen</option>
                            <option>Cuarentena</option>
                        </select>
                        <label >ESTADO</label>
                </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="form-floating mb-3">
                        <textarea
                        className="form-control"
                        id="floatingInputPeripherals"
                        aria-label="Marca del equipo"
                        cols="10"
                        rows="10"
                        ></textarea>
                        <label >MARCA</label>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="form-floating mb-3">
                        <textarea
                        className="form-control"
                        id="floatingInputPeripherals"
                        aria-label="Periferico del equipo"
                        cols="10"
                        rows="10"
                        ></textarea>
                        <label >PERIFERICO</label>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="form-floating mb-3">
                        <textarea
                        className="form-control"
                        id="floatingInputPeripherals"
                        aria-label="Fabricante del equipo"
                        cols="10"
                        rows="10"
                        ></textarea>
                        <label >FABRICANTE</label>
                    </div>
                </div>
                <hr className="seperator" />
                    <div className="row">
                        <div class="mb-3 col-lg-4">
                            <label for="formFileSm" class="form-label">Cargar imagen del equipo</label> 
                            <input class="form-control form-control-sm" id="formFileSm" type="file"/>
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
            </div>    
            </form>
      </div>
      <h2>Lista de Equipos</h2>
        <div className="container">
        <form class="d-flex">
            <input class="form-control me-2" 
            type="search" placeholder="Buscar" aria-label="Search" />
           <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
            <ListarEquipos />
        </div>
    </div>
  );
};

export default Equipos;
