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
import Navbar from "./component/Navbar";
import Home from "./component/Home";

//render your react application
ReactDOM.render(<>
  <Navbar/>
  <UserProvider>
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
         <Route path="/NewContact" element={<Formulario />} />
        <Route path="/EditContact/:id" element={<Formulario />} />
      </Routes>
    </Router>
  </UserProvider>
  </>,
  document.querySelector('#app')
);
