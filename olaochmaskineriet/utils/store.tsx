import { create } from "zustand";

interface IsOpenMenu {
  soundOpen: boolean;
  setSoundOpen: (value: boolean) => void;
  liveOpen: boolean;
  setLiveOpen: (value: boolean) => void;
  infoOpen: boolean;
  setInfoOpen: (value: boolean) => void;
  volumeOpen: boolean;
  setVolumeOpen: (value: boolean) => void;
}

const useStore = create<IsOpenMenu>((set) => ({
  soundOpen: false,
  setSoundOpen: (value) => set({ soundOpen: value }),
  liveOpen: false,
  setLiveOpen: (value) => set({ liveOpen: value }),
  infoOpen: false,
  setInfoOpen: (value) => set({ infoOpen: value }),
  volumeOpen: false,
  setVolumeOpen: (value) => set({ volumeOpen: value }),
}));

export default useStore;
