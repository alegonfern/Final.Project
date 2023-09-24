import React, { useEffect, useContext } from 'react';
import { UserContext } from "../../store/UserContext";
import { useLocation } from 'react-router-dom';

const GoogleCallback = () => {
    // Obtengo la ubicación actual de la URL
    const location = useLocation();

    // Accedo al contexto 'UserContext' para obtener 'handleGoogleCallback'
    const { handleGoogleCallback } = useContext(UserContext);


    useEffect(() => {
        // Crea un objeto para analizar los parámetros de la URL
        const urlSearchParams = new URLSearchParams(location.search);

        // Obtengo el valor del parámetro 'code' de la URL
        const code = urlSearchParams.get('code');

        if (code) {
            // Si se encuentra un 'code' en la URL, llamo a 'handleGoogleCallback' con él
            handleGoogleCallback(code);
        }
    }, [location.search, handleGoogleCallback]);

    // Muestro un mensaje en la interfaz de usuario mientras se procesa la respuesta de Google
    return <div>Procesando...</div>;
};

export default GoogleCallback;
