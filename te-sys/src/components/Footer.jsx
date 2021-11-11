import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo_white.png";

const Footer = () => {
  return (
    <div className="bg-dark p-1 navbar-fixed-bottom ">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <NavLink to="/usuario" className="nav-link px-2 text-muted">
            Usuario
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/terceros" className="nav-link px-2 text-muted">
            Terceros
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/equipos" className="nav-link px-2 text-muted">
            Equipos
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link px-2 text-muted">
            FAQs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link px-2 text-muted">
            About
          </NavLink>
        </li>
      </ul>
      <p className="text-center text-muted">
        <NavLink
          to="/"
          className="nav-lin text-muted"
          activeClassName="text-withe"
          exact
        >
          <img
            className="imagen justify-content-center"
            src={logo}
            alt=""
            width="90"
            height="40"
          ></img>
        </NavLink>
      </p>
      <p className="text-muted text-center">&copy;{new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
