import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import App from "./App";
import "../styles/index.css";

//import your own components




//render your react application
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);
