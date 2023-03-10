import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import UserSVG from "../../assets/images/user.svg";
import { ChevronDownIcon, GlobeAmericasIcon } from "@heroicons/react/24/solid";
import {
  PhotoIcon,
  VideoCameraIcon,
  NewspaperIcon,
  EllipsisHorizontalIcon,
  ClockIcon,
  ChatBubbleLeftEllipsisIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";

import EmojiPicker from "emoji-picker-react";

const Modal = ({ isOpen, onClose }: any) => {
  // if (!isOpen) {
  //   return null;
  // }

  const [isEmoji, setIsEmoji] = useState<boolean>(false);
  const emojiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        emojiRef.current &&
        !emojiRef.current.contains(event.target as Node)
      ) {
        setIsEmoji(!isEmoji);
      }
    }

    // Add event listener to document
    document.addEventListener("click", handleClickOutside);

    // Remove event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [emojiRef]);

  return ReactDOM.createPortal(
    <div className="fixed top-0 z-[9999] w-screen h-screen flex justify-center items-start bg-black/75">
      <div className="w-[552px] rounded-md bg-[#fff] mt-[50px] max-h-[705px]">
        <div className="flex flex-row justify-between items-center py-[16px] px-[24px] border-b">
          <h2 className="text-black/90 font-[400] text-xl">Create a post</h2>
          <div
            className="background-opacity-color rounded-full w-[40px] h-[40px] flex justify-center items-center"
            onClick={onClose}
          >
            <XMarkIcon width={28} height={28} />
          </div>
        </div>

        <div className="flex flex-row justify-start items-center px-[24px] py-[12px]">
          <div>
            <img
              className="w-[48px] h-[48px] rounded-full"
              src={UserSVG}
              alt="User SVG"
            />
          </div>
          <div className="flex flex-col items-center ml-[8px] h-[70px]">
            <div className="w-full font-[600] text-[16px]">Murad Sadigov</div>
            <button
              className="w-[114px] flex flex-row justify-around items-center text-black/60 border px-[12px] py-[5px] 
            border-black/60 rounded-[1.6rem] hover:bg-black/10 font-[600] duration-[167ms] hover:border-2 text-[14px]"
            >
              <div>
                <GlobeAmericasIcon width={18} height={18} />
              </div>
              <p className="px-[4px]">Anyone</p>
              <div>
                <ChevronDownIcon width={18} height={18} />
              </div>
            </button>
          </div>
        </div>

        {/* Text area */}
        <div className="min-h-[120px] max-h-[430px] py-[12px] px-[24px] overflow-auto">
          <p
            className="w-full min-h-[96px] outline-none before:content-['asdda'] before:text-black/60"
            contentEditable
          ></p>
        </div>

        {/* Emoji Picker */}
        <div className="relative py-[12px] px-[24px] ">
          <div
            onClick={() => setIsEmoji(!isEmoji)}
            className="rounded-full w-[40px] h-[40px] flex justify-center items-center background-opacity-color"
          >
            <FaceSmileIcon width={28} height={28} />
          </div>
          {isEmoji && (
            <div ref={emojiRef} className="absolute w-fit h-fit">
              <EmojiPicker
                height={400}
                onEmojiClick={() => setIsEmoji(!isEmoji)}
              />
            </div>
          )}
        </div>

        {/* Bottom of the modal */}
        <div className="py-[12px] px-[24px] flex flex-row items-center w-full">
          <div className="pr-[8px] flex flex-row items-center justify-between w-fit border-r">
            <div className="rounded-full w-[40px] h-[40px] flex justify-center items-center background-opacity-color">
              <PhotoIcon width={28} height={28} />
            </div>
            <div className="rounded-full w-[40px] h-[40px] flex justify-center items-center background-opacity-color">
              <VideoCameraIcon width={28} height={28} />
            </div>
            <div className="rounded-full w-[40px] h-[40px] flex justify-center items-center background-opacity-color">
              <NewspaperIcon width={28} height={28} />
            </div>
            <div className="rounded-full w-[40px] h-[40px] flex justify-center items-center background-opacity-color">
              <EllipsisHorizontalIcon width={28} height={28} />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <div className="pl-[8px]">
              <button className="rounded-full w-[100px] flex flex-row justify-center items-center gap-1 font-[600] text-black/60 background-opacity-color">
                <ChatBubbleLeftEllipsisIcon width={16} height={16} />
                Anyone
              </button>
            </div>
            <div className="flex flex-row items-center">
              <div className="rounded-full w-[40px] h-[40px] flex justify-center items-center background-opacity-color">
                <ClockIcon width={28} height={28} />
              </div>
              <button className="w-[70px] h-[32px] rounded-full">Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
