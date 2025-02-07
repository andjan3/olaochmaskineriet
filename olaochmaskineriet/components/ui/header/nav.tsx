"use client";

import useStore from "@/utils/store";
import Image from "next/image";
import { useState } from "react";
import { SoundComponent } from "../sound-component";

export const Nav = ({ settings }: any) => {
  console.log(settings.story.content);

  const { soundOpen, setSoundOpen, liveOpen, setLiveOpen } = useStore();

  const handleOnClickSound = () => {
    setSoundOpen(!soundOpen);
  };

  const handleOnClickLive = () => {
    setLiveOpen(!liveOpen);
  };

  const { content, live } = settings.story;
  return (
    <header className="absolute top-0 w-[100%]">
      <nav className="flex justify-between w-full ">
        <div className="w-[350px] h-[10vh] relative">
          <Image
            src={content.logo.filename}
            fill
            className="object-cover z-10 mt-10"
            alt={content.logo.alt}
          />
        </div>
        <div className="flex z-10">
          <div className="button z-10" onClick={() => handleOnClickSound()}>
            {soundOpen ? <div>Stäng</div> : <div>{content.link}</div>}
          </div>
          <div className="button" onClick={() => handleOnClickLive()}>
            {liveOpen ? <div>Stäng</div> : <div>{content.second_link}</div>}
          </div>
        </div>
      </nav>
      <SoundComponent settings={settings} />
    </header>
  );
};
