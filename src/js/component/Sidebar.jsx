import React, { useContext, useState, useEffect } from "react";
import '../../styles/Sidebar.css';
import { UserContext } from "../store/UserContext";

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
                    <a className="nav-link active" href="#">Ajustes/Configuración</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">General</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Conversaciones</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Información</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Privacidad</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Notificaciones</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Ayuda</a>
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