import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
// import Carousel from './components/Carousel';
// import Resume from './components/Resume';
import '../../styles/Styles.css';
import CrearUsuario from './components/createUser';
import ListaUsuarios from './components/listUser'; 
import "./components/user.css";


const Usuarios = () => {
    return (
        <div>
            <NavBar/>
            <div className="mt-5 pt-5">
                <h2>USUARIOS</h2>
            </div>
            <CrearUsuario />
            <ListaUsuarios />  
            <Footer/>
        </div>
    )
}

export default Usuarios;