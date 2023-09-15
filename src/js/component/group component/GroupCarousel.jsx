import React, { useState, useEffect } from 'react';
import CarouselCard from './CarouselCard';

const GroupCarousel = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchRandomUsers = async () => {
            try {
                const response = await fetch('https://randomuser.me/api/?results=20');
                if (response.ok) {
                    const data = await response.json();
                    const randomUsers = data.results.map((result) => {
                        return {
                            AvatarUsuario: result.picture.large,
                            NombreUsuario: `${result.name.first} ${result.name.last}`,
                        };
                    });
                    setUsers(randomUsers);
                } else {
                    throw new Error('Error al obtener datos de la API');
                }
            } catch (error) {
                console.error('Error al obtener usuarios aleatorios:', error);
            }
        };

        fetchRandomUsers();
    }, []);

    return (
        <div className='box my-4'>
            <div id="groupCarousel" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='carousel-card d-flex justify-content-between'>
                            {users.slice(0, 10).map((user, index) => (
                                <CarouselCard
                                    key={index}
                                    AvatarUsuario={user.AvatarUsuario}
                                    NombreUsuario={user.NombreUsuario}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='carousel-card d-flex justify-content-between'>
                            {users.slice(10).map((user, index) => (
                                <CarouselCard
                                    key={index}
                                    AvatarUsuario={user.AvatarUsuario}
                                    NombreUsuario={user.NombreUsuario}
                                />
                            ))}
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
