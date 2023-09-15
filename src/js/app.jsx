import React from "react";
import ReactDOM from "react-dom";
import { UserProvider } from "./store/UserContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
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
import MatchPreview from './component/match preview component/MatchPreview';
import Sidebar from './component/Sidebar';
import Contacts from "./component/contact list/Contacts";
import Navbar from "./component/Navbar";
import { Calendar } from "react-big-calendar";
import MyCalendar from "./component/Calendar";
import Chat from "./component/Chat";
import PrivateRoute from "./component/PrivateRoute";
import { UserContext } from "./store/UserContext";
import { useContext } from "react";


function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="*" element={
            <>
              <Navbar />
              <div className="app" style={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>
                <div>
                  <Sidebar />
                </div>
                <div className="content" style={{ paddingLeft: '16px', paddingRight: '16px' }}>
                  <Routes>
                    <Route path="/login_google" element={<GoogleCallback />} />
                    <Route path="/Intereses" element={<Intereses />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Group" element={<Group />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/match" element={<Match />} />
                    <Route path="/Google" element={<Google_test />} />
                    <Route path="/MatchPreview" element={<MatchPreview />} />
                    <Route path="/Contacts" element={<Contacts />} />
                    <Route path="/calendar" element={<MyCalendar />} />
                    <Route path="/chat" element={<Chat />} />
                  </Routes>
                </div>
              </div>
            </>
          } />
        </Routes>
      </Router>
    </UserProvider>
  );
}
export default App;