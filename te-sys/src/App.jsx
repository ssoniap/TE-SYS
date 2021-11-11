import "../src/styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./paginas/home/Home";
import User from "./paginas/user/User";
import Terceros from "./paginas/terceros/Terceros";
import Equipment from "./paginas/equipos/Equipment";
import Failure from "./pages/Failure";
import Review from "./pages/Review";


function App() {
  return (
    <div className="App">
      <Router forceRefresh="true">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>        
          

          <Route exact path="/usuario">
            <User />
          </Route>

          <Route exact path="/equipos">
            <Equipment />
          </Route>

          <Route exact path="/terceros">
            <Terceros />
          </Route>

          <Route exact path="/failure">
            <Failure />
          </Route>

          <Route exact path="/review">
            <Review />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
