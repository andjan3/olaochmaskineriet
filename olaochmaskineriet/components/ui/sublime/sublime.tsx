/* import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import useStore from "@/utils/store";

export const Sublime = ({ blok }: any) => {
  const { infoOpen, videoBlock } = useStore();
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
      {videoBlock == blok._uid && (
        <div>
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
      )}
    </div>
  );
};
 */

import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import useStore from "@/utils/store";

export const Sublime = ({ blok }: any) => {
  const { infoOpen, videoBlock } = useStore();
  const {
    info_content,
    email_contact,
    sublime,
    contact,
    email_sublime,
    fb_link,
    ig_link,
  } = blok;

  return (
    <>
      {infoOpen && videoBlock == blok._uid && (
        <div className="lg:absolute lg:bottom-24 lg:left-6 text-white lg:w-[50%] sublime-container lg:rounded-lg pb-20">
          <div>
            <div className="sublime p-6">{render(info_content)}</div>
            <div className="lg:flex border-t-2 p-4 lg:p-0 lg:mx-4">
              <div className="lg:border-r-2 lg:p-4 sublime">
                {render(email_contact)}
              </div>
              <div className="lg:border-r-2 lg:p-4 sublime">
                <div className="text-black lg:text-white pt-4 lg:pt-0">
                  {sublime}
                </div>
                <div className="sublime">{render(contact)}</div>
                <div className="sublime pb-4 lg:pb-0">
                  {render(email_sublime)}
                </div>
              </div>
              <div className="flex lg:justify-center items-center gap-4 lg:w-[25%]">
                <Link href={fb_link.cached_url}>
                  <FaFacebook
                    fontSize={30}
                    className="text-black lg:text-white"
                  />
                </Link>
                <Link href={ig_link.cached_url}>
                  <FaInstagram
                    fontSize={30}
                    className="text-black lg:text-white"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="lg:hidden text-white lg:w-[50%] sublime-container">
        <div>
          <div className="sublime p-6">{render(info_content)}</div>
          <div className="border-t-2 p-4">
            <div className="sublime">{render(email_contact)}</div>
            <div className="l sublime">
              <div className="text-black pt-4">{sublime}</div>
              <div className="sublime">{render(contact)}</div>
              <div className="sublime pb-4">{render(email_sublime)}</div>
            </div>
            <div className="flex lg:justify-center items-center gap-4 lg:w-[25%]">
              <Link href={fb_link.cached_url}>
                <FaFacebook
                  fontSize={30}
                  className="text-black lg:text-white"
                />
              </Link>
              <Link href={ig_link.cached_url}>
                <FaInstagram
                  fontSize={30}
                  className="text-black lg:text-white"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
