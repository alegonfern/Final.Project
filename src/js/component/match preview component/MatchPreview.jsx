import '../../../styles/MatchPreview.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTimes, faDna } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../store/UserContext"

const MatchPreview = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const { isLoggedIn } = useContext(UserContext);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      const token = localStorage.getItem('jwtToken');
      console.log('Token JWT:', token);

      if (token) {
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

  const handleLike = () => {
    setLiked(true);
    setTimeout(() => setLiked(false), 1000);
  };

  const handleDislike = () => { 
    setDisliked(true);
    setTimeout(() => setDisliked(false), 1000);
  };

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (!data) {
    return <p>Error al cargar datos privados.</p>;
  }

return (
  <div className="container container-match">
    <div className="card profile-card">
      <img
        src="https://picsum.photos/150"
        className="card-img-top profile-image"
        alt="Profile"
      />
      <div className="card-body">
        <h5 className="card-title profile-name">{data.name}</h5>
        <p className="card-text profile-info">
          {data.age} años - {data.location}
        </p>
        <table className="table table-dark table-sm game-stats">
          <thead>
            <tr>
              <th scope="col">Género</th>
              <th scope="col">Juego</th>
            </tr>
          </thead>
          <tbody>
            {data.gameStats && Array.isArray(data.gameStats) && data.gameStats.map((stat) => (
              <tr key={stat.game}>
                <td>{stat.genre}</td>
                <td>{stat.game}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card-footer bg-transparent d-flex justify-content-around">
        <button className={`btn btn-danger ${disliked ? 'disliked' : ''}`} onClick={handleDislike}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <button className={`btn btn-success ${liked ? 'liked' : ''}`} onClick={handleLike}>
          <FontAwesomeIcon icon={faDna} />
        </button>
      </div>
    </div>
  </div>
);

// ...resto del código...

}
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDna } from '@fortawesome/free-solid-svg-icons';

const MatchPreview = ({ user, onClose }) => {
    const modalStyle = {
        // Estilos para el modal
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '999',
    };

    const contentStyle = {
        // Estilos para el contenido del modal
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    };

    const userInfoStyle = {
        // Estilos para la información del usuario
        flexGrow: '1',
        textAlign: 'center',
    };

    const dnaIconStyle = {
        // Estilos para el icono de DNA
        color: 'lime', // Verde fluor estilo gamer
        fontSize: '200px',
        display: 'block',
        textAlign: 'center',
    };

    const containerStyle = {
        // Estilos para el contenedor de foto, porcentaje y DNA
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const compatibilityStyle = {
        // Estilos para el porcentaje de compatibilidad
        fontSize: '24px', // Ajusta el tamaño del porcentaje
        marginTop: '10px', // Ajusta el margen superior
        marginBottom: '10px', // Ajusta el margen inferior
    };

    return (
        <div style={modalStyle} className="user-profile-modal">
            <div style={contentStyle} className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <div style={containerStyle}>
                    <h2>{user.NombreUsuario}</h2>
                    <img
                        src={user.AvatarUsuario}
                        alt={`Avatar de ${user.NombreUsuario}`}
                        style={{ height: '200px', width: '200px', objectFit: 'cover', borderRadius: '50%' }}
                    />
                    <p style={compatibilityStyle}>Compatibilidad: {user.PuntuacionCompatibilidad}</p>
                </div>
                <div style={dnaIconStyle} className="dna-icon">
                    <FontAwesomeIcon icon={faDna} />
                </div>
            </div>
        </div>
    );
};

export default MatchPreview;
