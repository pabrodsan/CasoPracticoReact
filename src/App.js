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

export default function App() {
  return (
    <Router>
      <div className={"cardBody"}>
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