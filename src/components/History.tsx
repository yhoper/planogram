import { useState } from "react";
import { Timeline } from "antd";
import ModalWithCarousel from "./modalWithCarousel";
import img_1 from "../assets/paris_arauco/img_1.jpg";
import img_2 from "../assets/paris_arauco/img_2.jpg";
import img_3 from "../assets/paris_arauco/img_3.jpg";
import img_4 from "../assets/paris_arauco/img_4.jpg";
import img_5 from "../assets/paris_arauco/img_5.jpg";
import img_6 from "../assets/paris_arauco/img_6.jpg";
import img_7 from "../assets/paris_arauco/img_7.jpg";
import img_8 from "../assets/paris_arauco/img_8.jpg";

const History = () => {
  const [isOpen, setIsOpen] = useState(false);
  const images = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8];
  const itemModal = (i: any) => {
    console.log(i);
    setIsOpen(true);
  };
  return (
    <>
      <ModalWithCarousel
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        images={images}
      />
      <Timeline
        items={[
          {
            children: (
              <>
                <p className="clickHistory" onClick={() => itemModal("")}>
                  Reporte 11 Abril 2024{" "}
                </p>
                <p className="clickHistory" onClick={() => itemModal("")}>
                  Reporte 08 Marzo 2024
                </p>
                <p className="clickHistory" onClick={() => itemModal("")}>
                  Reporte 12 Febrero 2024
                </p>
                <p className="clickHistory" onClick={() => itemModal("")}>
                  Reporte 10 Enero 2024
                </p>
              </>
            ),
          },

          {
            children: (
              <>
                <p className="clickHistory" onClick={() => itemModal("")}>
                  Reporte 15 Julio 2023
                </p>
                <p className="clickHistory" onClick={() => itemModal("")}>
                  Reporte 05 Junio 2023
                </p>
              </>
            ),
          },

          {
            color: "red",
            children: (
              <p>NOTA! sólo se mostraran los últimos 2 meses de reporte.</p>
            ),
          },
        ]}
      />
    </>
  );
};

export default History;
