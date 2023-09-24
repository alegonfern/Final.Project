import React from 'react';
import "../../../styles/ProfileBadge.css";
import M1 from "../../../img/medal-1367.png";
import M2 from "../../../img/medal-1372.png";
import M3 from "../../../img/badge-1365.png";
import M4 from "../../../img/new-1363.png";


const ProfileBadges = () => {
    return (
        <>

            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
                integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA="
                crossOrigin="anonymous"
            />
            <div className="container">
                <div className="row mt-n1-9">
                    <div
                        className="col-md-6 col-xl-3 mt-1-9 wow fadeInUp"
                        data-wow-delay=".2s"
                        style={{
                            visibility: "visible",
                            animationDelay: "0.2s",
                            animationName: "fadeInUp"
                        }}
                    >
                        <div className="team-style07">
                            <div className="team-thumb mb-1-9">
                                <div className="thumb">
                                    <img
                                        src={M1}
                                        className="rounded-circle"
                                        alt="..."
                                    />
                                </div>
                                <div className="team-social">
                                    <ul className="styled-icons">
                                        <li>
                                            <a className="styled-icons-item" href="#!">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="styled-icons-item" href="#!">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="styled-icons-item" href="#!">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h3 className="h5 mb-1">
                                <a href="#!">Elmer Chavez</a>
                            </h3>
                            <p className="mb-0">Founder</p>
                        </div>
                    </div>
                    <div
                        className="col-md-6 col-xl-3 mt-1-9 wow fadeInUp"
                        data-wow-delay=".3s"
                        style={{
                            visibility: "visible",
                            animationDelay: "0.3s",
                            animationName: "fadeInUp"
                        }}
                    >
                        <div className="team-style07">
                            <div className="team-thumb mb-1-9">
                                <div className="thumb">
                                    <img
                                        src={M2}
                                        className="rounded-circle"
                                        alt="..."
                                    />
                                </div>
                                <div className="team-social">
                                    <ul className="styled-icons">
                                        <li>
                                            <a className="styled-icons-item" href="#!">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="styled-icons-item" href="#!">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="styled-icons-item" href="#!">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h3 className="h5 mb-1">
                                <a href="#!">Elmira Milani</a>
                            </h3>
                            <p className="mb-0">Co-Founder</p>
                        </div>
                    </div>
                    <div
                        className="col-md-6 col-xl-3 mt-1-9 wow fadeInUp"
                        data-wow-delay=".4s"
                        style={{
                            visibility: "visible",
                            animationDelay: "0.4s",
                            animationName: "fadeInUp"
                        }}
                    >
                        <div className="team-style07">
                            <div className="team-thumb mb-1-9">
                                <div className="thumb">
                                    <img
                                        src={M3}
                                        className="rounded-circle"
                                        alt="..."
                                    />
                                </div>
                                <div className="team-social">
                                    <ul className="styled-icons">
                                        <li>
                                            <a className="styled-icons-item" href="#!">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="styled-icons-item" href="#!">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="styled-icons-item" href="#!">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h3 className="h5 mb-1">
                                {" "}
                                <a href="#!">Dorcas Laueri</a>
                            </h3>
                            <p className="mb-0">Developer</p>
                        </div>
                    </div>
                    <div
                        className="col-md-6 col-xl-3 mt-1-9 wow fadeInUp"
                        data-wow-delay=".5s"
                        style={{
                            visibility: "visible",
                            animationDelay: "0.5s",
                            animationName: "fadeInUp"
                        }}
                    >
                        <div className="team-style07">
                            <div className="team-thumb mb-1-9">
                                <div className="thumb">
                                    <img
                                        src={M4}
                                        className="rounded-circle"
                                        alt="..."
                                    />
                                </div>
                                <div className="team-social">
                                    <ul className="styled-icons">
                                        <li>
                                            <a className="styled-icons-item" href="#!">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="styled-icons-item" href="#!">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="styled-icons-item" href="#!">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h3 className="h5 mb-1">
                                {" "}
                                <a href="#!">Steven Miloler</a>
                            </h3>
                            <p className="mb-0">Designer</p>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default ProfileBadges
