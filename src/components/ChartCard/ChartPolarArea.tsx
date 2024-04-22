import React from "react";

import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { PolarArea } from "react-chartjs-2";
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

// Interfaz para las opciones del gráfico
interface ChartOptions {
  responsive: boolean;
  plugins: {
    legend: {
      position: "top" | "bottom" | "left" | "right";
    };
    title: {
      display: boolean;
      text: string;
    };
  };
}

// Interfaz para los datos del gráfico
interface ChartData {
  labels: string[];
  borderWidth: number;
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
  }[];
}

// Opciones del gráfico
const options: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Cumplimiento por meses",
    },
  },
};

// Datos del gráfico

const data: ChartData = {
  labels: ["Falabella", "Ripley", "Paris", "Walmart"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 5, 2],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
    },
  ],
  borderWidth: 1,
};

const ChartPolarArea: React.FC = () => {
  return (
    <>
      <PolarArea options={options} data={data} />
    </>
  );
};

export default ChartPolarArea;
