import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import useStore from "@/utils/store";

export const Sublime = ({ blok }: any) => {
  const { infoOpen } = useStore();
  const {
    info_content,
    email_contact,
    sublime,
    contact,
    email_sublime,
    fb_link,
    ig_link,
  } = blok;

  if (!infoOpen) {
    return null;
  }

  return (
    <div className="absolute bottom-24 left-6 text-white w-[45%] sublime-container rounded-lg">
      <div className="sublime p-6">{render(info_content)}</div>
      <div className="flex border-t-2 mx-4">
        <div className="border-r-2 p-4">{render(email_contact)}</div>
        <div className="border-r-2 p-4">
          <div>{sublime}</div>
          <div className="sublime">{render(contact)}</div>
          <div className="sublime">{render(email_sublime)}</div>
        </div>
        <div className="flex justify-center items-center gap-4 w-[25%]">
          <Link href={fb_link.cached_url}>
            <FaFacebook fontSize={30} />
          </Link>
          <Link href={ig_link.cached_url}>
            <FaInstagram fontSize={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};
