import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import moment from "moment";
import "moment/locale/es";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ListFailures from "./components/ListFailures";
import apiEquipment from "../services/apiEquipment";
import apiThirdParty from "../services/apiThirdParty";
import apiFailure from "../services/apiFailure";
import Serial from "./components/SerialFailure";
import localStorage from "../services/localStorage";
import "./failure.css";

let isEdit = false;
let isClear = false;

const Failure = () => {
  const defaultFormValues = () => {
    return {
      failDate: moment().format("YYYY-MM-DD"),
      diagnostic: "",
      accesories: "",
      reason: "",
      peripherals: "",
      status: "Garantía",
      serial: "",
      workerName: localStorage.getWorkerName(),
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
          setEquipment({});
        }
      });
    } else {
      isClear = true;
      setFormData(defaultFormValues());
      setEquipment({});
    }
  };

  const onChange = (e, type) => {
    isClear = false;
    setFormData({ ...formData, [type]: e.target.value });
  };

  const getEquipments = async () => {
    await apiEquipment
      .getEquipments({ active: "true" })
      .then((response) => {
        setEquipments(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGetSerial = (value) => {
    isClear = false;
    formData.serial = value;
    const itemAux = equipments.find((item) => item.serial === value);
    setEquipment(itemAux);
    setFormData({
      failDate: moment().format("YYYY-MM-DD"),
      diagnostic: "",
      accesories: "",
      reason: "",
      peripherals: "",
      status: "Garantía",
      serial: formData.serial,
      workerName: localStorage.getWorkerName(),
    });
  };

  const handleSelectedItem = (itemEdit) => {
    isClear = false;
    equipment?.fails
      .filter((item) => item.failDate === itemEdit.failDate)
      .map((item) => {
        setFormData({
          failDate: item.failDate,
          diagnostic: item.diagnostic,
          accesories: item.accesories,
          reason: item.reason,
          peripherals: item.peripherals,
          status: item.status != "" ? item.status : "Almacén",
          serial: formData.serial,
          workerName: item.workerName,
        });
        isEdit = true;
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fail = {
      failDate: formData.failDate,
      diagnostic: formData.diagnostic,
      accesories: formData.accesories,
      reason: formData.reason,
      peripherals: formData.peripherals,
      status: formData.status,
      workerName: formData.workerName,
    };
    Swal.fire({
      title: "¿Grabar cambios?",
      showCancelButton: true,
      confirmButtonText: "Continuar",
    }).then((result) => {
      if (result.isConfirmed) {
        apiFailure
          .updateFailure(equipment.id, fail)
          .then((response) => {
            isEdit = false;
            sendEmail();
            getEquipments();
            clearForm();
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

  const sendEmail = (e) => {
    const params = {
      roleName: "Coordinador técnico",
    };
    apiThirdParty.getThirdParties(params).then((response) => {
      const thirdParties = response.data.data;
      if (thirdParties.length > 0) {
        const params = {
          to: thirdParties[0].email,
          subject: "Nuevo incidente en el equipo",
          html: `<h1>Se ha registrado una nueva falla del equipo.<h1></br><p><small>
        <li>Serial: ${formData.serial}</li>
        <li>Fecha: ${formData.failDate}</li>
        <li>Diagnóstico: ${formData.diagnostic}</li>
        <li>Accesorios: ${formData.accesories}</li>
        <li>Razón: ${formData.reason}</li>
        <li>Periféricos: ${formData.peripherals}</li>
        <li>Estado: ${formData.status}</li>
        <li>Trabajador: ${formData.workerName}</li></small></p>
        `,
        };
        apiFailure
          .sendEmail(params)
          .then((response) => {
            // console.log(response);
            Swal.fire({
              title: "Actualizado y Enviado!",
              text: `Se ha enviado un correo a la dirección de correo del coordinador técnico ${thirdParties[0].fullName}`,
              icon: "success",
              timer: 10000,
              timerProgressBar: true,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  const handleDeleteItem = (itemDelete) => {
    const fail = {
      failDate: itemDelete.failDate,
    };
    moment.locale("es");
    Swal.fire({
      title: "¿Eliminar incidente?",
      text: `Revisión del ${moment(itemDelete.failDate).format("LL")}`,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar",
      cancelButtonText: "No, Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        apiFailure
          .deleteFailure(equipment.id, fail)
          .then((response) => {
            clearForm();
            getEquipments();
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
  };

  useEffect(() => {
    getEquipments();
  }, []);

  return (
    <div>
      <div className="mt-5 p-5 text-center">
        <NavBar />
        <h1>Registro de Incidencias</h1>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit} className="row needs-validation">
          <Serial
            items={equipments}
            isClear={isClear}
            handleGetSerial={handleGetSerial}
          />
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
                  value={formData.failDate}
                  onChange={(e) => onChange(e, "failDate")}
                />
                <span className="validity"></span>
                <label for="floatingInputDate">Feha de registro</label>
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
                  value={formData.diagnostic}
                  onChange={(e) => onChange(e, "diagnostic")}
                ></textarea>
                <label for="floatingInputReason">Diagnóstico</label>
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
                  value={formData.accesories}
                  onChange={(e) => onChange(e, "accesories")}
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
                  aria-label="Mtivo de la revisión"
                  required
                  value={formData.reason}
                  onChange={(e) => onChange(e, "reason")}
                />
                <label for="floatingInputInvoice">Motivo de la revisión</label>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="form-floating mb-3">
                <select
                  className="form-select"
                  id="floatingInputState"
                  aria-label="Estado al realizar la revisión"
                  required
                  value={formData.status}
                  onChange={(e) => onChange(e, "status")}
                >
                  <option value="Garantía">Garantía</option>
                  <option value="Devolución">Devolución</option>
                  <option value="Reparación">Reparación</option>
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
                  value={formData.peripherals}
                  onChange={(e) => onChange(e, "peripherals")}
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
                onClick={() => {
                  clearForm();
                }}
              />
              <button className="btn btn-primary" type="submit">
                Grabar
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="container">
        <ListFailures
          dataSource={equipment?.fails}
          handleSelectedItem={handleSelectedItem}
          handleDeleteItem={handleDeleteItem}
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Failure;
