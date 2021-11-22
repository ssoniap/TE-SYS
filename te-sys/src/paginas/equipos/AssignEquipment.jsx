import NavBar from "../../components/NavBar";
import ListarEquiposAsignar from "./components/AssignEquipmentList";
import "./equipment.css";
import Footer from "../../components/Footer";
import ListarEquipos from "./components/EquipmentList";


const AsignarEquipos= () => {
  return (
    <div>
      <div className="mt-5 p-5 text-start">
        <NavBar />
        
        <h1>ASIGNAR EQUIPOS</h1>
      </div>
     
      <div className="container">
            <form>
                <div class="input-group " >
                    <input type="text" class="form-control me-2" placeholder="Search"/>
                    <div class="input-group-btn">
                    <button class="btn btn-outline-success" type="submit">Buscar Cliente</button>
                    </div>
                </div>
            </form> 
            <hr className="seperator" />
            <form action="" className="row needs-validation" novalidate>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="form-floating mb-3">
                            <input
                            type="text"
                            className="form-control"
                            id="floatingInputName"
                            aria-label="Cedula Cliente"
                            disabled
                            readonly
                            />
                            <label for="floatingInputName">Cedula</label>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="form-floating mb-3">
                            <input
                            type="text"
                            className="form-control"
                            id="floatingInputName"
                            aria-label="Nombre Cliente"
                            disabled
                            readonly
                            />
                            <label for="floatingInputName">Nombre</label>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="form-floating mb-3">
                            <input
                            type="text"
                            className="form-control"
                            id="floatingInputName"
                            aria-label="Apellido Cliente"
                            disabled
                            readonly
                            />
                            <label for="floatingInputName">Apellido</label>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
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
                            <label for="floatingInputDate">FECHA DE ASIGNACION</label>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="form-floating mb-3">
                            <select
                                className="form-select"
                                id="floatingInputState"
                                aria-label="Tipo asignacion equipo"
                                required
                                >
                                <option>Venta</option>
                                <option>Comodato</option>
                                <option>Prestamo</option>
                            </select>
                            <label >
                                TIPO DE ASIGNACION

                            </label>
                        </div>
                    </div>
                </div> 
                
                <div className="container">
                    <h2>EQUIPOS ASIGNADOS</h2>
                    <form class="d-flex">
                            <input class="form-control me-2" 
                            type="search" placeholder="Buscar" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    <div ><ListarEquipos />
                    </div> 

                </div>
                <div className="container">
                    <h2>ASIGNAR EQUIPOS</h2>
                            
                        <form class="d-flex">
                            <input class="form-control me-2" 
                            type="search" placeholder="Buscar" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    <div ><ListarEquiposAsignar /></div> 
                </div>
                <div className="col-12">
                    <input
                        type="button"
                        className="btn btn-primary mx-2"
                        value="Guardar"
                    />
                </div>   
            </form>
      </div>
      
        <div><Footer/></div>
    </div>
  );
};

export default AsignarEquipos;
