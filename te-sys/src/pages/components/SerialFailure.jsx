import React, { useEffect, useState } from "react";

const SerialFailure = (props) => {
  const { items, isClear, handleGetSerial } = props;
  const [serial, setSerial] = useState("");
  const [machineName, setMachineName] = useState("");
  const [brand, setBrand] = useState("");
  const [status, setStatus] = useState("");

  const setItem = (value) => {
    const auxSerial = value.split("|")[0].trim();
    const item = items.find((item) => item.serial === auxSerial);
    setSerial(auxSerial);
    handleGetSerial(auxSerial);

    if (item) {
      setMachineName(item.machineName);
      setBrand(item.brand);
      setStatus(item.status);
    } else {
      setMachineName("");
      setBrand("");
      setStatus("");
    }
  };

  useEffect(() => {
    if (isClear) {
      setSerial("");
      setMachineName("");
      setBrand("");
      setStatus("");
    }
  }, [isClear]);

  return (
    <div className="row">
      <div className="col-sm-12 col-md-6 col-lg-3">
        <div className="form-floating mb-3">
          <input
            list="equipments"
            type="text"
            className="form-control"
            value={serial}
            onChange={(e) => setItem(e.target.value)}
            required
          />
          <datalist id="equipments">
            {items &&
              items.map((item) => {
                return (
                  <option
                    key={item.id}
                    value={item.serial + " | " + item.machineName}
                  ></option>
                );
              })}
          </datalist>
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
            value={machineName}
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
            value={brand}
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
            value={status}
          />
          <label for="floatingInputState">Estado</label>
        </div>
      </div>
    </div>
  );
};

export default SerialFailure;
