import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [userName, setUserName] = useState('Nombre Usuario');
  const [userId, setUserId] = useState(null);
  const [error, setError] = useState(null);

  const [compatibilityScores, setCompatibilityScores] = useState([]);
  const [userPreferences, setUserPreferences] = useState({}); // Agrega el estado de preferencias de usuario

  const updateUserPreferences = (preferences) => {
    setUserPreferences(preferences);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);


  const flogin = (username, password) => {
    return new Promise((resolve, reject) => {
      fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Error en la solicitud.');
          }
        })
        .then(data => {
          console.log("Inicio exitoso, Token generado");
          const token = data.access_token;
          const userId = data.user_id;
          setUserId(userId);
          console.log("Este es el Token", token, " | Este es el ID de Usuario:", userId);
          sessionStorage.setItem('token', token);
          sessionStorage.setItem('userId', userId);


          resolve(true); // Resuelvo la promesa con true en caso de éxito
        })
        .catch(err => {
          console.error('Error en la solicitud:', err.message);
          setError('Error en la solicitud. Por favor, inténtalo de nuevo más tarde.');
          resolve(false); // Resuelvo la promesa con false en caso de error
        });
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

  const logout = () => {
    // Elimino el token de autenticación.
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');

  };

  return (
    <UserContext.Provider value={{ logout, compatibilityScores, handleGoogleCallback, flogin, theme, toggleTheme, userName, setUserName, userId, updateUserPreferences }}>
      {children}
    </UserContext.Provider>
  );
};
