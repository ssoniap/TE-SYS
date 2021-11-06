import '../../../styles/Styles.css';
import robot from '../../../assets/images/robot.png';


const Login = () => {
  return(
    <div className="LogIn p-3 mt-5 pb-md-4 mx-auto">
    <div className="cardLogIn">
      
      <div className="card-body">
        <h5 className="card-title-login">Te-Sys</h5>
        <img className="imagen-login" src={robot} alt="" width="80" height="80"></img>
      <p className="card-text-login">Tu asistente de mantenimiento técnico</p>
      </div>
      <div className="container">
      <div className="card-body mt-2">
        <form className="row g-3 needs-validation" novalidate>  
          <div className="mb-3 text-black">
            <label for="validationDefaultUsername" class="form-label">Usuario</label>                     
            <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required></input>
            
            
          </div>
          <div className="mb-3 text-black">
            <label for="validationDefaultUsername" class="form-label">Contraseña</label>
            <input type="password" className="form-control" id="validationDefaultPassword" aria-describedby="inputGroupPrepend2" required></input>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          
          <button type="submit" id="login" className="btn btn-success w-50 border-dark text-black active">Entrar</button>
          
          </div>
      </form>
      </div>
    </div>
    </div>
    </div>
    
    
  
    

    
  )
}

export default Login;
