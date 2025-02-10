import useStore from "@/utils/store";
import { Sublime } from "./ui/sublime/sublime";
import { MdVolumeOff } from "react-icons/md";
import { MdVolumeUp } from "react-icons/md";

export const VideoBlock = ({ blok, settings }: any) => {
  const { content } = settings.story;

  const { infoOpen, setInfoOpen, volumeOpen, setVolumeOpen } = useStore();

  const handleOnClickVolume = () => {
    setVolumeOpen(!volumeOpen);
  };
  const handleOnClickInfo = () => {
    setInfoOpen(!infoOpen);
  };

  return (
    <div className="relative w-[100%] h-[100vh]">
      <video
        src={blok?.video?.filename}
        autoPlay
        muted
        loop
        className="w-full"
      ></video>
      <div className="absolute top-36 left-0 z-10"></div>
      <div className="flex justify-between z-10 w-[100%] absolute bottom-0">
        <div className="button z-10" onClick={() => handleOnClickInfo()}>
          {infoOpen ? <div>Stäng</div> : <div>{content.info_link}</div>}
        </div>
        {blok.mute_button && (
          <div
            className="button-volume flex justify-between"
            onClick={() => handleOnClickVolume()}
          >
            {volumeOpen ? (
              <MdVolumeUp fontSize={30} />
            ) : (
              <MdVolumeOff fontSize={30} />
            )}
          </div>
        )}
      </div>

      <Sublime blok={blok} />
    </div>
  );
};
