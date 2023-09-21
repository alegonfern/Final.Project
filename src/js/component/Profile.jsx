import React from 'react'
import Avatar from './profile component/Avatar'
import UserName from './profile component/UserName'
import UserBadges from './profile component/UserBadges'
import UserInterests from './profile component/UserInterests'
import RelatedGames from './profile component/RelatedGames'
import { useContext, useState } from "react";
import { UserContext } from "../store/UserContext";
import { useEffect } from 'react';

const Profile = () => {

    const userBadges = [
        { name: 'Registro exitoso', image: 'https://cdn-icons-png.flaticon.com/512/536/536056.png' },
        { name: 'Usuario activo', image: 'https://cdn-icons-png.flaticon.com/512/536/536056.png' },
    ];

    const userInterests = ['Acción', 'Aventura', 'Estrategia'];

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const { isLoggedIn } = useContext(UserContext);

    /* useEffect(() => {
        if (isLoggedIn) {
            // Leer el token del localStorage
            const token = localStorage.getItem('jwtToken');
            console.log('Token JWT:', token);

            if (token) {
                // Si el usuario está autenticado y hay un token en el localStorage, realiza una solicitud HTTP a una ruta privada
                fetch('http://127.0.0.1:5000/Calendar', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                    .then((response) => {
                        if (response.ok) {
                            return response.json();
                        } else {
                            throw new Error('Error al cargar datos privados.');
                        }
                    })
                    .then((data) => {
                        setData(data);
                        setIsLoading(false);
                    })
                    .catch((error) => {
                        console.error('Error al cargar datos privados:', error);
                        setIsLoading(false);
                    });
            } else {
                setIsLoading(false);
            }
        } else {
            setIsLoading(false);
        }
    }, [isLoggedIn]);

    if (isLoading) {
        return <p>Cargando...</p>;
    }

    if (!data) {
        return <p>Error al cargar datos privados.</p>;
    } */

    return (
        <div className="container-fluid pt-5">
            <div className='título my-3'><h1 style={{ fontSize: '60px' }}>Mi Perfil</h1></div>
            <div className="container border-top border-muted">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-4 d-flex flex-column align-items-start justify-content-center">
                        <Avatar />
                        <UserBadges badges={userBadges} />
                    </div>
                    <div className="col-12 col-lg-8 d-flex flex-column align-items-start justify-content-center">
                        <UserName />
                    </div>

                    <div className="col-12 col-lg-8 d-flex justify-content-center">
                        <div className="col-6">
                            <UserInterests interests={userInterests} />
                        </div>
                        <div className="col-6">
                            <RelatedGames genres={userInterests} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Profile
