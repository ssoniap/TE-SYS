import '../../../estilos/Styles.css';
import robot from '../../../estilos/img/robot.png';

const Login = () => {
  return(
    <div className="LogIn p-3 mt-5 pb-md-4 mx-auto">
    <div className="cardLogIn">
      
      <div className="card-body">
        <h5 className="card-title-login">Te-Sys</h5>
        <img className="imagen-login" src={robot} alt="" width="80" height="80"></img>
      <p className="card-text-login">Tu asistente de mantenimiento técnico</p>
      </div>

      <div className="card-body mt-2">
        <form>
          <div className="mb-3 text-black">
            <label htmlfor="exampleInputEmail1" className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
            
          </div>
          <div className="mb-3 text-black">
            <label htmlfor="exampleInputPassword1" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="exampleInputPassword1"></input>
          </div>
          
          <button type="submit" className="btn btn-secondary border-dark text-black">Entrar</button>
      </form>
      </div>
    </div>
    </div>
    
    
  
    

    
  )
}

export default Login;
