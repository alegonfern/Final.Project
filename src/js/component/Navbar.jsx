import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <FontAwesomeIcon icon={faGamepad} className="icon" />
        <div className="user-info">
          <img src= "https://picsum.photos/200" alt="User avatar" className="user-avatar" />
          <span className="username">Nombre Usuario</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;