import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
// import Carousel from './components/Carousel';
// import Resume from './components/Resume';
import '../../styles/Styles.css';
import CrearUsuario from './components/createUser';
import ListaUsuarios from './components/listUser'; 


const Usuarios = () => {
    return (
        <div className= "Usuarios">
            <div className="mt-5 p-5 text-black">
                <h2>Lista de usuarios</h2>
            </div>
            <NavBar/>
            <CrearUsuario></CrearUsuario>
            <ListaUsuarios></ListaUsuarios>   
            <Footer/>

        </div>
        /* <div className= "Usuarios">
            <NavBar/>   
            
            <div className="row mt-5 p-5 text-black"><h1>USUARIO</h1></div>

            <div class="container-fluid" id="main-content">
                <div class="d-flexr">
                    <div class="row">
                        <div class="col-6 ms-3"><Carousel /></div>
                        <div class="col-3 container-fluid mt-5"><Resume/></div>
                    </div>
                </div>
            </div>          
            <Footer/>
        </div> */
        
    )
}

export default Usuarios;