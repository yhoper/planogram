import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
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
    label: string;
    data: number[];
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
      label: "Dataset 1",
      data: [68, 39, 80, 23, 84, 77, 35],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [57, 69, 69, 43, 94, 37, 65],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
  borderWidth: 1,
};

const ChartVerticalBar: React.FC = () => {
  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
};

export default ChartVerticalBar;
