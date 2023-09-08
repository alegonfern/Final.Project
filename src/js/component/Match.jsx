import React from 'react';
import '../../styles/Match.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Match = () => {
    // Genera URLs aleatorias para las imágenes de avatar (simula imágenes aleatorias)
    const getRandomAvatarUrl = () => {
        const randomNum = Math.floor(Math.random() * 1000);
        return `https://picsum.photos/200/300?random=${randomNum}`;
    };

    return (
        <div className="match-view">
            <div className="header">
                <h1>¡Match!</h1>
                <div className="avatars">
                    <img src={getRandomAvatarUrl()} />
                    <img src={getRandomAvatarUrl()} />
                </div>
            </div>
            <div className="gamers">
                <div className="gamer-card">
                    <img src={getRandomAvatarUrl()} />
                    <h2>Nombre 1</h2>
                    <p>XXXXX</p>
                    <button className="btn btn-primary">
                        <FontAwesomeIcon icon={faEnvelope} /> Enviar mensaje
                    </button>
                    <button className="btn btn-success">
                        <FontAwesomeIcon icon={faUserPlus} /> Agregar como amigo
                    </button>
                </div>
                <div className="gamer-card">
                    <img src={getRandomAvatarUrl()} />
                    <h2>Nombre 2</h2>
                    <p>xxxxxxxx</p>
                    <button className="btn btn-primary">
                        <FontAwesomeIcon icon={faEnvelope} /> Enviar mensaje
                    </button>
                    <button className="btn btn-success">
                        <FontAwesomeIcon icon={faUserPlus} /> Agregar como amigo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Match;
