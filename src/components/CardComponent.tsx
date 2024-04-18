import { Card } from "antd";

const CardComponent = () => {
  return (
    <div>
      <Card
        title="Cumplimiento"
        bordered={false}
        style={{ width: "100%", textAlign: "center" }} // Alinea el contenido al centro
        className="custom-card" // Aplica estilos personalizados a través de CSS
      >
        <p className="animated-text" style={{ fontSize: "3.3rem" }}>
          85%
        </p>
      </Card>
    </div>
  );
};

export default CardComponent;
