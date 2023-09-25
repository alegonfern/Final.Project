import React, { useState, useEffect } from 'react';
import { useContext } from "react";
import { UserContext } from "../../store/UserContext";
import MatchCarouselCard from './MatchCarouselCard';

const MatchCarousel = () => {
    const { compatibilityScores, userId } = useContext(UserContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/users'); // Utiliza la URL correcta de tu servidor
                if (response.ok) {
                    const data = await response.json();
                    // Asumiendo que tu servidor devuelve datos en el formato esperado
                    setUsers(data.users);
                } else {
                    throw new Error('Error al obtener datos de usuarios');
                }
            } catch (error) {
                console.error('Error al obtener usuarios:', error);
            }
        };

        fetchUserData();
    }, []);

    // Filtra los usuarios para excluir al usuario actual
    const filteredUsers = users.filter(user => user.id !== userId);

    function chunkArray(array, chunkSize) {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    }

    return (
        <div>
            {/* Agrega el contenido del carrusel aquí */}
            <div id="groupCarousel" className="carousel slide border-0">
                <div className="carousel-inner">
                    {chunkArray(filteredUsers, 4).map((group, groupIndex) => (
                        <div className={`carousel-item ${groupIndex === 0 ? 'active' : ''} border-0`} key={groupIndex}>
                            <div className='carousel-card d-flex justify-content-between'>
                                {group.map((user, index) => {
                                    const compatibilityScore = compatibilityScores.find(score => {
                                        return (score.usuario1_id === userId && score.usuario2_id === user.id) ||
                                            (score.usuario1_id === user.id && score.usuario2_id === userId);
                                    });

                                    return (
                                        <MatchCarouselCard
                                            key={index}
                                            AvatarUsuario={user.url_avatar}
                                            NombreUsuario={`${user.first_name} ${user.last_name}`}
                                            PuntuacionCompatibilidad={compatibilityScore ? compatibilityScore.compatibilidad : 0}
                                            receiveId={user.id}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                <button className="carousel-control-prev btn btn-dark" type="button" data-bs-target="#groupCarousel" data-bs-slide="prev" style={{ position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%)', height: "40px", width: "40px" }}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next btn btn-dark" type="button" data-bs-target="#groupCarousel" data-bs-slide="next" style={{ position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)', height: "40px", width: "40px" }}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default MatchCarousel;
