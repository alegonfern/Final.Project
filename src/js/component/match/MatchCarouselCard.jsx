import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FaDna } from 'react-icons/fa';
import { UserContext } from '../../store/UserContext';

const MatchCarouselCard = ({ AvatarUsuario, NombreUsuario, receiveId, PuntuacionCompatibilidad }) => {
    const { userId } = useContext(UserContext);

    const handleClick = async (e) => {
        e.preventDefault();

        const postOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ senderId: userId, receiverId: receiveId, status: 'Pendiente' }),
        };

        fetch(`http://127.0.0.1:5000/friend-request`, postOptions)
            .then(response => {
                if (response.ok) {
                    console.log('Solicitud de amistad enviada con éxito');
                } else {
                    console.error('Error al enviar la solicitud de amistad');
                }
            })
            .catch((error) => {
                console.error('Error al enviar la solicitud', error);
            });
    };

    const linkTo = '/MatchPreview';

    return (
        <div className="card rounded text-center" style={{ width: "18rem", backgroundColor: 'rgba(0, 0, 0, 0)' }}>
            <a href={linkTo} data-toggle="modal" data-target="#myModal">
                <img
                    style={{ height: '100px', width: '100px', objectFit: 'cover', borderRadius: '50%' }}
                    src={AvatarUsuario}
                    className="img-fluid mt-3"
                    alt="Avatar del usuario"
                    data-toggle="modal"
                    data-target="#myModal"
                />
            </a>
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <div>
                    <h5 className="text-center">{NombreUsuario}</h5>
                    <h5 className="text-center">
                        {PuntuacionCompatibilidad}{' '}
                        <span style={{ fontSize: '24px' }}>
                            <FaDna />
                        </span>
                    </h5>
                </div>
                <div className="btn-group mt-2">
                    <button type="button" onClick={handleClick} className="btn mx-2">
                        <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MatchCarouselCard;
