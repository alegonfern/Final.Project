//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { UserProvider } from "./store/UserContext";
// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Formulario from "./component/Formulario.jsx";
import Contacto from "./component/Contacto.jsx";

//render your react application
ReactDOM.render(<UserProvider>
    <Formulario />
    <Contacto />
  </UserProvider>, document.querySelector("#app"));
