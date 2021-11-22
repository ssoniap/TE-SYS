import { useState } from "react";
import Swal from "sweetalert2";
import moment from "moment";
import "moment/locale/es"; 
import apiEquipment from "../../services/apiEquipment";

import NavBar from "../../components/NavBar";
import ListarEquipos from "./components/EquipmentList";
import "./equipment.css";
import Footer from "../../components/Footer";



const Equipos= () => {
    const defaultFormValues = () => {
        return {
          orderDate: moment().format("YYYY-MM-DD"),
          serial: "",
          machineName: "",
          description: "",
          brand: "",
          peripherals: "",
          manufacturer: "",
          picture: "",
          status: "Cliente",
        };
      };
    
      const [formData, setFormData] = useState(defaultFormValues());
    
      const onChange = (e, type) => {
        //setIsClear(false);
        setFormData({ ...formData, [type]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const machine = {
            orderDate: formData.orderDate,
            serial: formData.serial,
            machineName: formData.machineName,
            description: formData.description,
            brand: formData.brand,
            peripherals: formData.peripherals,
            manufacturer: formData.manufacturer,
            picture: formData.picture,
            status: formData.status,
        };
        Swal.fire({
            title: "¿Guardar cambios?",
            showCancelButton: true,
            confirmButtonText: "Continuar",
        }).then((result) => {
            if (result.isConfirmed) {
                apiEquipment
                    .createEquipment(machine)
                    .then((response) => {
                        //clearForm();
                        //getTerceros();
                        Swal.fire({
                            title: "Actualizado!",
                            icon: "success",
                            timer: 1500,
                            timerProgressBar: true,
                            position: "top-end",
                        });
                    })
                    .catch((error) => {
                        Swal.fire({
                            title: "Los cambios no fueron actualizados!",
                            icon: "error",
                            timer: 2000,
                            timerProgressBar: true,
                            position: "top-end",
                        });
                    });
            }
        });
        console.log(formData);
    }


  return (
    <div>
        
        <div className="mt-5 p-5 text-start">
            <NavBar />
            <h1>EQUIPOS</h1>
            <h2>Gestion de Equipos</h2>
        </div>
        <div className="container">
                <form action="" onSubmit={handleSubmit} className="row needs-validation" novalidate>
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
                            value={formData.orderDate}
                            onChange={(e) => onChange(e, "orderDatee")}
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
                            value={formData. serial}
                            onChange={(e) => onChange(e, "serial")}
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
                            value={formData.machineName}
                            onChange={(e) => onChange(e, "machineName")}
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
                                value={formData.   status}
                                onChange={(e) => onChange(e, "status")}
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
                            value={formData.  brand}
                            onChange={(e) => onChange(e, "brand")}
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
                            value={formData.   peripherals}
                            onChange={(e) => onChange(e, "peripherals")}
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
                            value={formData.   manufacturer}
                            onChange={(e) => onChange(e, "manufacturer")}
                            ></textarea>
                            <label >FABRICANTE</label>
                        </div>
                    </div>
                    <hr className="seperator" />

                        <div className="row">
                    
                            <div class="mb-3 col-lg-4">
                                <label for="formFileSm" class="form-label"
                                value={formData.   picture}
                                onChange={(e) => onChange(e, "picture")}>Cargar imagen del equipo</label> 
                                <input class="form-control form-control-sm" id="formFileSm" type="file"/>
                            </div>
                        </div>

                    <div className="col-12">
                    <input
                        type="submit"
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
            <div className="container"><ListarEquipos /></div>
            
        </div>
        <div><Footer/></div>
    </div>
  );
};

export default Equipos;
