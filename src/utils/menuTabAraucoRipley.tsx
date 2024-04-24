import { MenuTabs } from "../interfaces/MenuTabs";
import PlanogramaGeneral from "../components/PlanogramaGeneralComponent";
import PlanogramaLG from "../components/PlanogramaLGComponent";
import History from "../components/History";

export const menuTabAraucoRipley = (): MenuTabs[] => [
  {
    key: 1,
    label: "LG Main-RIPLEY",
    children: <PlanogramaLG allowOverlap={false} />,
  },
  {
    key: 2,
    label: "LG Store-RIPLEY",
    children: <PlanogramaLG allowOverlap={false} />,
  },
  {
    key: 3,
    label: "General-RIPLEY",
    children: <PlanogramaGeneral allowOverlap={false} />,
  },
  {
    key: 4,
    label: "Historial-RIPLEY",
    children: <History />,
  },
];
