import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import '../../styles/Styles.css';
import FormEquipo from '../equipos/components/FormEquipo';



const Equipment = () => {
  return (
    <div className="Equipos">
          <NavBar/>
        <div className="mt-5 p-5 text-black"><h1>GESTION DE EQUIPOS</h1></div>
           <FormEquipo/>
        <div>
          <Footer/>
        </div>
    </div>
   )
}
export default Equipment;