import useStore from "@/utils/store";
import Image from "next/image";

export const SoundComponent = ({ settings }: any) => {
  const { soundOpen } = useStore();

  const { content } = settings.story;
  return (
    <div className="fixed mx-auto h-screen z-10 w-[100%] p-4">
      {soundOpen && (
        <div className="grid grid-cols-3 items-center justify-center mx-auto w-full gap-4">
          {content.sound.map((el: any, index: number) => {
            return (
              <div className="flex flex-col gap-4" key={index}>
                <div className="relative h-[400px]">
                  <Image
                    src={el?.image?.filename}
                    fill
                    className="object-cover"
                    alt={el?.image?.alt}
                  />
                </div>
                <div className="text-white">{el.title}</div>
                <audio controls src={el.sound.filename}></audio>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
