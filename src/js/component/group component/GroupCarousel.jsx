import React, { useState, useEffect } from 'react';
import CarouselCard from './CarouselCard';
import { useContext } from "react";
import { UserContext } from "../../store/UserContext";

const GroupCarousel = () => {
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

    return (
        <div className='box my-4'>
            <div id="groupCarousel" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='carousel-card d-flex justify-content-between'>
                            {filteredUsers.slice(0, 10).map((user, index) => {
                                // Buscar la puntuación de compatibilidad del usuario actual
                                const compatibilityScore = compatibilityScores.find(score => {
                                    return (score.usuario1_id === userId && score.usuario2_id === user.id) ||
                                        (score.usuario1_id === user.id && score.usuario2_id === userId);
                                });

                                return (
                                    <CarouselCard
                                        key={index}
                                        AvatarUsuario={user.url_avatar} // Asegúrate de que el nombre de la propiedad sea correcto
                                        NombreUsuario={`${user.first_name} ${user.last_name}`} // Concatenación de first_name y last_name
                                        PuntuacionCompatibilidad={compatibilityScore ? compatibilityScore.compatibilidad : 0} // Ajusta el nombre de la propiedad de puntuación según tu contexto
                                        receiveId={user.id}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='carousel-card d-flex justify-content-between'>
                            {filteredUsers.slice(10).map((user, index) => {
                                // Buscar la puntuación de compatibilidad del usuario actual
                                const compatibilityScore = compatibilityScores.find(score => {
                                    return (score.usuario1_id === userId && score.usuario2_id === user.id) ||
                                        (score.usuario1_id === user.id && score.usuario2_id === userId);
                                });

                                return (
                                    <CarouselCard
                                        key={index}
                                        AvatarUsuario={user.url_avatar} // Asegúrate de que el nombre de la propiedad sea correcto
                                        NombreUsuario={`${user.first_name} ${user.last_name}`} // Concatenación de first_name y last_name
                                        PuntuacionCompatibilidad={compatibilityScore ? compatibilityScore.compatibilidad : 0} // Ajusta el nombre de la propiedad de puntuación según tu contexto
                                        receiveId={user.id}
                                    />
                                );
                            })}
                        </div>
                    </div>
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

export default GroupCarousel;
