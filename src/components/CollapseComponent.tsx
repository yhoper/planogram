import { Collapse } from "antd";
import type { CollapseProps } from "antd";
import AntTabs from "./AntTabs";

const CollapseComponent = () => {
  const text = `
  PLANOGRAMA CORRESPONDIENTE A LA TIENDA Y UBICACIÓN HOME APPLIANCES
`;

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Home Entertainment",
      children: <AntTabs />,
    },
    {
      key: "3",
      label: "Home Appliances",
      children: <p>{text}</p>,
    },
  ];

  return (
    <>
      <Collapse accordion items={items} />
    </>
  );
};

export default CollapseComponent;
