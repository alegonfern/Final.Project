import React, { useContext, useState, useEffect } from "react";
import '../../styles/Sidebar.css';
import { UserContext } from "../store/UserContext";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faComments, faList, faUserFriends, faBell, faHouse } from '@fortawesome/free-solid-svg-icons';
import { faDna } from '@fortawesome/free-solid-svg-icons';




function Sidebar() {
    const { theme, toggleTheme } = useContext(UserContext);
    const [checked, setChecked] = useState(theme === 'dark');

    useEffect(() => {
        setChecked(theme === 'dark');
    }, [theme]);

    const handleChange = () => {
        setChecked(!checked);
        toggleTheme();
    };

    return (
        <>
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasDarkNavbar"
                        aria-controls="offcanvasDarkNavbar"
                        aria-label="Toggle navigation"
                    >
                        <FontAwesomeIcon icon={faDna} rotation={90} style={{ color: "#48CB86", fontSize: "3rem" }} className="icon" />
                        {/*  <span className="navbar-toggler-icon"></span> */}
                    </button>
                    <div className="d-flex align-items-center"> {/* Cambio de clases para alinear elementos */}
                        <span className="navbar-text" style={{ fontSize: "1.5rem", color: "#fff" }} >Nombre Usuario</span>
                        <img src="https://picsum.photos/200" alt="User avatar" className="user-avatar rounded-circle" style={{ width: "3rem", height: "3rem", marginLeft: "80px" }} />
                    </div>
                    <div
                        className="offcanvas offcanvas-start text-bg-dark"
                        tabIndex={-1}
                        id="offcanvasDarkNavbar"
                        aria-labelledby="offcanvasDarkNavbarLabel"
                    >
                        <div className="offcanvas-header">
                            <div className="d-flex align-items-center"> {/* Cambio de clases para alinear elementos */}
                                <span className="navbar-text ms-2 pe-5" style={{ fontSize: "1.5rem", color: "#fff" }} >Nombre Usuario</span>
                                <img src="https://picsum.photos/200" alt="User avatar" className="user-avatar rounded-circle" style={{ width: "3rem", height: "3rem", marginLeft: "80px" }} />
                            </div>
                            {/*         <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button> */}
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Profile
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Mis intereses
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Salas de Interés
                                    </a>
                                </li>


                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Mis Intereses
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Salas de Interés
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Something else here
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex mt-3" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Buscar en M4tch"
                                    aria-label="Search"
                                />
                                <button className="btn btn-success" type="submit">
                                    Buscar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Sidebar;