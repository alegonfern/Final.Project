import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useContext, useState } from "react";
import { UserContext } from "../store/UserContext";
import { useEffect } from 'react';

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
        <div style={{ marginTop: "200px" }}>
            <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    );
}

export default MyCalendar;