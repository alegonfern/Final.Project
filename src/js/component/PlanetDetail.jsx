import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../store/UserContext";
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup, faCloudSun, faMountain, faArrowDown } from "@fortawesome/free-solid-svg-icons";


const PlanetDetail = () => {
    const { planetData } = useContext(UserContext);
    const { planetId } = useParams();


    const selectedPlanet = planetData.find(planet => planet.result.uid === planetId);
    const shuffledPlanets = planetData.slice().sort(() => Math.random() - 0.5);


    if (!selectedPlanet) {
        return <p>Loading...</p>;
    }
    return (
        <>
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="..." /></div>
                        <div className="col-md-6">
                            <div className="small mb-1">{selectedPlanet.result.description}</div>
                            <h1 className="display-5 fw-bolder">{selectedPlanet.result.properties.name}</h1>
                            <div className="fs-5 mb-5">
                                <p className="fs-5 text-muted mb-0">
                                    <FontAwesomeIcon icon={faPeopleGroup} className="me-2 text-muted fa-xs align-middle" />{selectedPlanet.result.properties.population}</p>
                                <p className="fs-5 text-muted mb-0">
                                    <FontAwesomeIcon icon={faCloudSun} className="me-2 text-muted fa-xs align-middle" />{selectedPlanet.result.properties.climate}</p>
                                <p className="fs-5 text-muted mb-0">
                                    <FontAwesomeIcon icon={faMountain} className="me-2 text-muted fa-xs align-middle" />{selectedPlanet.result.properties.terrain}</p>
                                <p className="fs-5 text-muted mb-0">
                                    <FontAwesomeIcon icon={faArrowDown} className="me-2 text-muted fa-xs align-middle" />{selectedPlanet.result.properties.gravity}</p>
                            </div>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero</p>
                            <div className="d-flex">

                                <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                    <i className="bi-cart-fill me-1"></i>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-light">
                <div className="container px-4 px-lg-5 mt-5">
                    <h2 className="fw-bolder mb-4">Others Planets</h2>

                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {shuffledPlanets.slice(0, 4).map(planet => (
                            <div className="col mb-5" key={planet.result.uid}>
                                <div className="card h-100">

                                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                                    <div className="card-body p-4">
                                        <div className="text-center">

                                            <h5 className="fw-bolder">{planet.result.properties.name}</h5>

                                            {planet.result.properties.gender}
                                        </div>
                                    </div>

                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center">
                                            <Link to={`/detail_planet/${planet.result.uid}`} className="btn btn-outline-dark mt-auto">View options</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
};

export default PlanetDetail;