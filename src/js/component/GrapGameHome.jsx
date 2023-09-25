import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const GrapGameHome = () => {
    const chartRef = useRef(null);
    const [top5JuegosData, setTop5JuegosData] = useState(null);

    useEffect(() => {
        // Realiza una solicitud GET para obtener el top 5 de juegos desde tu backend
        fetch("http://127.0.0.1:5000/top5_juegos")
            .then((response) => response.json())
            .then((data) => {
                setTop5JuegosData(data);
            })
            .catch((error) => {
                console.error("Error al obtener el top 5 de juegos:", error);
            });
    }, []);

    useEffect(() => {
        if (top5JuegosData) {
            const labels = top5JuegosData.map((juego) => juego.juego); // Nombres de los juegos
            const data = top5JuegosData.map((juego) => juego.repeticiones); // Repeticiones de juegos

            // Configuración del gráfico de radar
            const chartConfig = {
                type: "radar",
                data: {
                    labels: labels,
                    datasets: [
                        {
                            data: data,
                            fill: true, // Relleno del área bajo el gráfico
                            backgroundColor: "rgba(255, 69, 0, 0.4)", // Color del área bajo el gráfico (naranja)
                            borderColor: "rgba(0, 0, 0, 1)", // Color de la línea del gráfico (negro)
                            pointBackgroundColor: "rgba(255, 69, 0, 1)", // Color de los puntos en el gráfico (naranja)
                        },
                    ],
                },
                options: {
                    scales: {
                        r: {
                            beginAtZero: true,
                            max: Math.max(...data) + 1, // Configura el valor máximo del eje Y
                        },
                    },
                    plugins: {
                        legend: {
                            display: false, // Oculta la leyenda del gráfico
                        },
                    },
                    layout: {
                        padding: {
                            top: -10, // Aumenta el espacio en la parte superior para hacer el radar más grande
                        },
                    },
                },
            };

            const myChart = new Chart(chartRef.current, chartConfig);
        }
    }, [top5JuegosData]);

    return (
        <div>
            <canvas ref={chartRef} width={1500} height={1000}></canvas> {/* Aumenta el tamaño del canvas */}
        </div>
    );
};

export default GrapGameHome;
