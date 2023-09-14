import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { UserContext } from '../store/UserContext';

function PrivateRoute({ element, ...rest }) {
    const { isLoggedIn } = useContext(UserContext);

    return (
        <Route
            {...rest}
            element={isLoggedIn ? element : <Navigate to="/login" />}
        />
    );
}

export default PrivateRoute;
