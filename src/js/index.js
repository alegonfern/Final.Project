//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { UserProvider } from "./store/UserContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// include your styles into the webpack bundle
import "../styles/index.css";


//import your own components
import Formulario from "./component/Formulario.jsx";
import Contacto from "./component/Contacto.jsx";

//render your react application
ReactDOM.render(
  <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Contacto />} />
        <Route path="/NewContact" element={<Formulario />} />
      </Routes>
    </Router>
  </UserProvider>,
  document.querySelector('#app')
);
