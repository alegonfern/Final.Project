import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [userName, setUserName] = useState('Nombre Usuario');
  const [userId, setUserId] = useState(null);
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
          return response.json(); // Parsea la respuesta JSON
        } else {
          console.error('Credenciales incorrectas');
          return false;
        }
      })
      .then(data => {
        if (data) {
          setIsLoggedIn(true);
          setUserId(data.user_id);
          const token = data.token;
          console.log('El inicio de sesión fue exitoso y el token es:', token, 'Id;', userId);
          localStorage.setItem('jwtToken', token);
          return true;
        } else {
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

  useEffect(() => {
    if (isLoggedIn) {
      // Realiza una solicitud al servidor para obtener las puntuaciones de compatibilidad
      fetch("http://127.0.0.1:5000/calcular_compatibilidad_entre_usuarios") // Ajusta la URL a tu endpoint
        .then(response => response.json())
        .then(data => {
          const userCompatibilityScores = data.compatibilidades.filter(score => score.usuario1_id === userId || score.usuario2_id === userId);
          setCompatibilityScores(userCompatibilityScores);
        })
        .catch(error => {
          console.error('Error al obtener las puntuaciones de compatibilidad', error);
        });
    }
  }, [isLoggedIn, userId]);


  return (
    <UserContext.Provider value={{ compatibilityScores, handleGoogleCallback, isLoggedIn, flogin, theme, toggleTheme, userName, setUserName, userId, updateUserPreferences }}>
      {children}
    </UserContext.Provider>
  );
};
