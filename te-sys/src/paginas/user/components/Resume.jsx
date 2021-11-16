import './ResumeStyles.css';
import Robot from "../../../assets/images/robot.png";
import Background from "../../../assets/images/wallpaperwaves.jpg";
import {Link } from "react-router-dom";

const Resume = () =>{
    return(
        <div className="content-fluid">
    	<div className="row">
    	    
    		<div className="">
    		    <div className="card profile-card-1">
    		        <img src={Background} alt="profile-sample1" className="background"/>
    		        <img src={Robot} alt="" className="profile"/>
                    <div className="card-content">                        
                    <h2>Usuario<small>Rol asociado</small><small>Correo electrónico</small><small>Nombre completo</small><small>Token</small></h2>
                    <div className="icon-block"><Link to="/equipos"><i class="bi bi-journal mx-2"></i></Link><Link to="/failure"> <i class="bi bi-bug mx-2"></i></Link><Link to="/review"> <i class="bi bi-wrench mx-2"></i></Link></div>
                    </div>
                </div>
                
    		</div>
        </div>
        </div>

    )
}

export default Resume;