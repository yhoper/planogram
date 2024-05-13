import { useTranslation } from "react-i18next";
import { useSidebarState } from "../../../shared/state/layout/sidebarMenu/sidebarStore";

const ContentComponent = () => {
  const { t } = useTranslation();
  const { currentSection } = useSidebarState();
  return (
    <div>
      Contenido de mi PlanogramaGeneralRipleyMain
      <h1>Estoy en {currentSection}</h1>
      <p>{t("distribution")}</p>
      <p>{t("squareMeters")}</p>
    </div>
  );
};

export default ContentComponent;
