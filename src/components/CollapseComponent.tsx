import { Collapse } from "antd";
import type { CollapseProps } from "antd";
import AntTabs from "./AntTabs";
const CollapseComponent = () => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
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
