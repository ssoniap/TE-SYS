import {NavLink } from "react-router-dom";
import '../estilos/Styles.css';


const NavBar = () => {
    return(
        <header>
        <nav className="navbar navbar-dark fixed-top p-3 bg-secondary text-white position-absolute ">
        <div className="container-fluid">
          
          <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon mx-auto"></span>
          </button>
          <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">             
              <NavLink className="nav-link active text-white" activeClassName="text-white" exact to="/"><h5>Te-Sys</h5></NavLink> 
              <button type="button" className="btn-close text-reset btn-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink className="nav-link active text-white" aria-current="page" to="/usuario"><i class="bi bi-person-fill"></i>Usuario</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/equipos"><i class="bi bi-journal"></i>Equipos</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/terceros"><i class="bi bi-people-fill"></i>Terceros</NavLink>
                </li>
                
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success text-white" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>     
      </header>    
        
    );
};



export default NavBar;