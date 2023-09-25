import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import "chartjs-plugin-datalabels";

const GenderPieChart = ({ genderData }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (genderData) {
            const { male, female } = genderData;
            const labels = ["Male", "Female"];
            const data = [male, female];
            const backgroundColor = ["#00FF00", "#FF1493"]; // Verde para male, Rosado para female

            // Destruye el gráfico anterior si existe
            if (myChart.current) {
                myChart.current.destroy();
            }

            const chartConfig = {
                type: "pie",
                data: {
                    labels: labels,
                    datasets: [
                        {
                            data: data,
                            backgroundColor: backgroundColor,
                        },
                    ],
                },
                options: {
                    plugins: {
                        legend: {
                            display: false, // Oculta la leyenda del gráfico
                        },
                        datalabels: {
                            formatter: (value) => {
                                const sum = data.reduce((a, b) => a + b, 0);
                                const percentage = ((value * 100) / sum).toFixed(2) + "%";
                                return percentage;
                            },
                            color: "#fff",
                            font: {
                                weight: "bold",
                            },
                        },
                    },
                },
            };

            // Crea el nuevo gráfico y guarda una referencia
            myChart.current = new Chart(chartRef.current, chartConfig);
        }
    }, [genderData]);

    return (
        <div>
            <canvas ref={chartRef} width={400} height={400}></canvas>
        </div>
    );
};

export default GenderPieChart;
