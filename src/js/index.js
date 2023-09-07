//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { UserProvider } from "./store/UserContext";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// include your styles into the webpack bundle
import "../styles/index.css";
import '../styles/Profile.css';

//import your own components

import Home from "./component/Home";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Profile from "./component/Profile";
import Group from './component/Group';
import GoogleCallback from './component/GoogleCallback';
import Google_test from "./component/test component/Google_test";

//render your react application
ReactDOM.render(<>
  <UserProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/login_google" element={<GoogleCallback />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Group" element={<Group />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Google" element={<Google_test />} />
      </Routes>
    </Router>
  </UserProvider>
</>,
  document.querySelector('#app')
);
