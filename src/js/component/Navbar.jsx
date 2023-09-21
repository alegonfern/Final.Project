import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDna } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-secondary bg-secondary fixed-top"> {/* Cambio de clase a navbar-dark y color de fondo a bg-dark */}
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <FontAwesomeIcon icon={faDna} rotation={90} style={{ color: "#48CB86", fontSize: "3rem" }} className="icon" />
                </a>
                <div className="d-flex align-items-center"> {/* Cambio de clases para alinear elementos */}
                    <span className="navbar-text me-2 pe-2" style={{ fontSize: "1.5rem", color: "#fff" }} >Nombre Usuario</span>
                    <img src="https://picsum.photos/200" alt="User avatar" className="user-avatar rounded-circle" style={{ width: "3rem", height: "3rem", marginRight: "10px" }} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
