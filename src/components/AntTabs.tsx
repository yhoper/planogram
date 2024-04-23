import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Planogramad from "./planogramad";
import Planogramaf from "./planogramaf";
import History from "./History";
import DemoComponent from "./DemoComponent";

const AntTabs = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "LG",
      children: <Planogramaf />,
    },
    {
      key: "2",
      label: "General",
      children: <Planogramad />,
    },
    {
      key: "3",
      label: "Historial",
      children: <History/>
    },
    {
      key: "4",
      label: "Example",
      children: <DemoComponent/>
    }
    
  ];

  return (
    <>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  );
};

export default AntTabs;
