import create from "zustand";
import Interface from "./interface";

export const useSidebarState = create<Interface>((set) => ({
  currentSection: "dashboard",
  setCurrentSection: (section) => set({ currentSection: section }),
}));
