import React from 'react';
import '../../styles/Match.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from "react";
import { UserContext } from "../store/UserContext";
import { useEffect } from 'react';

const Match = () => {

    
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
                    fetch('http://127.0.0.1:5000/Matchpreview', {
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
    const getRandomAvatarUrl = () => {
        const randomNum = Math.floor(Math.random() * 1000);
        return `https://picsum.photos/200/300?random=${randomNum}`;
    };

    return (
        <div className="container-fluid match-view" style={{ marginTop: '50px' }}>
            <div className="header">
                <h1>¡Felicidades conseguiste un M4tch!</h1>
            </div>

            <div className="row gamers">
                <div className="col-6 gamer-card" style={{ width: '300px', height: '400px' }}>
                    <img src={getRandomAvatarUrl()} />
                    <h2>Jugador 1</h2>
                    <p>Intereses compartidos:</p>
                    <ul>
                        <li>Interés 1</li>
                        <li>Interés 2</li>
                        <li>Interés 3</li>
                    </ul>
                    <button className="btn btn-dark">
                        Ver perfil
                    </button>
                </div>

                <div className="col-6 gamer-card" style={{ width: '300px', height: '400px' }}>
                    <img src={getRandomAvatarUrl()} />
                    <h2>Jugador 2</h2>
                    <p>Intereses no compartidos:</p>
                    <ul>
                        <li>Interés 4</li>
                        <li>Interés 5</li>
                        <li>Interés 6</li>
                    </ul>
                    <button className="btn btn-dark">
                        Ver perfil
                    </button>
                </div>

                <div className='row'>
                    <div className='col-12'>
                        <p style={{ textAlign: 'center', fontSize: '24px', margin: '20px 0' }}>Vamos a jugar</p>
                        <button className="btn btn-dark" style={{ display: 'block', margin: '0 auto', width: '90px', height: '70px' }}>
                            <FontAwesomeIcon icon={faGamepad} size="3x" />
                        </button>
                    </div></div>


            </div>
        </div>
    );
};

export default Match;
