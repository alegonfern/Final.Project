import React from 'react'
import GroupCard from './group component/GroupCard'
import GroupCarousel from './group component/GroupCarousel'
import PostList from './post components/PostList'
import NewsCarousel from './group component/NewsCarousel'
import { useContext, useState } from "react";
import { UserContext } from "../store/UserContext";
import { useEffect } from 'react';

const Group = () => {

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
                fetch('http://127.0.0.1:5000/Group', {
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
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 mt-5 pt-5'>
                    <GroupCard
                        imagen={'https://bitwares.net/wp-content/uploads/2021/08/Shooters-Gratuitos-Competitivos-Bitwares-735x400.jpg?crop=1'} />
                </div>
            </div>

            <div className="group-carousel-container mt-5 pt-5" style={{ width: "100%" }}>
                <GroupCarousel />
            </div>
            <div className='row'>
                <div className='col-lg-8 col-md-12'>
                    <PostList />
                </div>
                <div className='col-lg-4 col-md-12'>
                    <NewsCarousel/>
                </div>
            </div>
        </div >
    )
}

export default Group
