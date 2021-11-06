import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/Styles.css';


const Usuarios = () => {
    return (
        <div className= "Usuarios">
            <NavBar/>   

            <div className="mt-5 p-5 text-black"><h1>USUARIO</h1></div>
            
            <Footer/>

        </div>
        
    )
}

export default Usuarios;