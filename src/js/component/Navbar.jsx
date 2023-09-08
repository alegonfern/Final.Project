import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDna } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <FontAwesomeIcon icon={faDna} rotation={90} style={{ color: "#05ff09", fontSize: "3rem" }} className="icon" />
                </a>
                <div className="d-flex ms-auto">
                    <span className="navbar-text me-2" style={{ fontSize: "25px" }} >Nombre Usuario</span>
                    <img src="https://picsum.photos/200" alt="User avatar" className="user-avatar rounded-circle" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
