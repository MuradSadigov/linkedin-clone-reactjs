import React from "react";
import ReactDOM from "react-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import UserSVG from "../../assets/images/user.svg";
import { ChevronDownIcon, GlobeAmericasIcon } from "@heroicons/react/24/solid";

const Modal = ({ isOpen, onClose, children }: any) => {
  // if (!isOpen) {
  //   return null;
  // }

  return ReactDOM.createPortal(
    <div className="fixed top-0 z-50 w-screen h-screen flex justify-center items-start bg-black/75">
      <div className="w-[552px] rounded-md bg-[#fff] mt-[50px]">
        <div className="flex flex-row justify-between items-center py-[16px] px-[24px]">
          <h2>Create a post</h2>
          <button className="modal-close" onClick={onClose}>
            <XMarkIcon width={24} height={24} />
          </button>
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

        <div className="h-[120px] flex justify-center items-center">
          <div className="w-[504px] h-[96px]">
            <p
              placeholder="What do you want to talk about?"
              contentEditable
            ></p>
          </div>
        </div>
      </div>

      {/* {children} */}
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
