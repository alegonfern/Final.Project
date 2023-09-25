import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import "chartjs-plugin-datalabels";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMale, faFemale } from "@fortawesome/free-solid-svg-icons";

const GrapGenderHome = () => {
  const chartRef = useRef(null);
  const [genderData, setGenderData] = useState(null);

  useEffect(() => {
    // Realiza una solicitud GET para obtener la distribución de género desde tu backend
    fetch("http://127.0.0.1:5000/gender_distribution")
      .then((response) => response.json())
      .then((data) => {
        setGenderData(data);
      })
      .catch((error) => {
        console.error("Error al obtener la distribución de género:", error);
      });
  }, []);

  useEffect(() => {
    if (genderData) {
      const labels = Object.keys(genderData); // Etiquetas (por ejemplo, "Masculino", "Femenino")
      const values = Object.values(genderData); // Valores (por ejemplo, la cantidad de usuarios por género)

      // Define los íconos FontAwesome para hombre y mujer
      const maleIcon = <FontAwesomeIcon icon={faMale} style={{ color: "#00FF00" }} />;
      const femaleIcon = <FontAwesomeIcon icon={faFemale} style={{ color: "#FF1493" }} />;

      // Configuración del gráfico
      const chartConfig = {
        type: "pie",
        data: {
          labels: labels,
          datasets: [
            {
              data: values,
              backgroundColor: ["#FF1493", "#00FF00"], // Verde fluor para Hombre, Rosado fluor para Mujer
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false, // Oculta la leyenda del gráfico
            },
            datalabels: {
              formatter: (value, ctx) => {
                const sum = ctx.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                const percentage = ((value * 100) / sum).toFixed(2) + "%"; // Calcula el porcentaje
                return percentage;
              },
              color: "#fff", // Color del texto de porcentaje
              font: {
                weight: "bold",
              },
            },
          },
        },
      };

      const myChart = new Chart(chartRef.current, chartConfig);
    }
  }, [genderData]);

  return (
    <div>
      <canvas ref={chartRef} width={400} height={400}></canvas>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ marginRight: "20px" }}>
          <FontAwesomeIcon icon={faMale} style={{ color: "#00FF00" }} /> Hombre
        </div>
        <div>
          <FontAwesomeIcon icon={faFemale} style={{ color: "#FF1493" }} /> Mujer
        </div>
      </div>
    </div>
  );
};

export default GrapGenderHome;
