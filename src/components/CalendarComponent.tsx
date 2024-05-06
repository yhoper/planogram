import React, { useState } from "react";
import { Calendar, theme, Input, Flex } from "antd";
import type { Dayjs } from "dayjs";
import { Select } from "antd";

const CalendarComponent: React.FC = () => {
  const { token } = theme.useToken();
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleInputChange = () => {
    setShowCalendar(!showCalendar);
  };

  const handleSelectDate = (value: Dayjs) => {
    if (!startDate) {
      setStartDate(value);
    } else if (!endDate) {
      setEndDate(value);
      setShowCalendar(false); // Cerrar el modal al seleccionar la segunda fecha
    } else {
      // Si ya hay un rango seleccionado, limpiar y seleccionar la fecha de inicio
      setStartDate(value);
      setEndDate(null);
    }
  };

  const wrapperStyle: React.CSSProperties = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
    position: "relative",
  };

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  // Filter `option.label` match the user type `input`
  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <div style={wrapperStyle} className="contnantCalendar">
      <Flex vertical gap={12}>
        <Select
          style={{ width: "190px", marginRight: "20px" }}
          showSearch
          placeholder="Seleccione el modelo"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={filterOption}
          options={[
            {
              value: "55QNED80",
              label: "55QNED80",
            },
            {
              value: "55QNED85",
              label: "55QNED85",
            },
            {
              value: "55UP7760",
              label: "55UP7760",
            },
            {
              value: "55NANO80SQA",
              label: "55NANO80SQA",
            },
            {
              value: "50UQ7500",
              label: "50UQ7500",
            },
            {
              value: "50UQ8050",
              label: "50UQ8050",
            },
            {
              value: "55OLED B2",
              label: "55OLED B2",
            },
            {
              value: "55OLED C2",
              label: "55OLED C2",
            },
          ]}
        />
      </Flex>
      <Flex vertical gap={12}>
        <Input
          style={{ width: "190px", marginRight: "20px" }}
          placeholder="Fecha desde"
          value={startDate ? startDate.format("YYYY-MM-DD") : ""}
          onChange={() => {}} // No permitimos la edición directa del input
          onClick={handleInputChange}
        />
      </Flex>
      <Flex vertical gap={12}>
        <Input
          style={{ width: "190px", marginRight: "20px" }}
          placeholder="Fecha hasta"
          value={endDate ? endDate.format("YYYY-MM-DD") : ""}
          onChange={() => {}}
          onClick={handleInputChange}
        />
      </Flex>
      {showCalendar && (
        <div style={{ position: "absolute", top: "100%", zIndex: 1 }}>
          <Calendar fullscreen={false} onSelect={handleSelectDate} />
        </div>
      )}
    </div>
  );
};

export default CalendarComponent;
