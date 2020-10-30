import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import Formulario from "./components/formulario/Formulario";
// import Productos from "./components/productos/Productos";
import Clientes from './components/clientes/Clientes';

export default function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Formulario</Link>
            </li>
            <li>
              <Link to="/productos">Productos</Link>
            </li>
            <li>
              <Link to="/clientes">Clientes</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/productos">
            <Clientes />
          </Route>
          <Route path="/clientes">
            <Productos />
          </Route> */}
          <Route path="/">
            <Clientes />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}