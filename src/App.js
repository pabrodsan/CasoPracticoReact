import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Formulario from "./components/form/Form";
import Customer from "./components/customer/Customer";
import './App.scss'
import Product from "./components/product/Product";
import NavBar from "./components/commons/NavBar";

export default function App() {
  return (
    <Router>
      <NavBar/>
      <div className={"switch"}>
        <Switch>
          <Route path="/customers">
            <Customer />
          </Route>
          <Route path="/products">
            <Product />
          </Route>
          <Route path="/">
            <Formulario />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}