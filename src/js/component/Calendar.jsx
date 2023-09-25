import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useContext, useState } from "react";
import { UserContext } from "../store/UserContext";
import { useEffect } from 'react';
import "../../styles/calendar.css"


const localizer = momentLocalizer(moment);

const myEventsList = [
    {
        title: "Evento 1",
        start: new Date("2023-09-15T10:00:00"),
        end: new Date("2023-09-15T12:00:00"),
    },
    {
        title: "Evento 2",
        start: new Date("2023-09-16T14:00:00"),
        end: new Date("2023-09-16T16:00:00"),
    },
];

function MyCalendar() {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const { isLoggedIn } = useContext(UserContext);
    /* 
        useEffect(() => {
            if (isLoggedIn) {
                // Leer el token del localStorage
                const token = localStorage.getItem('jwtToken');
                console.log('Token JWT:', token);
    
                if (token) {
                    // Si el usuario está autenticado y hay un token en el localStorage, realiza una solicitud HTTP a una ruta privada
                    fetch('http://127.0.0.1:5000/Calendar', {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    })
                        .then((response) => {
                            if (response.ok) {
                                return response.json();
                            } else {
                                throw new Error('Error al cargar datos privados.');
                            }
                        })
                        .then((data) => {
                            setData(data);
                            setIsLoading(false);
                        })
                        .catch((error) => {
                            console.error('Error al cargar datos privados:', error);
                            setIsLoading(false);
                        });
                } else {
                    setIsLoading(false);
                }
            } else {
                setIsLoading(false);
            }
        }, [isLoggedIn]);
    
        if (isLoading) {
            return <p>Cargando...</p>;
        }
    
        if (!data) {
            return <p>Error al cargar datos privados.</p>;
        } */

    return (
        <>
            <link
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                rel="stylesheet"
            />
            <div className="event-schedule-area-two bg-color pad100" style={{ marginTop: "120px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <div className="title-text">
                                    <h2>Eventos próximos 5 días</h2>
                                </div>
                                <p>
                                    Un resumen de todos los eventos a los cuales te has inscrito.
                                </p>
                            </div>
                        </div>
                        {/* /.col end*/}
                    </div>
                    {/* row end*/}
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="nav custom-tab" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a
                                        className="nav-link active show"
                                        id="home-taThursday"
                                        data-toggle="tab"
                                        href="#home"
                                        role="tab"
                                        aria-controls="home"
                                        aria-selected="true"
                                    >
                                        24 Septiembre
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        id="profile-tab"
                                        data-toggle="tab"
                                        href="#profile"
                                        role="tab"
                                        aria-controls="profile"
                                        aria-selected="false"
                                    >
                                        25 Septiembre
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        id="contact-tab"
                                        data-toggle="tab"
                                        href="#contact"
                                        role="tab"
                                        aria-controls="contact"
                                        aria-selected="false"
                                    >
                                        26 Septiembre
                                    </a>
                                </li>
                                <li className="nav-item d-none d-lg-block">
                                    <a
                                        className="nav-link"
                                        id="sunday-tab"
                                        data-toggle="tab"
                                        href="#sunday"
                                        role="tab"
                                        aria-controls="sunday"
                                        aria-selected="false"
                                    >
                                        27 Septiembre
                                    </a>
                                </li>
                                <li className="nav-item mr-0 d-none d-lg-block">
                                    <a
                                        className="nav-link"
                                        id="monday-tab"
                                        data-toggle="tab"
                                        href="#monday"
                                        role="tab"
                                        aria-controls="monday"
                                        aria-selected="false"
                                    >
                                        28 Septiembre
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div
                                    className="tab-pane fade active show"
                                    id="home"
                                    role="tabpanel"
                                >
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className="text-center" scope="col">
                                                        Fecha
                                                    </th>
                                                    <th scope="col">Contacto</th>
                                                    <th scope="col">Tiempo</th>
                                                    <th scope="col">Ubicación</th>
                                                    <th className="text-center" scope="col">
                                                        Más Datos
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="inner-box">
                                                    <th scope="row">
                                                        <div className="event-date">
                                                            <span>24</span>
                                                            <p>Septiembre</p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div className="event-img">
                                                            <img
                                                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="event-wrap">
                                                            <h3>
                                                                <a href="#">Harman Kardon</a>
                                                            </h3>
                                                            <div className="meta">
                                                                <div className="organizers">
                                                                    <a href="#">Aslan Lingker</a>
                                                                </div>
                                                                <div className="categories">
                                                                    <a href="#">Inspire</a>
                                                                </div>
                                                                <div className="time">
                                                                    <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="r-no">
                                                            <span>Room B3</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="primary-btn">
                                                            <a className="btn btn-primary" href="#">
                                                                Leer más
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="inner-box">
                                                    <th scope="row">
                                                        <div className="event-date">
                                                            <span>24</span>
                                                            <p>Septiembre</p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div className="event-img">
                                                            <img
                                                                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="event-wrap">
                                                            <h3>
                                                                <a href="#">Toni Duggan</a>
                                                            </h3>
                                                            <div className="meta">
                                                                <div className="organizers">
                                                                    <a href="#">Aslan Lingker</a>
                                                                </div>
                                                                <div className="categories">
                                                                    <a href="#">Inspire</a>
                                                                </div>
                                                                <div className="time">
                                                                    <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="r-no">
                                                            <span>Room D3</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="primary-btn">
                                                            <a className="btn btn-primary" href="#">
                                                                Leer más
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="inner-box border-bottom-0">
                                                    <th scope="row">
                                                        <div className="event-date">
                                                            <span>24</span>
                                                            <p>Septiembre</p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div className="event-img">
                                                            <img
                                                                src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="event-wrap">
                                                            <h3>
                                                                <a href="#">Billal Hossain</a>
                                                            </h3>
                                                            <div className="meta">
                                                                <div className="organizers">
                                                                    <a href="#">Aslan Lingker</a>
                                                                </div>
                                                                <div className="categories">
                                                                    <a href="#">Inspire</a>
                                                                </div>
                                                                <div className="time">
                                                                    <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="r-no">
                                                            <span>Room A3</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="primary-btn">
                                                            <a className="btn btn-primary" href="#">
                                                                Leer más
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="profile"
                                    role="tabpanel"
                                    aria-labelledby="profile-tab"
                                >
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Speakers</th>
                                                    <th scope="col">Session</th>
                                                    <th scope="col">Venue</th>
                                                    <th scope="col">Venue</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="inner-box">
                                                    <th scope="row">
                                                        <div className="event-date">
                                                            <span>16</span>
                                                            <p>Novembar</p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div className="event-img">
                                                            <img
                                                                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="event-wrap">
                                                            <h3>
                                                                <a href="#">Toni Duggan</a>
                                                            </h3>
                                                            <div className="meta">
                                                                <div className="organizers">
                                                                    <a href="#">Aslan Lingker</a>
                                                                </div>
                                                                <div className="categories">
                                                                    <a href="#">Inspire</a>
                                                                </div>
                                                                <div className="time">
                                                                    <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="r-no">
                                                            <span>Room B3</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="primary-btn">
                                                            <a className="btn btn-primary" href="#">
                                                                Read More
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="inner-box">
                                                    <th scope="row">
                                                        <div className="event-date">
                                                            <span>16</span>
                                                            <p>Novembar</p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div className="event-img">
                                                            <img
                                                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="event-wrap">
                                                            <h3>
                                                                <a href="#">Harman Kardon</a>
                                                            </h3>
                                                            <div className="meta">
                                                                <div className="organizers">
                                                                    <a href="#">Aslan Lingker</a>
                                                                </div>
                                                                <div className="categories">
                                                                    <a href="#">Inspire</a>
                                                                </div>
                                                                <div className="time">
                                                                    <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="r-no">
                                                            <span>Room B3</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="primary-btn">
                                                            <a className="btn btn-primary" href="#">
                                                                Read More
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="inner-box border-bottom-0">
                                                    <th scope="row">
                                                        <div className="event-date">
                                                            <span>16</span>
                                                            <p>Novembar</p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div className="event-img">
                                                            <img
                                                                src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="event-wrap">
                                                            <h3>
                                                                <a href="#">Billal Hossain</a>
                                                            </h3>
                                                            <div className="meta">
                                                                <div className="organizers">
                                                                    <a href="#">Aslan Lingker</a>
                                                                </div>
                                                                <div className="categories">
                                                                    <a href="#">Inspire</a>
                                                                </div>
                                                                <div className="time">
                                                                    <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="r-no">
                                                            <span>Room B3</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="primary-btn">
                                                            <a className="btn btn-primary" href="#">
                                                                Read More
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="contact"
                                    role="tabpanel"
                                    aria-labelledby="contact-tab"
                                >
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Speakers</th>
                                                    <th scope="col">Session</th>
                                                    <th scope="col">Venue</th>
                                                    <th scope="col">Venue</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="inner-box">
                                                    <th scope="row">
                                                        <div className="event-date">
                                                            <span>16</span>
                                                            <p>Novembar</p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div className="event-img">
                                                            <img
                                                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="event-wrap">
                                                            <h3>
                                                                <a href="#">Harman Kardon</a>
                                                            </h3>
                                                            <div className="meta">
                                                                <div className="organizers">
                                                                    <a href="#">Aslan Lingker</a>
                                                                </div>
                                                                <div className="categories">
                                                                    <a href="#">Inspire</a>
                                                                </div>
                                                                <div className="time">
                                                                    <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="r-no">
                                                            <span>Room B3</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="primary-btn">
                                                            <a className="btn btn-primary" href="#">
                                                                Read More
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="inner-box">
                                                    <th scope="row">
                                                        <div className="event-date">
                                                            <span>16</span>
                                                            <p>Novembar</p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div className="event-img">
                                                            <img
                                                                src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="event-wrap">
                                                            <h3>
                                                                <a href="#">Billal Hossain</a>
                                                            </h3>
                                                            <div className="meta">
                                                                <div className="organizers">
                                                                    <a href="#">Aslan Lingker</a>
                                                                </div>
                                                                <div className="categories">
                                                                    <a href="#">Inspire</a>
                                                                </div>
                                                                <div className="time">
                                                                    <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="r-no">
                                                            <span>Room B3</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="primary-btn">
                                                            <a className="btn btn-primary" href="#">
                                                                Read More
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="inner-box border-bottom-0">
                                                    <th scope="row">
                                                        <div className="event-date">
                                                            <span>16</span>
                                                            <p>Novembar</p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div className="event-img">
                                                            <img
                                                                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="event-wrap">
                                                            <h3>
                                                                <a href="#">Toni Duggan</a>
                                                            </h3>
                                                            <div className="meta">
                                                                <div className="organizers">
                                                                    <a href="#">Aslan Lingker</a>
                                                                </div>
                                                                <div className="categories">
                                                                    <a href="#">Inspire</a>
                                                                </div>
                                                                <div className="time">
                                                                    <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="r-no">
                                                            <span>Room B3</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="primary-btn">
                                                            <a className="btn btn-primary" href="#">
                                                                Read More
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="sunday"
                                    role="tabpanel"
                                    aria-labelledby="sunday-tab"
                                >
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Speakers</th>
                                                    <th scope="col">Session</th>
                                                    <th scope="col">Venue</th>
                                                    <th scope="col">Venue</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="inner-box">
                                                    <th scope="row">
                                                        <div className="event-date">
                                                            <span>16</span>
                                                            <p>Novembar</p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div className="event-img">
                                                            <img
                                                                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="event-wrap">
                                                            <h3>
                                                                <a href="#">Toni Duggan</a>
                                                            </h3>
                                                            <div className="meta">
                                                                <div className="organizers">
                                                                    <a href="#">Aslan Lingker</a>
                                                                </div>
                                                                <div className="categories">
                                                                    <a href="#">Inspire</a>
                                                                </div>
                                                                <div className="time">
                                                                    <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="r-no">
                                                            <span>Room B3</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="primary-btn">
                                                            <a className="btn btn-primary" href="#">
                                                                Read More
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="inner-box">
                                                    <th scope="row">
                                                        <div className="event-date">
                                                            <span>16</span>
                                                            <p>Novembar</p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div className="event-img">
                                                            <img
                                                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="event-wrap">
                                                            <h3>
                                                                <a href="#">Harman Kardon</a>
                                                            </h3>
                                                            <div className="meta">
                                                                <div className="organizers">
                                                                    <a href="#">Aslan Lingker</a>
                                                                </div>
                                                                <div className="categories">
                                                                    <a href="#">Inspire</a>
                                                                </div>
                                                                <div className="time">
                                                                    <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="r-no">
                                                            <span>Room B3</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="primary-btn">
                                                            <a className="btn btn-primary" href="#">
                                                                Read More
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="inner-box border-bottom-0">
                                                    <th scope="row">
                                                        <div className="event-date">
                                                            <span>16</span>
                                                            <p>Novembar</p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div className="event-img">
                                                            <img
                                                                src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="event-wrap">
                                                            <h3>
                                                                <a href="#">Billal Hossain</a>
                                                            </h3>
                                                            <div className="meta">
                                                                <div className="organizers">
                                                                    <a href="#">Aslan Lingker</a>
                                                                </div>
                                                                <div className="categories">
                                                                    <a href="#">Inspire</a>
                                                                </div>
                                                                <div className="time">
                                                                    <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="r-no">
                                                            <span>Room B3</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="primary-btn">
                                                            <a className="btn btn-primary" href="#">
                                                                Read More
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="monday"
                                    role="tabpanel"
                                    aria-labelledby="monday-tab"
                                >
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Speakers</th>
                                                    <th scope="col">Session</th>
                                                    <th scope="col">Venue</th>
                                                    <th scope="col">Venue</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="inner-box">
                                                    <th scope="row">
                                                        <div className="event-date">
                                                            <span>16</span>
                                                            <p>Novembar</p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div className="event-img">
                                                            <img
                                                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="event-wrap">
                                                            <h3>
                                                                <a href="#">Harman Kardon</a>
                                                            </h3>
                                                            <div className="meta">
                                                                <div className="organizers">
                                                                    <a href="#">Aslan Lingker</a>
                                                                </div>
                                                                <div className="categories">
                                                                    <a href="#">Inspire</a>
                                                                </div>
                                                                <div className="time">
                                                                    <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="r-no">
                                                            <span>Room B3</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="primary-btn">
                                                            <a className="btn btn-primary" href="#">
                                                                Read More
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="inner-box">
                                                    <th scope="row">
                                                        <div className="event-date">
                                                            <span>18</span>
                                                            <p>Novembar</p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div className="event-img">
                                                            <img
                                                                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="event-wrap">
                                                            <h3>
                                                                <a href="#">Toni Duggan</a>
                                                            </h3>
                                                            <div className="meta">
                                                                <div className="organizers">
                                                                    <a href="#">Aslan Lingker</a>
                                                                </div>
                                                                <div className="categories">
                                                                    <a href="#">Inspire</a>
                                                                </div>
                                                                <div className="time">
                                                                    <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="r-no">
                                                            <span>Room B3</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="primary-btn">
                                                            <a className="btn btn-primary" href="#">
                                                                Read More
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="inner-box border-bottom-0">
                                                    <th scope="row">
                                                        <div className="event-date">
                                                            <span>20</span>
                                                            <p>Novembar</p>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div className="event-img">
                                                            <img
                                                                src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="event-wrap">
                                                            <h3>
                                                                <a href="#">Billal Hossain</a>
                                                            </h3>
                                                            <div className="meta">
                                                                <div className="organizers">
                                                                    <a href="#">Aslan Lingker</a>
                                                                </div>
                                                                <div className="categories">
                                                                    <a href="#">Inspire</a>
                                                                </div>
                                                                <div className="time">
                                                                    <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="r-no">
                                                            <span>Room B3</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="primary-btn">
                                                            <a className="btn btn-primary" href="#">
                                                                Read More
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="primary-btn text-center">
                                <a href="#" className="btn btn-primary">
                                    Ir a Google Calendar
                                </a>
                            </div>
                        </div>
                        {/* /col end*/}
                    </div>
                    {/* /row end*/}
                </div>
            </div>
        </>

    );
}

export default MyCalendar;