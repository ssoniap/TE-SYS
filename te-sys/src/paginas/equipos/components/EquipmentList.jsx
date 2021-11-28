import React, { useEffect } from "react";

const ListarEquipos = (props) => {
  const { dataSource, handleSelectedItem, handleDeleteItem } = props;

  return (
    <React.Fragment>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
            <th scope="col">Imagen</th>  
            <th scope="col">Serial</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Marca</th>
            <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            {dataSource &&
              dataSource.map((equipment, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <button onClick={() => handleSelectedItem(equipment)}>
                        <i class="bi bi-pencil-square"></i>
                      </button>
                      <button onClick={() => handleDeleteItem(equipment)}>
                        <i class="bi bi-trash"></i>
                      </button>
                    </td>
                    <td><i class="fas fa-eye" type= "button"></i>{equipment.picture}</td>
                    <td>{equipment.serial}</td>
                    <td>{equipment.machineName}</td>
                    <td>{equipment.description}</td>
                    <td>{equipment.brand}</td>
                    <td>{equipment.status}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default ListarEquipos;






