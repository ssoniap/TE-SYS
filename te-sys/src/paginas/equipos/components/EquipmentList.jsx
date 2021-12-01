import React from "react";

const EquipmentList = (props) => {
  const { dataSource, handleSelectedItem, handleDeleteItem } = props;

  return (
    <React.Fragment>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
            <th scope="col">Modificar/Eliminar</th>
              <th scope="col">Serial</th>
              <th scope="col">Nombre</th>
              <th scope="col">Perifericos</th>
              <th scope="col">Accesorios</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            {dataSource &&
              dataSource.map((machine, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <button onClick={() => handleSelectedItem(machine)}>
                        <i class="bi bi-pencil-square"></i>
                      </button>
                      <button onClick={() => handleDeleteItem(machine)}>
                        <i class="bi bi-trash"></i>
                      </button>
                    </td>
                    <td>{machine.serial}</td>
                    <td>{machine.machineName}</td>
                    <td>{machine.peripherals}</td>
                    <td>{machine.accessories}</td>
                    <td>{machine.status}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default EquipmentList;
