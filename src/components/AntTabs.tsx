import { Tabs } from "antd";
import type { TabsProps } from "antd";
import PlanogramaGeneralRipley from "./PlanogramaGeneralRipley";
import PlanogramaGeneralRipleyMain from "./PlanogramaGeneralRipleyMain";

import History from "./History";

const AntTabs = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Ripley General",
      children: <PlanogramaGeneralRipley allowOverlap={false} />,
    },
    {
      key: "2",
      label: "Ripley Main",
      children: <PlanogramaGeneralRipleyMain allowOverlap={false} />,
    },
    {
      key: "3",
      label: "Ripley Store",
      children: <PlanogramaGeneralRipleyMain allowOverlap={false} />,
    },
    {
      key: "4",
      label: "Historial",
      children: <History />,
    },
  ];

  return (
    <>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  );
};

export default AntTabs;
