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
import Intereses from './component/Intereses';
import Match from './component/Match';
import MatchPreview from './component/MatchPreview';
import Sidebar from './component/Sidebar';
import Contacts from "./component/contact list/Contacts";
import Navbar from "./component/NavBar";


function App() {

  return (
    <UserProvider>
      <Router>
        <div style={{ position: 'relative' }}>
          <Navbar />
          <div className="app" style={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>
            <div>
              <Sidebar />
            </div>
            <div className="content" style={{ paddingLeft: '16px', paddingRight: '16px' }}>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/login_google" element={<GoogleCallback />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Intereses" element={<Intereses />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Group" element={<Group />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/match" element={<Match />} />
                <Route path="/Google" element={<Google_test />} />
                <Route path="/MatchPreview" element={<MatchPreview />} />
                <Route path="/Contacts" element={<Contacts />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </UserProvider>
  );
}
export default App
