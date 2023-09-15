import React, { useContext, useState, useEffect } from "react";
import '../../styles/Sidebar.css';
import { UserContext } from "../store/UserContext";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faComments, faList, faUserFriends, faBell, faStar } from '@fortawesome/free-solid-svg-icons';





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
        <div className={`bg-dark text-white p-3 sidebar-container ${theme}`}>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to="/Home" className="nav-link">
                        <FontAwesomeIcon icon={faUser} /> Home
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/Intereses" className="nav-link">
                        <FontAwesomeIcon icon={faHeart} /> Mis Intereses
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/Group" className="nav-link">
                        <FontAwesomeIcon icon={faList} /> Salas de Interés
                    </Link>
                </li>



                <li className="nav-item">
                    <Link to="/MatchPreview" className="nav-link">
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
                { /* <li className="nav-item">
                    <a className="nav-link" href="#">
                        <FontAwesomeIcon icon={faStar} /> Valoración
                    </a>
                </li>
              */}
            </ul>
            <div>
                <label className="switch">
                    <input type="checkbox" onChange={handleChange} checked={checked} />
                    <span className={`slider round ${theme === 'dark' ? 'dark' : ''}`}></span>
                </label>
            </div>
        </div>
    );
}

export default Sidebar;
