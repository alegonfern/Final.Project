import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { UserContext } from '../store/UserContext'; // Importa el contexto

function PrivateRoute({ element, ...rest }) {
    const { isLoggedIn } = useContext(UserContext); // Obtiene el estado de autenticación desde el contexto
    console.log(isLoggedIn)
    return isLoggedIn ? <Route {...rest} element={element} /> : <Navigate to="/login" />;
}

export default PrivateRoute;