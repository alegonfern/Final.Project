import React from 'react'
import HomeGroupCarousel from "./home component/HomeGroupCarousel"
import PostList from './post components/PostList';
import ProfileCard from './ProfileCard';
import { useContext, useState } from "react";
import { UserContext } from "../store/UserContext";
import { useEffect } from 'react';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const { isLoggedIn } = useContext(UserContext);

    useEffect(() => {
        if (isLoggedIn) {
            // Leer el token del localStorage
            const token = localStorage.getItem('jwtToken');
            console.log('Token JWT:', token);

            if (token) {
                // Si el usuario está autenticado y hay un token en el localStorage, realiza una solicitud HTTP a una ruta privada
                fetch('http://127.0.0.1:5000/Home', {
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
    }

    return (
        <div className="container-fluid mt-4 pt-5"> {/* Agregué un padding-top aquí */}
            <div className="container border-top border-muted my-5">
                <div className="row">
                    <div className="col-12 order-1 order-md-1">
                        <ProfileCard />
                    </div>
                    <div className="col-12 order-2 order-md-2 d-flex flex-column">
                        <HomeGroupCarousel className="order-1 flex-grow-1 w-100 mt-3" />
                    </div>
                    <div className="col-12 order-3 order-md-3">
                        <div className='post-container'>
                            <h3>Bitácora</h3>
                            <PostList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Home;