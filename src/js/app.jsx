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
import PrivateRoute from "./component/PrivateRoute"

function App() {
  return (
    <UserProvider>
      <Router>

        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/Home" element={<PrivateRoute element={<Home />} />} />
          <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
          <Route path="/Group" element={<PrivateRoute element={<Group />} />} />
          <Route path="/Intereses" element={<PrivateRoute element={<Intereses />} />} />
          <Route path="/Matches" element={<PrivateRoute element={<Matches />} />} />
          <Route path="/Adn" element={<PrivateRoute element={<Adn />} />} />
          <Route path="/calendar" element={<PrivateRoute element={<MyCalendar />} />} />
          <Route path="/chat" element={<PrivateRoute element={<Chat />} />} />

        </Routes>

      </Router>
    </UserProvider>

  );
}
export default App;