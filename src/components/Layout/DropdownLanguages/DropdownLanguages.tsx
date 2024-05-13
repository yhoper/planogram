import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps } from "antd";
import { useLanguageStore } from "../../../shared/state/languajes";
import { useTranslation } from "react-i18next";

const DropdownLanguage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { setLanguage } = useLanguageStore();

  const handleMenuClick = ({ key }: { key: string }) => {
    setLanguage(key);
    i18n.changeLanguage(key);
  };

  const items: MenuProps["items"] = [
    {
      label: t("txtSpanish"),
      key: "es",
    },
    {
      label: t("txtEnglish"),
      key: "en",
    },
    {
      label: t("txtKorean"),
      key: "ko",
    },
  ];

  const currentLanguageText =
    i18n.language === "es"
      ? "Es"
      : i18n.language === "en"
      ? "En"
      : i18n.language === "ko"
      ? "Ko"
      : "";

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div className="menuLanguages">
      <Dropdown menu={menuProps} trigger={["click"]}>
        <Button>
          {currentLanguageText}
          <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default DropdownLanguage;
