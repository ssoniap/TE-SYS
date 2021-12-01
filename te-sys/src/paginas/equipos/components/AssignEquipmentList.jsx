import { useEffect, useState } from "react";
import apiEquipment from "../../../services/apiEquipment";

import FilasAssignList from "./FilasAssignList";


const ListarEquiposAsignar = () => {

  const [machines, setMachines] = useState([]);

  const getEquipments = async () => {
    const response = await apiEquipment.getEquipments();
    setMachines(response.data.data);
  };

  useEffect(() => {
    getEquipments();
  }, []);
  


    return (
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>              
              <th scope="col">Imagen</th>  
              <th scope="col">Serial</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Estado</th>
              <th scope="col">Asignar</th>
            </tr>
          </thead>
          <tbody>
          {machines &&
          machines.map((filasAssignList) => {
              return (
                <FilasAssignList
                  key={filasAssignList.id}
                  info={{                    
                    picture: filasAssignList.picture,
                    serial: filasAssignList.serial, 
                    machineName: filasAssignList.machineName,
                    description: filasAssignList.description,
                    status: filasAssignList.status,
                    
                  }}                  
                />
              );
            })}
                   
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ListarEquiposAsignar;
  