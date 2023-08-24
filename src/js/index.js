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
import CharacterDetail from "./component/CharacterDetail";
import PlanetDetail from "./component/PlanetDetail";

//render your react application
ReactDOM.render(<>
<UserProvider>
  <Navbar />
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail_character/:characterId" element={<CharacterDetail />} />
        <Route path="/detail_planet/:planetId" element={<PlanetDetail />} />

      </Routes>
    </Router>
  </UserProvider>
</>,
  document.querySelector('#app')
);
