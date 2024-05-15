import { useTranslation } from "react-i18next";
import { useSidebarState } from "../../../shared/state/layout/sidebarMenu/sidebarStore";
import TableColumComponent from "../../Shared/TableColum/TableColumComponent";

const ContentComponent = () => {
  const { t } = useTranslation();
  const { currentSection } = useSidebarState();
  return (
    <div>
      <h1>I'm in {currentSection}</h1>
      <p>{t("distribution")}</p>
      <p>{t("squareMeters")}</p>
      {currentSection === "planogram" && <TableColumComponent />}
    </div>
  );
};

export default ContentComponent;
