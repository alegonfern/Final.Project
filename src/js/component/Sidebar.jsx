import React, { useContext } from "react";
import { UserContext } from "../store/UserContext";
import '../../styles/Sidebar.css';;

const Sidebar = () => {
    return (
        <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block">
            <div className="position-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">
                            Mi ADN
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            XXXXXX
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            XXXXX
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            XXXXX
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;
