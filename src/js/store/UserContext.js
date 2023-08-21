// src/UserContext.js
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  const url = "https://playground.4geeks.com/apis/fake/contact/agenda/ramira";

  const getOptions = {
    method: "GET",
    //body: JSON.stringify(),
    headers: {
      "Content-Type": "application/json"
    }
  };

  useEffect( () => {
    fetch(url, getOptions)
      .then(getResponse => {
        if (getResponse.status >= 200 && getResponse.status < 300) {
          console.log("GET: Agenda cargada exitosamente");
          return getResponse.json();        } else {
          console.log(`Error en la solicitud GET ${getResponse.status}`);
        }
      })
      .then(data => {
        setUserData(data); // Aquí asigno los datos al estado userData
              })
      .catch(error => {
        console.error("Error en la solicitud GET:", error);
      })
    }, []);

  

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
