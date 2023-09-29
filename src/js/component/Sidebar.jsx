import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../store/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faComments, faList, faUserFriends, faBell, faHouse } from '@fortawesome/free-solid-svg-icons';
import { faDna } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    const { theme, toggleTheme, logout } = useContext(UserContext);
    const [checked, setChecked] = useState(theme === 'dark');
    const navigate = useNavigate(); // Obtiene la función navigate
    // Verifico si el usuario está autenticado 
    const isAuthenticated = sessionStorage.getItem('token');
    console.log("Estas logeado con exito:", isAuthenticated);

    useEffect(() => {

        setChecked(theme === 'dark');
    }, [theme]);

    const handleChange = () => {
        setChecked(!checked);
        toggleTheme();
    };

    // Realizo el logout y redirigir al usuario al login
    const handleLogout = () => {
        logout(); // Llamo a la función de logout en el contexto
        navigate('/login'); // Redirigo al usuario a la página de inicio de sesión
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
                    </button>
                    <div className="d-flex align-items-center">
                        <span className="navbar-text" style={{ fontSize: "1.5rem", color: "#fff" }}>Nombre Usuario</span>
                        <img src="https://picsum.photos/200" alt="User avatar" className="user-avatar rounded-circle" style={{ width: "3rem", height: "3rem", marginLeft: "80px" }} />
                    </div>
                    <div
                        className="offcanvas offcanvas-start text-bg-dark"
                        tabIndex={-1}
                        id="offcanvasDarkNavbar"
                        aria-labelledby="offcanvasDarkNavbarLabel"
                    >
                        <div className="offcanvas-header">
                            <div className="d-flex align-items-center">
                                <span className="navbar-text ms-2 pe-5" style={{ fontSize: "1.5rem", color: "#fff" }}>Nombre Usuario</span>
                                <img src="https://picsum.photos/200" alt="User avatar" className="user-avatar rounded-circle" style={{ width: "3rem", height: "3rem", marginLeft: "80px" }} />
                            </div>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav flex-column">
                                <li className="nav-item">
                                    <Link to="/Home" className="nav-link">
                                        <FontAwesomeIcon icon={faHouse} /> Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Profile" className="nav-link">
                                        <FontAwesomeIcon icon={faUser} /> Profile
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Intereses" className="nav-link">
                                        <FontAwesomeIcon icon={faHeart} /> Mis Intereses
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Matches" className="nav-link">
                                        <FontAwesomeIcon icon={faUserFriends} /> Mis M4tch's
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/chat" className="nav-link">
                                        <FontAwesomeIcon icon={faComments} /> Chats
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/calendar" className="nav-link">
                                        <FontAwesomeIcon icon={faBell} /> Eventos
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Adn" className="nav-link">
                                        <FontAwesomeIcon icon={faDna} style={{ color: "#cb484b", fontSize: "2rem" }} className="icon" /> Conoce el sistema de Puntuacion
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <div className="dropdown">
                                        {isAuthenticated ? (
                                            <button className="btn btn-link text-white" onClick={handleLogout}>Logout</button>
                                        ) : (
                                            <a className="nav-link dropdown-toggle" href="#" role="button" id="account-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                                <FontAwesomeIcon icon={faUser} className="me-1" />
                                                Account
                                            </a>
                                        )}
                                        <ul className="dropdown-menu" aria-labelledby="account-dropdown">
                                            <li><Link to="/login" className="dropdown-item">Login</Link></li>
                                            <li><Link to="/signup" className="dropdown-item">Signup</Link></li>
                                        </ul>
                                    </div>
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
