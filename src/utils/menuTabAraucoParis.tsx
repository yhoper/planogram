import { MenuTabs } from "../interfaces/MenuTabs";
import PlanogramaGeneral from "../components/PlanogramaGeneralComponent";
import PlanogramaLG from "../components/PlanogramaLGComponent";
import History from "../components/History";

export const menuTabAraucoParis = (): MenuTabs[] => [
  {
    key: 1,
    label: "LG Main",
    children: <PlanogramaLG allowOverlap={false} />,
  },
  {
    key: 2,
    label: "LG Store ",
    children: <PlanogramaLG allowOverlap={false} />,
  },
  {
    key: 3,
    label: "General",
    children: <PlanogramaGeneral allowOverlap={false} />,
  },
  {
    key: 4,
    label: "Historial",
    children: <History />,
  },
];
