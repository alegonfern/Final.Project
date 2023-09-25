import React from "react";
import { UserProvider } from "./store/UserContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Login from "./component/Login";
import Signup from "./component/Signup";
import Home from "./component/home/Home";
import Group from "./component/group/Group";
import Profile from "./component/profile/Profile";
import Intereses from './component/interests/Intereses';
import Matches from "./component/matches/Matches";
import Chat from "./component/chat/Chat";
import Adn from "./component/adn/adn";

import Sidebar from './component/Sidebar';

import GoogleCallback from './component/google auth/GoogleCallback';
import Google_test from "./component/test component Google/Google_test";
import Match from './component/Match';
import MatchPreview from './component/match preview component/MatchPreview';
import MyCalendar from "./component/Calendar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="*" element={
            <>
              <div>
                <Sidebar />
              </div>
              <div className="content" >
                <Routes>
                  <Route path="/Home" element={<Home />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/Group" element={<Group />} />
                  <Route path="/Intereses" element={<Intereses />} />
                  <Route path="/Matches" element={<Matches />} />
                  <Route path="/Adn" element={<Adn/>} />


                  <Route path="/login_google" element={<GoogleCallback />} />
                  <Route path="/MatchPreview" element={<MatchPreview />} />
                  <Route path="/match" element={<Match />} />
                  <Route path="/Google" element={<Google_test />} />
                  <Route path="/calendar" element={<MyCalendar />} />
                  <Route path="/chat" element={<Chat />} />

                </Routes>

              </div>
            </>
          } />
        </Routes>
      </Router>
    </UserProvider>
  );
}
export default App;