//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { UserProvider } from "./store/UserContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// include your styles into the webpack bundle
import "../styles/index.css";
import '../styles/Profile.css'


//import your own components

//import Navbar from "./component/Navbar";
import Home from "./component/Home";
import CharacterDetail from "./component/CharacterDetail";
import PlanetDetail from "./component/PlanetDetail";
import Footer from "./component/Footer";
import Sidebar from "./component/Sidebar";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Profile from "./component/Profile";

//render your react application
ReactDOM.render(<>
  <UserProvider>
    <Login />
    <Router>
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/detail_character/" element={<CharacterDetail />} />
        <Route path="/detail_planet/:planetId" element={<PlanetDetail />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>

  </UserProvider>
</>,
  document.querySelector('#app')
);
