import { NavLink } from "react-router-dom";


const Footer = () =>{
    return(
        
        <div className="bg-dark p-1 navbar-fixed-bottom ">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><NavLink to="/" className="nav-link px-2 text-muted" activeClassName="text-withe" exact>Home</NavLink></li>
          <li className="nav-item"><NavLink to="/" className="nav-link px-2 text-muted">Features</NavLink></li>
          <li className="nav-item"><NavLink to="/" className="nav-link px-2 text-muted">Pricing</NavLink></li>
          <li className="nav-item"><NavLink to="/" className="nav-link px-2 text-muted">FAQs</NavLink></li>
          <li className="nav-item"><NavLink to="/" className="nav-link px-2 text-muted">About</NavLink></li>
        </ul>
        <p className="text-center text-muted">© 2021 Company, Inc</p>
      </div>
      
     
        
    )
}

export default Footer;
