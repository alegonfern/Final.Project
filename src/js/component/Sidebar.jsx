import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sidebar() {
    return (
        <div className="bg-dark text-white p-3">
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
        </div>
    );
}

export default Sidebar;
