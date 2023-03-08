import React from "react";
import UserSVG from "../../assets/images/user.svg";
import PhotoSVG from "../../assets/images/photo1.svg";
import VideoSVG from "../../assets/images/video.svg";
import EventSVG from "../../assets/images/event.svg";
import ArticleSVG from "../../assets/images/article.svg";
import Modal from "../Modals/Modal";

const SendPost = () => {
  
  

  return (
    <div className="w-full min-h-[116px] rounded-xl bg-[#fff] flex flex-col border shadow-sm mb-[8px] pb-[4px]">
      <div className="flex flex-row justify-between items-center mx-[16px] mt-[10px]">
        <a className="cursor-pointer">
          <img
            className="w-[48px] h-[48px] rounded-full"
            src={UserSVG}
            alt="User SVG"
          />
        </a>
        <button onClick={() => {}} className="text-left bg-transparent rounded-full w-[452px] duration-[165ms] h-[48px] py-[10px] px-[16px] my-[4px] hover:bg-black/5 border border-black/30 font-[600] text-black/60">
          Start a post
        </button>
      </div>
      <div className="flex flex-row justify-around items-center min-h-[52px]">
        <button className="rounded-md px-[8px] bg-transparent hover:bg-black/10 duration-[167ms] flex flex-row justify-center items-center h-[48px]">
          <img src={PhotoSVG} alt="Photo SVG" />
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
