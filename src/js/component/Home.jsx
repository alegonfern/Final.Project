import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../store/UserContext";
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolidHeart, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";

const Home = () => {
    const { characterData, planetData, addFavorite,isFavorite,setFavorites } = useContext(UserContext);
    
    
    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      }, []);
    
    return (<>

        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>

        <section className="py-5" >
            <h1> Characters: </h1>
            <div className="container px-4 px-lg-5 mt-5" >

                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center" >
                    {characterData.map((character) => (
                        <div className="col mb-5" key={character.result.uid}>
                            <div className="card h-100">

                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                                <div className="card-body p-4">
                                    <div className="text-center">

                                        <h5 className="fw-bolder">{character.result.properties.name}</h5>

                                        {character.result.properties.gender}
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">

                                    <div className="text-center d-flex justify-content-between align-items-center">
                                        <Link to={`/detail_character/${character.result.uid}`} className="btn btn-outline-dark mt-auto">View details</Link>
                                        <FontAwesomeIcon icon={isFavorite(character.result) ? faSolidHeart : faRegularHeart} style={{ color: isFavorite(character.result) ? "#f90606" : "" }}  className="fa-xl"  onClick={() => addFavorite(character.result)}/>
                                        </div>
                                  
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <section className="mt-0" >
            <h1> Planets: </h1>
            <div className="container px-4 px-lg-5 mt-5" >

                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center" >
                    {planetData.map((planet) => (
                        <div className="col mb-5" key={planet.result.uid}>
                            <div className="card h-100">

                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                                <div className="card-body p-4">
                                    <div className="text-center">

                                        <h5 className="fw-bolder">{planet.result.properties.name}</h5>

                                        Population: {planet.result.properties.population}
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center d-flex justify-content-between align-items-center">
                                <Link to={`/detail_planet/${planet.result.uid}`} className="btn btn-outline-dark mt-auto">View details</Link>
                                <FontAwesomeIcon icon={isFavorite(planet.result) ? faSolidHeart : faRegularHeart} style={{ color: isFavorite(planet.result) ? "#f90606" : "" }}  className="fa-xl"  onClick={() => addFavorite(planet.result)}/>
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

export default Home;