import { LayoutItem } from "../interfaces/LayoutItem";
const lgArea = "rgb(182 52 93 / 14%)";
const samsungArea = "#4096ff26";
const pilar = "rgb(188 172 177 / 82%)";
const lgColor = "#b6345d";
const lgMobiliarioColor = "rgb(182 52 93 / 52%)";

const samsungColor = "#142a9fde";
const samsungMobiliarioColor = "rgb(20 42 159 / 30%)";

export const generateLayout = (): LayoutItem[] => [


  {
    x: 42,
    y: 0,
    w: 42,
    h: 25,
    i: "Area LG",
    bgColor: lgArea,
    category: "area",
  },
  {
    x: 0,
    y: 0,
    w: 42.5,
    h: 25,
    i: "Area SAMSUNG",
    bgColor: samsungArea,
    category: "area",
  },

  {
    x: 0,
    y: 0,
    w: 42.7,
    h: 4,
    i: "SAMSUNG TRASERA",
    bgColor: samsungMobiliarioColor,
    category: "furniture",
  },
  {
    x: 0,
    y: 0,
    w: 11,
    h: 1,
    i: "50BU8000",
    bgColor: samsungColor,
    category: "product",
  },
  {
    x: 0,
    y: 1,
    w: 11,
    h: 1,
    i: "HW-B650",
    bgColor: samsungColor,
    category: "product",
  },
  {
    x: 0,
    y: 2,
    w: 11,
    h: 1,
    i: "HW-B550",
    bgColor: samsungColor,
    category: "product",
  },
  {
    x: 0,
    y: 3,
    w: 11,
    h: 1,
    i: "HW-B450",
    bgColor: samsungColor,
    category: "product",
  },

  {
    x: 10.5,
    y: 2,
    w: 11,
    h: 1,
    i: "THE TERRACE",
    bgColor: samsungColor,
    category: "product",
  },

  {
    x: 21.1,
    y: 2,
    w: 11,
    h: 1,
    i: "85QN85B",
    bgColor: samsungColor,
    category: "product",
  },
  {
    x: 21.1,
    y: 3,
    w: 11,
    h: 1,
    i: "HW-Q800B",
    bgColor: samsungColor,
    category: "product",
  },

  {
    x: 31.7,
    y: 2,
    w: 11,
    h: 1,
    i: "60Q65B",
    bgColor: samsungColor,
    category: "product",
  },

  {
    x: 31.7,
    y: 3,
    w: 11,
    h: 1,
    i: "55Q70A",
    bgColor: samsungColor,
    category: "product",
  },

  {
    x: 0,
    y: 6,
    w: 11,
    h: 4,
    i: "SA-MOB-001",
    bgColor: samsungMobiliarioColor,
    category: "furniture",
  },

  {
    x: 1,
    y: 6,
    w: 9,
    h: 1,
    i: "65AU7090",
    bgColor: samsungColor,
    category: "product",
  },

  {
    x: 1,
    y: 8,
    w: 9,
    h: 1,
    i: "55Q700A",
    bgColor: samsungColor,
    category: "product",
  },

  {
    x: 10.4,
    y: 6,
    w: 4,
    h: 1,
    i: "MXT40",
    bgColor: samsungColor,
    category: "product",
  },

  {
    x: 10.4,
    y: 7,
    w: 4,
    h: 1,
    i: "MXT50",
    bgColor: samsungColor,
    category: "product",
  },
  {
    x: 10.4,
    y: 8,
    w: 4,
    h: 1,
    i: "MXT70",
    bgColor: samsungColor,
    category: "product",
  },

  {
    x: 1,
    y: 9,
    w: 9,
    h: 1,
    i: "HW-Q600B",
    bgColor: samsungColor,
    category: "product",
  },

  {
    x: 15,
    y: 6,
    w: 11,
    h: 3,
    i: "SA-MOB-002",
    bgColor: samsungMobiliarioColor,
    category: "furniture",
  },
  {
    x: 17,
    y: 6,
    w: 7,
    h: 1,
    i: "50Q80B",
    bgColor: samsungColor,
    category: "product",
  },
  {
    x: 17,
    y: 8,
    w: 7,
    h: 1,
    i: "55Q80B",
    bgColor: samsungColor,
    category: "product",
  },

  {
    x: 29,
    y: 5,
    w: 11,
    h: 5,
    i: "SA-MOB-003",
    bgColor: samsungMobiliarioColor,
    category: "furniture",
  },
  {
    x: 29,
    y: 6,
    w: 5.8,
    h: 1,
    i: "75QN85B",
    bgColor: samsungColor,
    category: "product",
  },
  {
    x: 34.2,
    y: 6,
    w: 5.8,
    h: 1,
    i: "70BU8000",
    bgColor: samsungColor,
    category: "product",
  },

  {
    x: 29,
    y: 8,
    w: 5.8,
    h: 1,
    i: "HW-A650",
    bgColor: samsungColor,
    category: "product",
  },
  {
    x: 34.2,
    y: 8,
    w: 5.8,
    h: 1,
    i: "HW-A550",
    bgColor: samsungColor,
    category: "product",
  },

  {
    x: 16,
    y: 11,
    w: 11,
    h: 3,
    i: "SA-MOB-005",
    bgColor: samsungMobiliarioColor,
    category: "furniture",
  },

  {
    x: 18,
    y: 11,
    w: 7,
    h: 1,
    i: "65BU8000",
    bgColor: samsungColor,
    category: "product",
  },

  {
    x: 18,
    y: 13,
    w: 7,
    h: 1,
    i: "65S95B",
    bgColor: samsungColor,
    category: "product",
  },

  {
    x: 16,
    y: 21,
    w: 11,
    h: 3,
    i: "SA-MOB-008",
    bgColor: samsungMobiliarioColor,
    category: "furniture",
  },

  {
    x: 16,
    y: 21,
    w: 11,
    h: 1,
    i: "THE FRAME 55''",
    bgColor: samsungColor,
    category: "product",
  },

  {
    x: 16,
    y: 22,
    w: 4,
    h: 1,
    i: "55QN700B",
    bgColor: samsungColor,
    category: "product",
  },

  {
    x: 23,
    y: 22,
    w: 4,
    h: 1,
    i: "65QN85B",
    bgColor: samsungColor,
    category: "product",
  },

  {
    x: 16,
    y: 23,
    w: 11,
    h: 1,
    i: "55QN90B",
    bgColor: samsungColor,
    category: "product",
  },

  {
    x: 31,
    y: 16,
    w: 11,
    h: 3,
    i: "SA-MOB-006",
    bgColor: samsungMobiliarioColor,
    category: "furniture",
  },

  {
    x: 31,
    y: 16,
    w: 11,
    h: 1,
    i: "THE SERIF 50''",
    bgColor: samsungColor,
    category: "product",
  },

  {
    x: 31,
    y: 16.77,
    w: 3,
    h: 1,
    i: "HW-S801B",
    bgColor: samsungColor,
    category: "product",
  },

  {
    x: 38,
    y: 16.77,
    w: 4,
    h: 1,
    i: "THE FRAME 43'",
    bgColor: samsungColor,
    category: "product",
  },
  {
    x: 38,
    y: 17.49,
    w: 4,
    h: 1,
    i: "THE FRAME 32'",
    bgColor: samsungColor,
    category: "product",
  },

  {
    x: 0,
    y: 12,
    w: 11,
    h: 4,
    i: "SA-MOB-004",
    bgColor: samsungMobiliarioColor,
    category: "furniture",
  },

  {
    x: 1,
    y: 12,
    w: 9,
    h: 1,
    i: "50Q65B",
    bgColor: samsungColor,
    category: "product",
  },

  {
    x: 1,
    y: 14,
    w: 9,
    h: 1,
    i: "43QN90B",
    bgColor: samsungColor,
    category: "product",
  },
  {
    x: 1,
    y: 15,
    w: 9,
    h: 1,
    i: "HW-Q700B",
    bgColor: samsungColor,
    category: "product",
  },

  {
    x: 0,
    y: 18,
    w: 11,
    h: 4,
    i: "SA-MOB-007",
    bgColor: samsungMobiliarioColor,
    category: "furniture",
  },

  {
    x: 1,
    y: 18,
    w: 9,
    h: 1,
    i: "THE SERO",
    bgColor: samsungColor,
    category: "product",
  },
  {
    x: 1,
    y: 21,
    w: 9,
    h: 1,
    i: "THE SERIF 55",
    bgColor: samsungColor,
    category: "product",
  },

  {
    x: 42.7,
    y: 0,
    w: 42,
    h: 4,
    i: "LG TRASERA",
    bgColor: lgMobiliarioColor,
    category: "product",
  },

  {
    x: 42,
    y: 2,
    w: 9,
    h: 1,
    i: "75QNED90",
    bgColor: lgColor,
    category: "product",
  },
  {
    x: 42,
    y: 3,
    w: 9,
    h: 1,
    i: "SN6",
    bgColor: lgColor,
    category: "product",
  },

  {
    x: 50.6,
    y: 2,
    w: 9,
    h: 1,
    i: "77G2",
    bgColor: lgColor,
    category: "product",
  },

  {
    x: 59.2,
    y: 2,
    w: 9,
    h: 1,
    i: "65A2",
    bgColor: lgColor,
    category: "product",
  },

  {
    x: 79,
    y: 0,
    w: 10,
    h: 4,
    i: "PILAR",
    bgColor: pilar,
    category: "pilar",
  },
  {
    x: 74,
    y: 0,
    w: 4,
    h: 1,
    i: "43UQ7500",
    bgColor: lgColor,
    category: "product",
  },
  {
    x: 74,
    y: 1,
    w: 4,
    h: 1,
    i: "SN4",
    bgColor: lgColor,
    category: "product",
  },
  {
    x: 74,
    y: 2,
    w: 4,
    h: 1,
    i: "SP2",
    bgColor: lgColor,
    category: "product",
  },
  {
    x: 74,
    y: 3,
    w: 4,
    h: 1,
    i: "OL45	",
    bgColor: lgColor,
    category: "product",
  },

  {
    x: 42,
    y: 5,
    w: 12,
    h: 10,
    i: "LG-MOB-001",
    bgColor: lgMobiliarioColor,
    category: "product",
  },
  {
    x: 42,
    y: 5,
    w: 12,
    h: 1,
    i: "55UP7760",
    bgColor: lgColor,
    category: "product",
  },
  {
    x: 42,
    y: 7,
    w: 6,
    h: 1,
    i: "65NANO75",
    bgColor: lgColor,
    category: "product",
  },
  {
    x: 48,
    y: 7,
    w: 6,
    h: 1,
    i: "65UP7760",
    bgColor: lgColor,
    category: "product",
  },
  {
    x: 42,
    y: 12,
    w: 6,
    h: 1,
    i: "65QNED90",
    bgColor: lgColor,
    category: "product",
  },
  {
    x: 48,
    y: 12,
    w: 6,
    h: 1,
    i: "60UQ8050",
    bgColor: lgColor,
    category: "product",
  },
  {
    x: 42,
    y: 14,
    w: 12,
    h: 1,
    i: "75QNED85",
    bgColor: lgColor,
    category: "product",
  },

  {
    x: 57,
    y: 5,
    w: 12,
    h: 10,
    i: "LG-MOB-002",
    bgColor: lgMobiliarioColor,
    category: "product",
  },

  {
    x: 57,
    y: 5,
    w: 12,
    h: 1,
    i: "43NANO75",
    bgColor: lgColor,
    category: "product",
  },
  {
    x: 57,
    y: 7,
    w: 6,
    h: 1,
    i: "55QNED80",
    bgColor: lgColor,
    category: "product",
  },
  {
    x: 63,
    y: 7,
    w: 6,
    h: 1,
    i: "OLED55B2",
    bgColor: lgColor,
    category: "product",
  },
  {
    x: 57,
    y: 12,
    w: 6,
    h: 1,
    i: "65NANO80",
    bgColor: lgColor,
    category: "product",
  },
  {
    x: 63,
    y: 12,
    w: 6,
    h: 1,
    i: "OLED55C2",
    bgColor: lgColor,
    category: "product",
  },
  {
    x: 57,
    y: 14,
    w: 12,
    h: 1,
    i: "OLED83C1",
    bgColor: lgColor,
    category: "product",
  },

  {
    x: 74,
    y: 5,
    w: 12,
    h: 10,
    i: "LG-MOB-003",
    bgColor: lgMobiliarioColor,
    category: "product",
  },

  {
    x: 74,
    y: 5,
    w: 12,
    h: 1,
    i: "1-43NANO75",
    bgColor: lgColor,
    category: "product",
  },
  {
    x: 84,
    y: 7,
    w: 4,
    h: 1,
    i: "RN5",
    bgColor: lgColor,
    category: "product",
  },
  {
    x: 84,
    y: 9,
    w: 4,
    h: 1,
    i: "50UQ9050",
    bgColor: lgColor,
    category: "product",
  },
  {
    x: 84,
    y: 7,
    w: 4,
    h: 1,
    i: "RN5",
    bgColor: lgColor,
    category: "product",
  },
  {
    x: 72,
    y: 7,
    w: 4,
    h: 1,
    i: "RN7",
    bgColor: lgColor,
    category: "product",
  },
  {
    x: 72,
    y: 8,
    w: 4,
    h: 1,
    i: "STANDBEMY",
    bgColor: lgColor,
    category: "product",
  },
  {
    x: 76,
    y: 7,
    w: 4,
    h: 1,
    i: "RN9",
    bgColor: lgColor,
    category: "product",
  },
  {
    x: 72,
    y: 11,
    w: 6,
    h: 1,
    i: "OLED48C2",
    bgColor: lgColor,
    category: "product",
  },
  {
    x: 72,
    y: 12,
    w: 6,
    h: 1,
    i: "FN6",
    bgColor: lgColor,
    category: "product",
  },
  {
    x: 72,
    y: 13,
    w: 6,
    h: 1,
    i: "QP5W",
    bgColor: lgColor,
    category: "product",
  },
  {
    x: 84,
    y: 12,
    w: 6,
    h: 1,
    i: "55UQ8050",
    bgColor: lgColor,
    category: "product",
  },
  {
    x: 84,
    y: 14,
    w: 12,
    h: 1,
    i: "OLED65C2",
    bgColor: lgColor,
    category: "product",
  },

  {
    x: 74,
    y: 16,
    w: 12,
    h: 6,
    i: "LG-PILAR-004",
    bgColor: pilar,
    category: "pilar",
  },
  {
    x: 72,
    y: 20,
    w: 6,
    h: 1,
    i: "OLED42C2",
    bgColor: lgColor,
    category: "product",
  },



];
