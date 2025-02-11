"use client";

import useStore from "@/utils/store";
import Image from "next/image";
import { SoundComponent } from "../sound-component";
import SongkickWidget from "../iframe/iframe-component";

export const Nav = ({ settings }: any) => {
  const {
    soundOpen,
    setSoundOpen,
    liveOpen,
    setLiveOpen,
    infoOpen,
    setInfoOpen,
    volumeOpen,
    setVolumeOpen,
  } = useStore();

  const handleOnClickSound = () => {
    setSoundOpen(!soundOpen);
  };

  const handleOnClickLive = () => {
    setLiveOpen(!liveOpen);
  };

  const handleOnClickInfo = () => {
    setInfoOpen(!infoOpen);
  };
  const handleOnClickVolume = () => {
    setVolumeOpen(!volumeOpen);
  };

  const { content } = settings.story;
  return (
    <header className="absolute top-0 w-[100%] h-[100vh] mt-16 lg:mt-0">
      <nav className="lg:flex justify-between w-full ">
        <div className="lg:w-[350px] h-[10vh] relative">
          <Image
            src={content.logo.filename}
            fill
            className="object-cover z-10 mt-4 lg:mt-10"
            alt={content.logo.alt}
          />
        </div>

        <div className="flex z-20 fixed top-0 lg:static w-full justify-center lg:justify-end bg-white lg:bg-transparent">
          <div className="button z-10" onClick={() => handleOnClickSound()}>
            {soundOpen ? <div>Stäng</div> : <div>{content.podd_link}</div>}
          </div>
          <div className="button" onClick={() => handleOnClickLive()}>
            {liveOpen ? <div>Stäng</div> : <div>{content.live_link}</div>}
          </div>
        </div>
      </nav>
      <SoundComponent settings={settings} />
      {liveOpen && <SongkickWidget />}
    </header>
  );
};
