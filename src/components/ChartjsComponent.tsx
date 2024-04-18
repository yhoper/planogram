import React from "react";
import { Col, Divider, Row } from "antd";
const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import CardComponent from "./CardComponent";

// Registro de elementos y escalas en Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
  datasets: {
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
const labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Juliio"];

const data: ChartData = {
  labels,
  datasets: [
    {
      label: "Cumplimiento",
      data: [68, 69, 70, 73, 74, 75, 85], // Puedes definir los puntos de datos manualmente aquí
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const ChartjsComponent: React.FC = () => {
  return (
    <>
      {/* <Divider orientation="left">Horizontal</Divider> */}
      <Row gutter={16}>
        <Col className="gutter-row" span={12}>
          <CardComponent />
        </Col>
        <Col className="gutter-row" span={12}>
          <div>
            <Line options={options} data={data} />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ChartjsComponent;
