// useLanguageStore.ts
import create from "zustand";
import LanguageType from "./interface";

const useLanguageStore = create<LanguageType>((set) => ({
  language: "es",
  setLanguage: (language) => set({ language }),
}));

export { useLanguageStore };
