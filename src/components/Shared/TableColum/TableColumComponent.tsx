import React, { useState } from "react";

import { TableColumnsType, TableProps, Space, Table } from "antd";
import { useTranslation } from "react-i18next";

import { DataType } from "./interface";
import { Link } from "react-router-dom";

interface Sorts {
  columnKey: string;
  order: "ascend" | "descend";
}

const TableColumComponent: React.FC = () => {
  const { t } = useTranslation();
  const [sortedInfo, setSortedInfo] = useState<Sorts>();

  const columns: TableColumnsType<DataType> = [
    {
      title: t("txtStore"),
      dataIndex: "store",
      filters: [
        {
          text: "Ripley",
          value: "Ripley",
        },
        {
          text: "Falabella",
          value: "Falabella",
        },
        {
          text: "Paris",
          value: "Paris",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.store.includes(value as string),

      width: "15%",
    },
    {
      title: t("txtAddress"),
      dataIndex: "address",
      width: "15%",
      ellipsis: true,
    },
    {
      title: t("txtCity"),
      dataIndex: "city",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value, record) => record.address.startsWith(value as string),
      filterSearch: true,
      width: "15%",
    },
    {
      title: t("txtState"),
      dataIndex: "state",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value, record) => record.address.startsWith(value as string),
      filterSearch: true,
      width: "35%",
    },
    {
      title: t("txtAction"),
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`planogram/view/${record.key}`}>{t("txtView")}</Link>
          <Link to={`planogram/update/${record.key}`}>{t("txtUpdate")}</Link>
          <Link to={`planogram/delete/${record.key}`}>{t("txtDelete")}</Link>
        </Space>
      ),
      width: "15%",
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      store: "Ripley",
      address: "Parque Arauco",
      city: "Regíon Metropolitana",
      state: "Las Condes",
    },
    {
      key: "2",
      store: "Falabella",
      address: "Parque Arauco",
      city: "Regíon Metropolitana",
      state: "Las Condes",
    },
    {
      key: "3",
      store: "Paris",
      address: "Parque Arauco",
      city: "Regíon Metropolitana",
      state: "Las Condes",
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
};

export default TableColumComponent;
