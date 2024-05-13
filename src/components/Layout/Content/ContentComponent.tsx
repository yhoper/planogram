import { useTranslation } from "react-i18next";

const ContentComponent = () => {
  const { t } = useTranslation();
  return (
    <div>
      Contenido de mi PlanogramaGeneralRipleyMain
      <p>{t("distribution")}</p>
      <p>{t("squareMeters")}</p>
    </div>
  );
};

export default ContentComponent;
