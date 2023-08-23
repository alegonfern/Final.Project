import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [charactersData, setCharactersData] = useState([]);

  const getCharacters=() => {
    const url = "https://www.swapi.tech/api/people/";
  
    const getOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
      fetch(url, getOptions)
        .then(getResponse => {
          if (getResponse.status >= 200 && getResponse.status < 300) {
            console.log("GET: Characters cargados exitosamente");
            return getResponse.json();
          } else {
            console.log(`Error en la solicitud GET ${getResponse.status}`);
          }
        })
        .then(data => {
          if (Array.isArray(data.results)) {
            setCharactersData(data.results);
          } else {
            console.log("Error: Data.results no es un array.");
          }
        })
        .catch(error => {
          console.error("Error en la solicitud GET:", error);
        });
    };





  const getagenda=() => {
  const url = "https://playground.4geeks.com/apis/fake/contact/agenda/juana";

  const getOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };
    fetch(url, getOptions)
      .then(getResponse => {
        if (getResponse.status >= 200 && getResponse.status < 300) {
          console.log("GET: Agenda cargada exitosamente");
          return getResponse.json();
        } else {
          console.log(`Error en la solicitud GET ${getResponse.status}`);
        }
      })
      .then(data => {
        setUserData(data);
      })
      .catch(error => {
        console.error("Error en la solicitud GET:", error);
      });
  };

  const updateUserContact = (updatedContact) => {
    console.log("userData actualizado en contexto:", updatedContact);
    const updatedUserData = userData.map(contact =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    setUserData(updatedUserData);
  };

  const addNewUserContact = (newContact) => {
    
    setUserData([...userData, newContact]);
  };

  return (
    <UserContext.Provider value={{charactersData,setCharactersData,getCharacters, userData, setUserData, updateUserContact, addNewUserContact, getagenda }}>
      {children}
    </UserContext.Provider>
  );
};
