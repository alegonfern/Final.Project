import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const GenerosGameChart = () => {
    const chartRef = useRef(null);
    const [generosGameData, setGenerosGameData] = useState(null);

    useEffect(() => {
        // Realiza una solicitud GET para obtener la distribución de géneros de juegos desde tu backend
        fetch("http://127.0.0.1:5000/generos_game_distribution")
            .then((response) => response.json())
            .then((data) => {
                // Ordena los datos por cantidad de juegos de mayor a menor
                const sortedData = Object.entries(data)
                    .sort((a, b) => b[1] - a[1])
                    .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});

                // Selecciona solo los primeros 4 géneros de juegos
                const first3Genres = Object.fromEntries(
                    Object.entries(sortedData).slice(0, 3)
                );

                setGenerosGameData(first3Genres);
            })
            .catch((error) => {
                console.error("Error al obtener la distribución de géneros de juegos:", error);
            });
    }, []);

    useEffect(() => {
        if (generosGameData) {
            const labels = Object.keys(generosGameData); // Etiquetas de los géneros de juegos
            const values = Object.values(generosGameData); // Valores (cantidad de juegos por género)

            // Configuración del gráfico de barras
            const chartConfig = {
                type: "bar",
                data: {
                    labels: labels,
                    datasets: [
                        {
                            data: values,
                            backgroundColor: ["#0000FF", "#000000", "#000000"], // Colores azul y negro
                            borderColor: "#000", // Color del borde de las barras
                            borderWidth: 1, // Ancho del borde de las barras
                        },
                    ],
                },
                options: {
                    plugins: {
                        legend: {
                            display: false, // Oculta la leyenda del gráfico
                        },
                    },
                    scales: {
                        y: {
                            display: false, // Oculta el eje Y
                        },
                        x: {
                            title: {
                                display: false,
                                text: "Género de Juego",
                            },
                            ticks: {
                                font: {
                                    color: "#FFFFFF", // Color de las etiquetas en el eje X
                                },
                            },
                        },
                    },
                },
            };

            const myChart = new Chart(chartRef.current, chartConfig);
        }
    }, [generosGameData]);

    return (
        <div>
            <canvas ref={chartRef} width={500} height={550}></canvas>
        </div>
    );
};

export default GenerosGameChart;
