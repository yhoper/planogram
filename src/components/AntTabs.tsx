import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Planogramad from "./planogramad";
import Planogramae from "./planogramae";
import Planogramaf from "./planogramaf";
import History from "./History";

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
    }
    
  ];

  return (
    <>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  );
};

export default AntTabs;
