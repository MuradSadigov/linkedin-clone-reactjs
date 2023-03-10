import React, { useState } from "react";
import {
  HandThumbUpIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ArrowPathIcon,
  PaperAirplaneIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { GlobeAmericasIcon } from "@heroicons/react/24/solid";
import {
  LikeActionClapSVG,
  LikeActionFunnySVG,
  LikeActionGiveHeartSVG,
  LikeActionLampSVG,
  LikeActionLoveSVG,
  LikeActionThumbUpSVG,
  UserSVG,
} from "../../../assets/index";
import MountainPhoto from "./mountain.jpg";

const Post = () => {
  const [isTextShown, setIsTextShown] = useState<boolean>(false);
  const [isShownActions, setIsShownActions] = useState<boolean>(false);

  return (
    <div className="bg-[#fff] w-full rounded-xl flex flex-col border shadow-sm mb-[8px]">
      {/* User Info */}
      <div className="relative flex flex-row pt-[12px] pr-[40px] pl-[16px] mb-[8px]">
        <div className="flex flex-row">
          <div className="w-[48px] h-[48px] flex justify-center items-center ">
            <img
              src={UserSVG}
              alt=""
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="w-[439px] flex flex-col justify-center items-left ml-[5px]">
            <span className="text-black/90 font-[600] text-sm hover:underline hover:cursor-pointer hover:text-[#0a66c2]">
              Someone Someone
            </span>
            <span className="text-black/60 font-[400] text-xs">
              smth / smth...{" "}
            </span>
            <span className="w-fit flex flex-row items-center text-black/60 font-[600] text-xs">
              5h Ago ·
              <GlobeAmericasIcon height={14} width={14} className="ml-[3px]" />
            </span>
          </div>
        </div>
        <div className="w-[32px] h-[32px] flex justify-center items-center bg-transparent hover:bg-black/10 duration-[167ms] rounded-full hover:cursor-pointer absolute right-3 top-3 z-20">
          <EllipsisHorizontalIcon height={32} width={32} color="grey" />
        </div>
      </div>
      {/* User Text */}
      <div className="flex items-center justify-center min-h-[60px] ">
        <span
          className={`relative w-[515px] ${
            !isTextShown &&
            "h-[60px] overflow-hidden whitespace-nowrap text-ellipsis"
          } leading-5`}
        >
          "From the moment he saw her, he knew she was the one. She had a smile
          that lit up the room, and a laugh that was contagious. Her eyes were
          the color of the ocean, and he could get lost in them for hours. He
          knew it wouldn't be easy, but he was willing to do whatever it takes
          to make her his. They say that love is a battlefield, and he was ready
          to fight for her. He took her hand and promised to never let go, and
          they embarked on a journey together, filled with twists and turns, but
          always with each other by their side."
          <span
            onClick={() => setIsTextShown(!isTextShown)}
            className={`absolute ${
              isTextShown ? "hidden" : "block"
            } text-black/60 bottom-0 right-0 hover:cursor-pointer hover:underline hover:text-[#0a66c2]`}
          >
            ...see more
          </span>
        </span>
      </div>

      {/* Post Picture */}
      <div className="w-full min-h-[100px] py-[8px]">
        <img src={MountainPhoto} alt="" />
      </div>

      {/* Likes,Reposts,Comments */}
      <div className="flex flex-row justify-between items-center mx-[16px] py-[8px] border-b border-black/[0.08]">
        <span className="hover:underline hover:text-[#0a66c2] hover:cursor-pointer ml-[2px] text-black/60 text-xs">
          438
        </span>
        <div>
          <span className="hover:underline hover:text-[#0a66c2] hover:cursor-pointer mr-[4px] text-black/60 text-xs">
            15 comments
          </span>
          ·
          <span className="hover:underline hover:text-[#0a66c2] hover:cursor-pointer ml-[4px] text-black/60 text-xs">
            9 reposts
          </span>
        </div>
      </div>

      {/* Post Actions */}
      <div className="flex flex-row justify-between items-center py-[4px] px-[12px]">
        <button
          onMouseOver={() => setIsShownActions(true)}
          onMouseLeave={() => setIsShownActions(false)}
          className="relative flex flex-1 text-sm flex-row justify-center items-center py-[10px] px-[8px] font-[600] rounded-md duration-[167ms] bg-transparent hover:bg-black/10 text-black/60"
        >
          <HandThumbUpIcon width={24} height={24} className="mr-[4px]" />
          <span>Like</span>
          <div
            className={`${
              isShownActions ? "opacity-100 transition-all" : "opacity-0 -z-50"
            } absolute bottom-0 z-50 h-[100px] duration-300 ease-in`}
          >
            <div
              className={`w-[250px] max-h-[45px] px-[8px] py-[5px] rounded-lg flex flex-row justify-between items-center bg-[#fff] shadow-2xl shadow-black/60 border `}
            >
              <img
                src={LikeActionThumbUpSVG}
                alt=""
                className={`w-[35px] h-[35px] relative bottom-0 hover:bottom-5 hover:scale-125 hover:h-[70px] duration-200 ${
                  isShownActions && "animate-bounce-1"
                }`}
              />
              <img
                src={LikeActionClapSVG}
                alt=""
                className={`w-[35px] h-[35px] relative bottom-0 hover:bottom-5 hover:scale-125 hover:h-[70px] duration-200 ${
                  isShownActions && "animate-bounce-2"
                }`}
              />
              <img
                src={LikeActionGiveHeartSVG}
                alt=""
                className={`w-[35px] h-[35px] relative bottom-0 hover:bottom-5 hover:scale-125 hover:h-[70px] duration-200 ${
                  isShownActions && "animate-bounce-3"
                }`}
              />
              <img
                src={LikeActionLoveSVG}
                alt=""
                className={`w-[35px] h-[35px] relative bottom-0 hover:bottom-5 hover:scale-125 hover:h-[70px] duration-200 ${
                  isShownActions && "animate-bounce-4"
                }`}
              />
              <img
                src={LikeActionLampSVG}
                alt=""
                className={`w-[35px] h-[35px] relative bottom-0 hover:bottom-5 hover:scale-125 hover:h-[70px] duration-200 ${
                  isShownActions && "animate-bounce-5"
                }`}
              />
              <img
                src={LikeActionFunnySVG}
                alt=""
                className={`w-[35px] h-[35px] relative bottom-0 hover:bottom-5 hover:scale-125 hover:h-[70px] duration-200 ${
                  isShownActions && "animate-bounce-6"
                }`}
              />
            </div>
          </div>
        </button>
        <button className="flex flex-1 text-sm flex-row justify-center items-center py-[10px] px-[8px] font-[600] rounded-md duration-[167ms] bg-transparent hover:bg-black/10 text-black/60">
          <ChatBubbleOvalLeftEllipsisIcon
            width={24}
            height={24}
            className="mr-[4px]"
          />
          <span>Comment</span>
        </button>
        <button className="flex flex-1 text-sm flex-row justify-center items-center py-[10px] px-[8px] font-[600] rounded-md duration-[167ms] bg-transparent hover:bg-black/10 text-black/60">
          <ArrowPathIcon width={24} height={24} className="mr-[4px]" />
          <span>Repost</span>
        </button>
        <button className="flex flex-1 text-sm flex-row justify-center items-center py-[10px] px-[8px] font-[600] rounded-md duration-[167ms] bg-transparent hover:bg-black/10 text-black/60">
          <PaperAirplaneIcon width={24} height={24} className="mr-[4px]" />
          <span>Send</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
