import { SoundComponent } from "./ui/sound-component";

export const VideoBlock = ({ blok, settings }: any) => {
  console.log(blok.video.filename);

  return (
    <div className="relative w-[100%]">
      <video
        src={blok?.video?.filename}
        autoPlay
        muted
        loop
        className="w-full"
      ></video>
      <div className="absolute top-36 left-0 z-10"></div>
    </div>
  );
};
