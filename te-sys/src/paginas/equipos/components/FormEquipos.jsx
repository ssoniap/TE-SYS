import { useState } from "react";
import Swal from "sweetalert2";
import apiEquipment from "../../../services/apiEquipment";
import EquipmentList from "./EquipmentList";
import { useEffect } from "react";
import moment from "moment";

const FormEquipos = () => {
  const defaultFormValues = () => {
    return {
      orderDate: moment().format("YYYY-MM-DD"),
      serial: "",
      machineName: "",
      description: "",
      brand: "",
      accessories: "",
      peripherals: "",
      manufacturer: "",
      picture: "",
      status: "Almacén",
      activate: "",
      id: "",
    };
  };

  const [formData, setFormData] = useState(defaultFormValues());
  const [machine, setMachine] = useState([]);

  const onChange = (e, type) => {
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
      accessories: formData.accessories,
      peripherals: formData.peripherals,
      manufacturer: formData.manufacturer,
      picture: formData.picture,
      status: formData.status,
      activate: formData.activate,
    };

    Swal.fire({
      title: "¿Desea guardar cambios?",
      showCancelButton: true,
      confirmButtonText: "Continuar",
    }).then((result) => {
      if (result.isConfirmed) {
        apiEquipment
          .createEquipment(machine)
          .then((response) => {
            setFormData(defaultFormValues());
            getAll();
            Swal.fire({
              title: "Guardado!",
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

  const getById = () => {
    let params = { serial: formData.serial };
    apiEquipment
      .getEquipments(params)
      .then((response) => {
        setFormData({
          ...formData,
          orderDate: moment(response.data.data[0].orderDate).format(
            "YYYY-MM-DD"
          ),
          serial: response.data.data[0].serial,
          machineName: response.data.data[0].machineName,
          description: response.data.data[0].description,
          brand: response.data.data[0].brand,
          accessories: response.data.data[0].accessories,
          peripherals: response.data.data[0].peripherals,
          manufacturer: response.data.data[0].manufacturer,
          picture: response.data.data[0].picture,
          status: response.data.data[0].status,
          activate: response.data.data[0].activate,
          id: response.data.data[0].id,
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
      orderDate: formData.orderDate,
      serial: formData.serial,
      machineName: formData.machineName,
      description: formData.description,
      brand: formData.brand,
      accessories: formData.accessories,
      peripherals: formData.peripherals,
      manufacturer: formData.manufacturer,
      picture: formData.picture,
      status: formData.status,
      activate: formData.activate,
    };
    Swal.fire({
      title: "¿Desea actualizar?",
      showCancelButton: true,
      confirmButtonText: "Continuar",
    }).then((result) => {
      if (result.isConfirmed) {
        apiEquipment
          .updateEquipment(formData.id, machine)
          .then((response) => {
            setFormData(defaultFormValues());
            getAll();
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

  const deleteItemListById = (itemDelete) => {
    deleteById(itemDelete.id);
  };

  const deleteItemFormById = () => {
    deleteById(formData.id);
  };

  const deleteById = (id) => {
    Swal.fire({
      title: "¿Seguro eliminar?",
      showCancelButton: true,
      confirmButtonText: "Continuar",
    }).then((result) => {
      if (result.isConfirmed) {
        apiEquipment
          .deleteEquipment(id)
          .then((response) => {
            setFormData(defaultFormValues());
            getAll();
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
              title: "El Equipo no fue eliminado!",
              icon: "error",
              timer: 2000,
              timerProgressBar: true,
              position: "top-end",
            });
          });
      }
    });
  };

  const handleSelectedItem = (itemEdit) => {
    machine
      .filter((item) => item.serial === itemEdit.serial)
      .map((item) => {
        setFormData({
          orderDate: moment(item.orderDate).format("YYYY-MM-DD"),
          serial: item.serial,
          machineName: item.machineName,
          description: item.description,
          brand: item.brand,
          accessories: item.accessories,
          peripherals: item.peripherals,
          manufacturer: item.manufacturer,
          picture: item.picture,
          status: item.status,
          activate: item.activate,
          id: item.id,
        });
      });
  };

  const getAll = async () => {
    await apiEquipment
      .getEquipments({ active: "true" })
      .then((response) => {
        setMachine(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div>
      <div className="container">
        <form
          action=""
          onSubmit={handleSubmit}
          className="row needs-validation"
          novalidate
        >
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
                  aria-label="Fecha creacion de equipo"
                  required
                  value={formData.orderDate}
                  onChange={(e) => onChange(e, "orderDate")}
                />
                <span className="validity"></span>
                <label for="floatingInputDate">FECHA</label>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="floatingInputserial"
                  aria-label="Serial del equipo"
                  cols="10"
                  rows="10"
                  value={formData.serial}
                  onChange={(e) => onChange(e, "serial")}
                ></textarea>
                <label>SERIAL</label>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="floatingInputmachineName"
                  aria-label="Nombre del equipo"
                  cols="10"
                  rows="10"
                  value={formData.machineName}
                  onChange={(e) => onChange(e, "machineName")}
                ></textarea>
                <label>NOMBRE</label>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="form-floating mb-3">
                <select
                  className="form-select"
                  id="floatingInputState"
                  aria-label="Estado del equipo"
                  required
                  value={formData.status}
                  onChange={(e) => onChange(e, "status")}
                >
                  <option value="Almacén">Almacén</option>
                  <option value="Cuarentena">Cuarentena</option>
                </select>
                <label>ESTADO</label>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="floatingInputBrand"
                  aria-label="Marca del equipo"
                  cols="10"
                  rows="10"
                  value={formData.brand}
                  onChange={(e) => onChange(e, "brand")}
                ></textarea>
                <label>MARCA</label>
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
                  value={formData.peripherals}
                  onChange={(e) => onChange(e, "peripherals")}
                ></textarea>
                <label>PERIFERICO</label>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="floatingInputaccesories"
                  aria-label="Accesorios del equipo"
                  cols="10"
                  rows="10"
                  value={formData.accessories}
                  onChange={(e) => onChange(e, "accessories")}
                ></textarea>
                <label>ACCESORIOS</label>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="floatingInputmanufacturer"
                  aria-label="Fabricante del equipo"
                  cols="10"
                  rows="10"
                  value={formData.manufacturer}
                  onChange={(e) => onChange(e, "manufacturer")}
                ></textarea>
                <label>FABRICANTE</label>
              </div>
            </div>
            <hr className="seperator" />
            <div className="row">
              <div class="mb-3 col-lg-4">
                <label
                  for="formFileSm"
                  class="form-label"
                  value={formData.picture}
                  onChange={(e) => onChange(e, "picture")}
                >
                  Cargar imagen del equipo
                </label>
                <input
                  class="form-control form-control-sm"
                  id="formFileSm"
                  type="file"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-12">
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="floatingInputdescription"
                  aria-label="Descripcion del equipo"
                  cols="10"
                  rows="10"
                  value={formData.description}
                  onChange={(e) => onChange(e, "description")}
                ></textarea>
                <label>Descripcion</label>
              </div>
            </div>
            <hr className="seperator" />

            <div className="col-12">
              <input
                type="submit"
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
                onClick={deleteById}
                className="btn btn-primary mx-2"
                value="Eliminar"
              />
              <input
                type="button"
                onClick={getById}
                className="btn btn-primary mx-2"
                value="Buscar"
              />
            </div>
          </div>
        </form>
      </div>
      <h2>Lista de Equipos</h2>
      <div className="container">
        <EquipmentList
          dataSource={machine}
          handleSelectedItem={handleSelectedItem}
          handleDeleteItem={deleteItemListById}
        />
      </div>
    </div>
  );
};

export default FormEquipos;
