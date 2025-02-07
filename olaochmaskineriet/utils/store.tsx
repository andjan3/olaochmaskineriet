import { create } from "zustand";

interface IsOpenMenu {
  soundOpen: boolean;
  setSoundOpen: (value: boolean) => void;
  liveOpen: boolean;
  setLiveOpen: (value: boolean) => void;
}

const useStore = create<IsOpenMenu>((set) => ({
  soundOpen: false,
  setSoundOpen: (value) => set({ soundOpen: value }),
  liveOpen: false,
  setLiveOpen: (value) => set({ liveOpen: value }),
}));

export default useStore;
