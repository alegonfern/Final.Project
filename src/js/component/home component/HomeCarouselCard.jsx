import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';

const HomeCarouselCard = ({ AvatarGrupo, NombreGrupo }) => {
    return (
        <div className="card" style={{ border: '1px solid black', width: '80%', margin: '0.5%' }}>
            <div className="text-center">
                <img
                    style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                    src={AvatarGrupo}
                    className="img-fluid"
                    alt="Avatar del usuario"
                />
            </div>
            <div className="card-body d-flex justify-content-center flex-column align-items-center">
                <div>
                    <Link to="/Group" className="btn btn-dark mx-2">
                        <h5 className="text-center text-light">{NombreGrupo}</h5>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeCarouselCard;
