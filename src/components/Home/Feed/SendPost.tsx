import React from "react";
import {
  ArticleSVG,
  UserSVG,
  Photo1SVG,
  VideoSVG,
  EventSVG,
} from "../../../assets/index";
import Modal from "../../Modals/Modal";

const SendPost = () => {
  return (
    <div className="w-full min-h-[116px] rounded-xl bg-[#fff] flex flex-col border shadow-sm pb-[4px]">
      <div className="flex flex-row justify-between items-center mx-[16px] mt-[10px]">
        <a className="cursor-pointer">
          <img
            className="w-[48px] h-[48px] rounded-full"
            src={UserSVG}
            alt="User SVG"
          />
        </a>
        <button
          onClick={() => {}}
          className="text-left bg-transparent rounded-full w-[452px] duration-[167ms] h-[48px] py-[10px] px-[16px] my-[4px] hover:bg-black/10 border border-black/30 font-[600] text-black/60"
        >
          Start a post
        </button>
      </div>
      <div className="flex flex-row justify-around items-center min-h-[52px]">
        <button className="rounded-md px-[8px] bg-transparent hover:bg-black/10 duration-[167ms] flex flex-row justify-center items-center h-[48px]">
          <img src={Photo1SVG} alt="Photo SVG" />
          <span className="ml-[8px]">Photo</span>
        </button>
        <button className="rounded-md px-[8px] bg-transparent hover:bg-black/10 duration-[167ms] flex flex-row justify-center items-center h-[48px]">
          <img src={VideoSVG} alt="Video SVG" />
          <span className="ml-[8px]">Video</span>
        </button>
        <button className="rounded-md px-[8px] bg-transparent hover:bg-black/10 duration-[167ms] flex flex-row justify-center items-center h-[48px]">
          <img src={EventSVG} alt="Event SVG" />
          <span className="ml-[8px]">Event</span>
        </button>
        <button className="rounded-md px-[8px] bg-transparent hover:bg-black/10 duration-[167ms] flex flex-row justify-center items-center h-[48px]">
          <img src={ArticleSVG} alt="Article SVG" />
          <span className="ml-[8px]">Write article</span>
        </button>
      </div>
    </div>
  );
};

export default SendPost;
