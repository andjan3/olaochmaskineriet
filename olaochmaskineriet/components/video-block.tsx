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
    videoBlock,
    soundOpen,
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
    <div className="relative w-[100%] h-full mt-16 lg:mt-0">
      <video
        src={blok?.video?.filename}
        autoPlay
        playsInline
        muted={!(volumeOpen && soundOn == blok._uid)}
        loop
        className="w-full z-10"
      ></video>

      <div className="absolute lg:top-36 left-0 z-10"></div>
      <div className="flex justify-between items-center z-10 w-[100%] absolute -bottom-12 lg:bottom-0">
        <div
          className="button-info z-10 lg:flex items-center"
          onClick={() => {
            handleOnClickInfo();
            handleVideoBlock(blok._uid);
          }}
        >
          {infoOpen && videoBlock == blok._uid ? (
            <div>Stäng</div>
          ) : (
            <div>{content.info_link}</div>
          )}
        </div>
        {blok.mute_button && (
          <div
            className={`${
              soundOpen ? "hidden " : "button-volume lg:flex justify-between"
            }`}
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
