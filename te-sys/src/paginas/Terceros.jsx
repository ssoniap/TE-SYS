import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../estilos/Styles.css';


const Terceros = () => {
    return (
        <div className= "Terceros">
        <div className="mt-5 p-5 text-black"><h1>TERCEROS</h1></div>
        <form>
        <div className="container-fluid"> 
        <div class="row">
            <div className="form-group">
    <label htmlfor="exampleFormControlSelect2">
    Tipo de identificacion</label>
    <select classNamer="form-control form-control-lg">
      <option>CC</option>
      <option>CE</option>
      <option>TI</option>
      <option>NIT</option>
    </select>
    
  </div>
  
  <div class="form-group">
        <label htmlfor="exampleFormControlInput1">Nombres</label>
        <input type="email"
        className="form-control"
        id="exampleFormControlInput1" 
        laceholder="name@example.com"></input>
    </div>
  <div class="form-group">
        <label htmlfor="exampleFormControlInput1">Apellidos</label>
        <input type="email"
        className="form-control"
        id="exampleFormControlInput1" 
        laceholder="name@example.com"></input>
    <div>
    </div>
    <div class="form-group">
        <label htmlfor="exampleFormControlInput1">Direccion</label>
        <input type="email"
        className="form-control"
        id="exampleFormControlInput1" 
        laceholder="name@example.com"></input>
        </div>
        <div class="form-group">
        <label htmlfor="exampleFormControlInput1">Ciudad</label>
        <input type="email"
        className="form-control"
        id="exampleFormControlInput1" 
        laceholder="name@example.com"></input>
        </div>
  <div class="form-group">
    <label htmlfor="exampleFormControlInput1">Correo electronico</label>
    <input type="email"
    className="form-control"
    id="exampleFormControlInput1" 
    laceholder="name@example.com"></input>
    </div>
    <div class="form-group">
    <label htmlfor="exampleFormControlInput1">Telefono Contacto</label>
    <input type="email"
    className="form-control"
    id="exampleFormControlInput1" 
    laceholder="name@example.com"></input>
    <button type="button" className="btn btn-primary">Guardar</button>
    <button type="button" className="btn btn-primary">Eliminar</button>
  </div>
  </div>
        </div>
        
  </div>
  
  
  
  
 
  
</form>
            <NavBar/>
            {/* <Footer/> */}

        </div>
        
    )
}


export default Terceros;