import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import '../../styles/Styles.css';
import Form from '../terceros/components/Form';


const Terceros = () => {
    return (
      <div className="Terceros">
        <NavBar/>

        <div className="mt-5 p-5 text-black"><h1>TERCEROS</h1></div>
        <div>
          <Form/>
        </div>

        <Footer/>

        


      </div>
      
        
     
  
        
    )
}


export default Terceros;