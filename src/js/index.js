import React from "react";
import ReactDOM from "react-dom";
import { UserProvider } from "./store/UserContext";

// include your styles into the webpack bundle
import App from "./app";
import "../styles/index.css";

//import your own components




//render your react application
ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('app')
);
