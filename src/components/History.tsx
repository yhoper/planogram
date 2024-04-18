import { useState } from "react";
import { Timeline } from "antd";
import ModalWithCarousel from "./modalWithCarousel";
import img_1 from "../assets/locales/img_1.jpg";
import img_2 from "../assets/locales/img_2.jpg";
import img_3 from "../assets/locales/img_3.jpg";

const History = () => {
  const [isOpen, setIsOpen] = useState(false);
  const images = [img_1, img_2, img_3];
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
