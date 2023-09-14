import React, { useContext, useState, useEffect } from "react";
import '../../styles/Sidebar.css';
import { UserContext } from "../store/UserContext";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Sidebar() {
    const { theme, toggleTheme } = useContext(UserContext);
    const [checked, setChecked] = useState(theme === 'dark');

    useEffect(() => {
        setChecked(theme === 'dark');
    }, [theme]);

    return (
        <div className={`bg-dark text-white p-3 sidebar-container ${theme}`}>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Mi Perfil</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Mis intereses</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Salas de interés</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Mis M4tch's</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Chats</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Eventos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Valoración</a>
                </li>
            </ul>
            <div>
                <label className="switch">
                    <input type="checkbox" onClick={toggleTheme} checked={checked} />
                    <span className={`slider round ${theme === 'dark' ? 'dark' : ''}`}></span>

                </label>
            </div>
        </div>
    );
}

export default Sidebar;