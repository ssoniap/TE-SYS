import '../src/estilos/App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Inicio from './paginas/inicio/Inicio';
import Usuario from './paginas/Usuario';
import Terceros from './paginas/Terceros';
import Equipos from './paginas/equipos/Equipos';
import Failure from './pages/Failure';
import Review from './pages/Review';

function App() {
  return (
    <div className="App">      
      <Router>
        
        <Switch>
          <Route exact path="/">
            <Inicio/>

          </Route>

          <Route exact path="/usuario">
            <Usuario/>
            
          </Route>

          <Route exact path="/equipos">
            <Equipos/>
            
          </Route>

          <Route exact path="/terceros">
            <Terceros/>
            
          </Route>

          <Route exact path="/failure">
            <Failure/>
          </Route>

          <Route exact path="/review">
            <Review/>
          </Route>


        </Switch>
        

      </Router>
      
    </div>
  );
}

export default App;
