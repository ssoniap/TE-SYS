import { useState } from "react";
import Swal from "sweetalert2";
import moment from "moment";
import "moment/locale/es"; 
import apiEquipment from "../../services/apiEquipment";

import NavBar from "../../components/NavBar";
import ListarEquipos from "./components/EquipmentList";
import "./equipment.css";
import Footer from "../../components/Footer";

let isEdit = false;
let isClear = false;

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
          status: "Almacen",
        };
      };
      
      const [formData, setFormData] = useState(defaultFormValues());
      const [equipments, setEquipments] = useState([]);
      const [equipment, setEquipment] = useState({});

      const clearForm = () => {
        if (isEdit) {
          Swal.fire({
            title: "Estás editando un registro ¿Limpiar formulario?",
            text: "Si continúas se perderán los datos actuales",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, limpiar",
            cancelButtonText: "No, cancelar",
          }).then((result) => {
            if (result.isConfirmed) {
              isEdit = false;
              isClear = true;
              setFormData(defaultFormValues());
              //setEquipment({});
            }
          });
        } else {
          isClear = true;
          setFormData(defaultFormValues());
          //setEquipment({});
        }
      };

      const handleSelectedItem = (itemEdit) => {
        isClear = false;
        equipment?.machine
          .filter((item) => item.serial === itemEdit.serial)
          .map((item) => {
            setFormData({
                orderDate: item.orderDate,
                serial: item.serial,
                machineName: item.machineName,
                description: item.description,
                brand: item.brand,
                peripherals: item.peripherals,
                manufacturer: item.manufacturer,
                picture: item.picture,
                status: item.status != "" ? item.status : "Almacén",
            });
            isEdit = true;
          });
      };
    
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
          title: "¿Confirmar cambios?",
          showCancelButton: true,
          confirmButtonText: "Continuar",
        }).then((result) => {
          if (result.isConfirmed) {
            apiEquipment
              .createEquipment(machine)
              .then((response) => {
                clearForm();
                //getEquipment();
                Swal.fire({
                  title: "Registrado!",
                  icon: "success",
                  timer: 1500,
                  timerProgressBar: true,
                  position: "top-end",
                });
              })
              .catch((error) => {
                Swal.fire({
                  title: "Error: No fue registrado!",
                  icon: "error",
                  timer: 2000,
                  timerProgressBar: true,
                  position: "top-end",
                });
              });
          }
        });
      };
    
      const getById = () => {
        let params = { serial: formData.serial };
        apiEquipment
          .getEquipments(params)
          .then((response) => {
            console.log(response);
            setFormData({
              ...formData,
                orderDate: response.data.data[0].orderDate,
                serial: response.data.data[0].serial,
                machineName: response.data.data[0].machineName,
                description: response.data.data[0].description,
                brand: response.data.data[0].brand,
                peripherals:response.data.data[0].peripherals,
                manufacturer: response.data.data[0].manufacturer,
                picture: response.data.data[0].picture,
                status: response.data.data[0].status,
            });
          })
    
          .catch((error) => {
            Swal.fire({
              title: "Equipo no registrado!",
              icon: "error",
              timer: 2000,
              timerProgressBar: true,
              position: "top-end",
            });
          });
      };
    
      const update = () => {
        const machine = {
            orderDate: moment().format("YYYY-MM-DD"),
            serial: "",
            machineName: "",
            description: "",
            brand: "",
            peripherals: "",
            manufacturer: "",
            picture: "",
            status: "Almacen",
        };
        Swal.fire({
          title: "¿Grabar cambios?",
          showCancelButton: true,
          confirmButtonText: "Continuar",
        }).then((result) => {
          if (result.isConfirmed) {
            apiEquipment
              .updateEquipment(formData.serial, machine)
              .then((response) => {
                clearForm();
                //getEquipment();
    
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
        
    };

    const handleDeleteItem = (itemDelete) => {
        const machine = {
            serial: itemDelete.serial,
        };
        moment.locale("es");
        Swal.fire({
          title: "¿Eliminar Equipo?",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, Eliminar",
          cancelButtonText: "No, Cancelar",
        }).then((result) => {
          if (result.isConfirmed) {
            apiEquipment
              .deleteEquipment(formData.serial, machine)
              .then((response) => {
                clearForm();
                //getEquipments();
                Swal.fire({
                  title: "Eliminado!",
                  icon: "success",
                  timer: 1500,
                  timerProgressBar: true,
                  position: "top-end",
                });
              })
              .catch((error) => {
                Swal.fire({
                  title: "Los cambios no fueron realizados!",
                  icon: "error",
                  timer: 2000,
                  timerProgressBar: true,
                  position: "top-end",
                });
              });
          }
        });
    }
    


  return (
    <div>
        
        <div className="mt-5 p-5 text-start">
            <NavBar />
            <h1>EQUIPOS</h1>
            <h2>Gestion de Equipos</h2>
        </div>
        <div className="container">
                <form >
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
                                <option>Revision</option>
                                <option>Baja</option>
                            </select>
                            <label >ESTADO</label>
                    </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
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
                    <div className="col-sm-12 col-md-6 col-lg-3">
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
                    <div className="col-sm-12 col-md-6 col-lg-3">
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
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="form-floating mb-3">
                            <textarea
                            className="form-control"
                            id="floatingInputPeripherals"
                            aria-label="Descripcion del equipo"
                            cols="10"
                            rows="10"
                            value={formData.   description}
                            onChange={(e) => onChange(e, "description")}
                            ></textarea>
                            <label >Descripcion</label>
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
                        type="button"
                        onClick={handleSubmit}
                        className="btn btn-primary mx-2"
                        value="Guardar"
                        
                    />
                    <input
                        type="button"
                        onClick={update}
                        className="btn btn-primary mx-2"
                        value="Modificar"
                    />
                    <input
                        type="button"
                        onClick={handleDeleteItem}
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
           <button class="btn btn-outline-success" type="button" onClick={getById}>Buscar</button>
      </form>
      <div className="container">
        <ListarEquipos
          dataSource={equipment?.equipment}
          handleSelectedItem={handleSelectedItem}
          handleDeleteItem={handleDeleteItem}
        />
      </div>
            
        </div>
        <div><Footer/></div>
    </div>
  );
};

export default Equipos;

   
