import React, { createContext, useEffect, useState } from 'react';



export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const flogin = (username, password) => {
    const url = "http://127.0.0.1:5000/login";

    const postOptions = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }

    return fetch(url, postOptions)
      .then(response => {
        if (response.ok) {
          setIsLoggedIn(true);
          return true;
        } else {
          console.error('Credenciales incorrectas');
          return false;
        }
      })
      .catch((error) => {
        console.error('Error al enviar la solicitud', error);
        return false;
      });
  };

  const handleGoogleCallback = async (code) => {
    const key = 'AIzaSyDvHtJsPXyQX7k91Ppo4GSvms0gt0HlXJw';
    const tokenRequestUrl = 'https://accounts.google.com/o/oauth2/token';

    const tokenRequestBody = {
      code: key,
      client_id: '538564562238-jsduha69drfedvhe9kmhqos83nrsm8ga.apps.googleusercontent.com',
      client_secret: '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',
      redirect_uri: 'http://127.0.0.1:5000/login',
      grant_type: authorization_code,
    };

    // Realizo una solicitud POST para obtener el token de acceso
    fetch(tokenRequestUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tokenRequestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        // Aquí obtengo el token de acceso de Google
        const accessToken = data.access_token;
        // Utilizo el token de acceso para autenticar al usuario en tu aplicación
      })
      .catch((error) => {
        console.error('Error al obtener el token de acceso de Google', error);
      });
  }


  return (
    <UserContext.Provider value={{ handleGoogleCallback, isLoggedIn, flogin, theme, toggleTheme }}>
      {children}
    </UserContext.Provider>
  );
};
