import React, { useState } from 'react';
import '../../styles/MatchPreview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTimes, faDna } from '@fortawesome/free-solid-svg-icons';

const MatchPreview = () => {
  const [liked, setLiked] = useState(false);
  const name = "Nombre del usuario";
  const age = 25;
  const location = "Santiago, Chile";
  const gameStats = [
    { genre: 'Acción', game: 'Juego 1' },
    { genre: 'Estrategia', game: 'Juego 2' },
  ];

  const handleLike = () => {
    setLiked(true);
    setTimeout(() => setLiked(false), 1000);
  };

  return (
    <div className="container">
      <div className="card profile-card">
        <img
          src="https://picsum.photos/150"
          className="card-img-top profile-image"
          alt="Profile"
        />
        <div className="card-body">
          <h5 className="card-title profile-name">{name}</h5>
          <p className="card-text profile-info">
            {age} años - {location}
          </p>
          <table className="table table-dark table-sm game-stats">
            <thead>
              <tr>
                <th scope="col">Género</th>
                <th scope="col">Juego</th>
              </tr>
            </thead>
            <tbody>
              {gameStats.map((stat) => (
                <tr key={stat.game}>
                  <td>{stat.genre}</td>
                  <td>{stat.game}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card-footer bg-transparent d-flex justify-content-around">
          <button className="btn btn-danger">
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <button className="btn btn-success" onClick={handleLike}>
            <FontAwesomeIcon icon={faDna} />
          </button>
        </div>
        {liked && (
          <div className="dna-animation">
            <FontAwesomeIcon icon={faDna} size="4x" />
          </div>
        )}
      </div>
    </div>
  );
};


export default MatchPreview;
