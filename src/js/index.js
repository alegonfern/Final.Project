//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { UserProvider } from "./store/UserContext";
// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Formulario from "./component/Formulario.jsx";

//render your react application
ReactDOM.render(<UserProvider>
    <Formulario />
  </UserProvider>, document.querySelector("#app"));
