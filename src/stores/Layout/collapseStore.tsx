import create from "zustand";

interface CollapseState {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}

export const useCollapseStore = create<CollapseState>((set) => ({
  collapsed: false,
  setCollapsed: (value) => set({ collapsed: value }),
}));
