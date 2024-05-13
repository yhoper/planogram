import create from "zustand";
import CollapseInterface from "./interface";

export const useCollapseStore = create<CollapseInterface>((set) => ({
  collapsed: false,
  setCollapsed: (value) => set({ collapsed: value }),
}));
