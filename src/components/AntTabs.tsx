import { Tabs } from "antd";
import type { TabsProps } from "antd";
import PlanogramaGeneral from "./PlanogramaGeneralComponent";
import PlanogramaLG from "./PlanogramaLGComponent";
import PlanogramaGeneralRipley from "./PlanogramaGeneralRipley";
import History from "./History";

const AntTabs = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "LG Main",
      children: <PlanogramaLG allowOverlap={false} />,
    },
    {
      key: "2",
      label: "LG Store ",
      children: <PlanogramaLG allowOverlap={false} />,
    },
    {
      key: "3",
      label: "General",
      children: <PlanogramaGeneral allowOverlap={false} />,
    },
    {
      key: "4",
      label: "Historial",
      children: <History />,
    },
    {
      key: "5",
      label: "Ripley",
      children: <PlanogramaGeneralRipley allowOverlap={false} />,
    },
  ];

  return (
    <>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  );
};

export default AntTabs;
