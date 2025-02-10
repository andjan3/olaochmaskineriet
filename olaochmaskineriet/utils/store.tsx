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
  videoBlock: string;
  setVideoBlock: (value: string) => void;
  soundOn: string;
  setSoundOn: (value: string) => void;
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
  videoBlock: "",
  setVideoBlock: (value) => set({ videoBlock: value }),
  soundOn: "",
  setSoundOn: (value) => set({ soundOn: value }),
}));

export default useStore;
