import NavBar from '../../componentes/NavBar';
import Footer from '../../componentes/Footer';
import '../../estilos/Styles.css';
import ListarEquipos from './componentes/ListarEquipos';


const Equipos = () => {
    return (
        <div className= "Equipos">

            <NavBar/>

            <div className="mt-5 p-5 text-black mx-auto"><h1>EQUIPOS</h1></div>
            <div className=" ">           
            
            <ListarEquipos/>
            </div>

            
            <Footer/>
            

        </div>
        
    )
}

export default Equipos;