import React, { useState, useEffect } from 'react';
import MatchCarouselCard from './MatchCarouselCard';

const MatchCarousel = () => {
    const [compatibilities, setCompatibilities] = useState([]);
    const [users, setUsers] = useState([]);
    const userId = sessionStorage.getItem('userId');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Primero, obtengo las compatibilidades
                const compatibilityResponse = await fetch(`http://127.0.0.1:5000/calcular_compatibilidad_entre_usuarios/${userId}`);
                if (compatibilityResponse.ok) {
                    const compatibilityData = await compatibilityResponse.json();
                    console.log("Tus Compatibilidades con el resto de los usuarios fueron calculadas.", compatibilityData);
                    // Luego, obtengo los datos de usuarios
                    const userResponse = await fetch('http://127.0.0.1:5000/users');
                    if (userResponse.ok) {
                        const userData = await userResponse.json();
                        setUsers(userData.users);
                        setCompatibilities(compatibilityData.compatibilidades);
                        console.log("Usuarios cargados con éxito", userData);
                        setIsLoading(false);
                    } else {
                        throw new Error('Error al obtener datos de usuarios');
                    }
                } else {
                    throw new Error('Error al obtener las compatibilidades');
                }
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };

        fetchData();

    }, [userId, setUsers, setCompatibilities, setIsLoading]);



    // Filtro los usuarios para excluir al usuario actual
    const filteredUsers = users.filter(user => user.id !== userId);

    function chunkArray(array, chunkSize) {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    }


    if (isLoading) { // Mostrar "Cargando..." mientras isLoading es verdadero
        return <div>Cargando...</div>;
    }

    if (compatibilities.length === 0 || users.length === 0) {
        return <div>No hay datos disponibles.</div>;
    }

    return (
        <div>
            <div id="groupCarousel" className="carousel slide border-0">
                <div className="carousel-inner">
                    {chunkArray(filteredUsers, 4).map((group, groupIndex) => (
                        <div className={`carousel-item ${groupIndex === 0 ? 'active' : ''} border-0`} key={groupIndex}>
                            <div className='carousel-card d-flex justify-content-between'>
                                {group.map((user, index) => {

                                    const compatibilityData = compatibilities.find(
                                        (compat) => compat.usuario2_id === user.id
                                    );
                                    const compatibilityPercentage = compatibilityData ? compatibilityData.compatibilidad : 'N/A';

                                    return (
                                        <MatchCarouselCard
                                            key={index}
                                            AvatarUsuario={user.url_avatar}
                                            NombreUsuario={`${user.first_name} ${user.last_name}`}
                                            PuntuacionCompatibilidad={compatibilityPercentage !== 'N/A' ? `${compatibilityPercentage}` : compatibilityPercentage}
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
