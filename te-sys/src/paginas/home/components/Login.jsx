import '../../../styles/Styles.css';
import logo from '../../../assets/images/logo_black.png';


const Login = () => {
  return(
    <div className="LogIn p-3 mt-5 pb-md-4 mx-auto">
    <div className="cardLogIn">
      
      <div className="card-body">
        
        <img className="avatar" src={logo} alt="" width="150" height="80"></img>
        
      
      </div>
      <div className="container-logIn">
      <div className="card-title-login text-light">Bienvenido</div>
      <div className="card-text-login text-light">Iniciar sesión</div>
      <div className="card-body mt-2">
        <form className="row g-3 needs-validation" novalidate>  
          <div className="mb-3 text-black">
            <label for="validationDefaultUsername" class="form-label text-light">Usuario</label>                     
            <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required></input>
            
            
          </div>
          <div className="mb-3 text-black">
            <label for="validationDefaultUsername" class="form-label text-light">Contraseña</label>
            <input type="password" className="form-control" id="validationDefaultPassword" aria-describedby="inputGroupPrepend2" required></input>
          </div>
          <div class="boton-login d-grid gap-2 d-md-flex justify-content-md-end">          
          <button type="submit" id="login" className="btn btn-primary w-50 border-primary text-light fw-light">Entrar</button>          
          </div>
      </form>
      </div>
    </div>
    </div>
    </div>
    
    
  
    

    
  )
}

export default Login;