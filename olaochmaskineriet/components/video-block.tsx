import useStore from "@/utils/store";
import { Sublime } from "./ui/sublime/sublime";
import { MdVolumeOff } from "react-icons/md";
import { MdVolumeUp } from "react-icons/md";

export const VideoBlock = ({ blok, settings }: any) => {
  const { content } = settings.story;

  const {
    infoOpen,
    setInfoOpen,
    volumeOpen,
    setVolumeOpen,
    setVideoBlock,
    setSoundOn,
    soundOn,
  } = useStore();

  const handleOnClickVolume = () => {
    setVolumeOpen(!volumeOpen);
  };
  const handleOnClickInfo = () => {
    setInfoOpen(!infoOpen);
  };

  const handleVideoBlock = (id: string) => {
    setVideoBlock(id);
  };

  const handleSoundOn = (id: string) => {
    setSoundOn(id);
  };

  return (
    <div className="relative w-[100%] h-full">
      <video
        src={blok?.video?.filename}
        autoPlay
        muted={!(volumeOpen && soundOn == blok._uid)}
        loop
        className="w-full"
      ></video>
      <div className="absolute top-36 left-0 z-10"></div>
      <div className="flex justify-between z-10 w-[100%] absolute bottom-0">
        <div
          className="button z-10"
          onClick={() => {
            handleOnClickInfo();
            handleVideoBlock(blok._uid);
          }}
        >
          {infoOpen ? <div>Stäng</div> : <div>{content.info_link}</div>}
        </div>
        {blok.mute_button && (
          <div
            className="button-volume flex justify-between"
            onClick={() => handleOnClickVolume()}
          >
            {volumeOpen && soundOn == blok._uid ? (
              <MdVolumeUp
                fontSize={30}
                onClick={() => handleSoundOn(blok._uid)}
              />
            ) : (
              <MdVolumeOff
                fontSize={30}
                onClick={() => handleSoundOn(blok._uid)}
              />
            )}
          </div>
        )}
      </div>

      <Sublime blok={blok} />
    </div>
  );
};
