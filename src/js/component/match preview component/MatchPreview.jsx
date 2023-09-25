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
