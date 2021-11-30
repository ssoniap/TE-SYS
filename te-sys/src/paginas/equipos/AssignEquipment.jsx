import NavBar from "../../components/NavBar";
import ListarEquiposAsignar from "./components/AssignEquipmentList";
import "./equipment.css";
import Footer from "../../components/Footer";
import '../../styles/Styles.css';
import apiThirdParty from "../../services/apiThirdParty";
import Swal from "sweetalert2";
import { useState } from "react";



const AsignarEquipos= () => {

    const defaultFormValues = () => {
        return {          
          identityDocument: "",
          firstName: "",
          lastName: "",
          id: "",
          roleName: "cliente"
        };
      };

    const onChange = (e, type) => {
        //setIsClear(false);
        setFormData({ ...formData, [type]: e.target.value });
      };

    const [formData, setFormData] = useState(defaultFormValues());

    const handleSubmit = (e) => {
        e.preventDefault();        
        };


    const getById = () => {
        let params = {identityDocument: formData.identityDocument};
        apiThirdParty  
          .getThirdParties(params)
          .then((response) => {
            console.log(response);
            setFormData({
              ...formData,
              identityDocument: response.data.data[{}].identityDocument,
              firstName: response.data.data[{}].firstName,
              lastName: response.data.data[{}].lastName,              
              id: response.data.data[{}].id,
            });
          })

          .catch((error) => {
            Swal.fire({
              title: "Tercero no registrado!",
              icon: "error",
              timer: 2000,
              timerProgressBar: true,
              position: "top-end",
            });
          });
      };       
    
    

    return (
    <div>
      <div className="mt-5 p-5 text-start">
        <NavBar />
        
        <h1>Asignar Equipos</h1>
      </div>
     
      <div className="container">
            <form
                 action=""
                 onSubmit={handleSubmit}
                 className="row needs-validation"
                 novalidate

            >
                <div className="input-group " >
                    <input 
                    type="text" 
                    className="form-control inputBuscar me-2"                    
                    placeholder="Búsqueda por cédula"
                    
                     />
                    <div className="input-group-btn mb-2">
                    <button className="btn btn-outline-success mt-1" onClick={getById}>  <i className="bi bi-search mx-2"></i> Buscar Cliente</button>
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
                            value={formData.identityDocument}
                            onChange={(e) => onChange(e, "identityDocument")}
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
                            value={formData.firstName}
                            onChange={(e) => onChange(e, "firstName")}
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
                            value={formData.lastName}
                            onChange={(e) => onChange(e, "lastName")}
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
                
                {/* <div className="container">
                    <h2>EQUIPOS ASIGNADOS</h2>
                    <form className="d-flex">
                            <input className="form-control me-2" 
                            type="search" placeholder="Buscar" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    <div ><ListarEquipos />
                    </div> 
                </div> */}
                
                    <h2>ASIGNAR EQUIPOS</h2>
                            
                        {/* <form className="d-flex">
                            <input 
                            className="form-control me-2" 
                            type="search"
                            placeholder="Buscar por serial" 
                            aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit"> <i className="bi bi-search mx-2"></i> Buscar</button>
                        </form> */}
                    <div ><ListarEquiposAsignar /></div> 
                
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