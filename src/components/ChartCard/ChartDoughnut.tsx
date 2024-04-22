import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

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
    borderColor: string[];
    backgroundColor: string[];
  }[];
}

// Opciones del gráfico
const options: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: false,
      text: " ",
    },
  },
};

// Datos del gráfico

const data: ChartData = {
  labels: ["Si", "No"],
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: [12, 19],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
    },
  ],
  borderWidth: 1,
};

const ChartDoughnut: React.FC = () => {
  return (
    <>
      <Doughnut options={options} data={data} />
    </>
  );
};

export default ChartDoughnut;
