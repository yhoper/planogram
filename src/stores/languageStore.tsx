// languageStore.ts
import create from "zustand";

interface LanguageState {
  language: string;
}
interface LanguageActions {
  setLanguage: (lng: string) => void;
}

type LanguageStore = LanguageState & LanguageActions;

const useLanguageStore = create<LanguageStore>((set) => ({
  language: "es",
  setLanguage: (lng) => set({ language: lng }),
}));

export default useLanguageStore;
