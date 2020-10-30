import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Formulario from "./components/formulario/Formulario";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
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
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/productos">
            <Productos />
          </Route>
          <Route path="/clientes">
            <Clientes />
          </Route>
          <Route path="/">
            <Formulario />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Clientes() {
  return <h2>Clientes</h2>;
}

function Productos() {
  return <h2>Productos</h2>;
}
