import { useEffect, useState } from "react";
import apiEquipment from "../../../services/apiEquipment";


const FilasAssignList = (props) => {
    const {id, picture , serial, machineName, description, status, asing} = props.info; 
    const [equipment, setEquipment] = useState([]);

    const getEquipments = async () => {
        const params = { active: true };
        const response = await apiEquipment.getEquipments(params);
        const aux = [];
        response.data.data.map((equipment) => {
            aux.push({              
                id: equipment.id,  
                picture: equipment.picture,
                serial: equipment.serial, 
                machineName: equipment.machineName,
                description: equipment.description,
                status: equipment.status,
            })
        });
        setEquipment(aux);
      };
      useEffect(() => {
        getEquipments();        
      }, []);


    return (
        <tr>            
        <td><img src={picture} width="50" height="50"></img></td>
        <td>{serial}</td>
        <td>{machineName}</td>
        <td>{description}</td>
        <td>{status}</td> 
        <td>{asing}</td>      
        </tr>
    );
}

export default FilasAssignList;