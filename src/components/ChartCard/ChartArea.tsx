import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

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
    fill: boolean;
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
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
  labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Juliio"],
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: [68, 69, 70, 73, 74, 75, 85],
      borderColor: "#00b46e",
      backgroundColor: "#a8eeb969",
    },
  ],
  borderWidth: 1,
};

const ChartArea: React.FC = () => {
  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};

export default ChartArea;
