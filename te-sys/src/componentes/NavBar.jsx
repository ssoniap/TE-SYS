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
              <NavLink className="nav-link active text-dark" activeClassName="text-withe" exact to="/"><h5>Te-Sys</h5></NavLink> 
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink className="nav-link active text-black" aria-current="page" to="/usuario">Usuario</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-black" to="/equipos">Equipos</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-black" to="/terceros">Terceros</NavLink>
                </li>
                
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success text-black" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>     
      </header>    
        
    );
};



export default NavBar;