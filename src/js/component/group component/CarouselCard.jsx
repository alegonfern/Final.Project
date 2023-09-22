import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../store/UserContext';
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaDna } from 'react-icons/fa';


const CarouselCard = ({ AvatarUsuario, NombreUsuario, receiveId, PuntuacionCompatibilidad }) => {

    const { userId } = useContext(UserContext);

    const handleClick = async (e) => {
        e.preventDefault();

        const postOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ senderId: userId, receiverId: receiveId, status: 'Pendiente' }), // Agregar User ID de la sesion y poblar BBDD
        };

        fetch(`http://127.0.0.1:5000/friend-request`, postOptions)
            .then(response => {
                if (response.ok) {
                    // Creación de solicitud de amistad exitosa
                    console.log('Solicitud de amistad enviada con éxito');
                } else {
                    // Error al enviar la solicitud
                    console.error('Error al enviar la solicitud de amistad');
                }
            })
            .catch((error) => {
                console.error('Error al enviar la solicitud', error);
            });
    };

    const linkTo = '/MatchPreview';

    return (
        <div className="card" style={{ border: 'none', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
            <div className="text-center">
                <Link to={linkTo}>
                    <img
                        style={{ height: '100px', width: '100px', objectFit: 'cover', borderRadius: '50%' }}
                        src={AvatarUsuario}
                        className="img-fluid"
                        alt="Avatar del usuario"
                    />
                </Link>
            </div>
            <div className="card-body d-flex justify-content-center flex-column align-items-center">
                <div>
                    <h5 className="text-center">{NombreUsuario}</h5>
                    <h5 className="text-center">
                        {PuntuacionCompatibilidad}{' '}
                        <span style={{ fontSize: '24px' }}>
                            <FaDna />
                        </span>
                    </h5>
                </div>
                <div className="btn-group">
                    <button type="button" onClick={handleClick} className="btn mx-2">
                        <AiOutlineClose style={{ color: 'red' }} />
                    </button>
                    <button type="button" onClick={handleClick} className="btn mx-2">
                        <AiOutlineCheck style={{ color: 'green' }} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CarouselCard;
