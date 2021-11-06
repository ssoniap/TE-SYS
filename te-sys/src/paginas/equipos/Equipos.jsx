import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import '../../styles/Styles.css';
import ListarEquipos from './componentes/ListarEquipos';


const Equipos = () => {
    return (
        <div className= "Equipos">

            <NavBar/>

            <div className="mt-5 p-5 text-black"><h1>EQUIPOS</h1></div>
            <div className=" ">           
            
            <ListarEquipos/>
            
            </div>

            
            <Footer/>
            

        </div>
        
    )
}

export default Equipos;