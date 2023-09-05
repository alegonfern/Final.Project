import React from 'react';

const Sidebar_saas = () => {
    return (
        <>


            <div className="sidebar">
                <div className="sidebar-header">
                    <h3>Gamer Dashboard</h3>
                </div>
                <ul className="sidebar-menu">
                    <li>
                        <a href="#">
                            <FaGamepad /> Juegos
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaChartBar /> Estadísticas
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaUsers /> Comunidad
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaCog /> Configuración
                        </a>
                    </li>
                </ul>
            </div>


        </>
    )


}

export default Sidebar_saas