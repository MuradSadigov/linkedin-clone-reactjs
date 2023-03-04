import React from "react";
import HomeSVG from "../assets/images/home-logo.svg";
import SearchIcon from "../assets/images/search-icon.svg";
import { navigations } from "../assets/navigations";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 z-10 w-screen px-[24px] border-b-1 border-b-black/5 bg-white">
      <div className="flex items-center mx-auto min-h-full max-w-[1128px]">
        <span className="mr-[8px] text-[0px]">
          <a href="/home">
            <img src={HomeSVG} alt="Home SVG" className="min-w-[34px] min-h-[34px]" />
          </a>
        </span>
        <div className="relative flex flex-row items-center justify-center">
          {" "}
          {/*Search*/}
          <div className="w-[447px]">
            <input
              type="text"
              placeholder="Search"
              className="w-[290px] h-[34px] pl-[30px] pr-[10px] border-none text-[14px] bg-[#eef3f8] 
            rounded-[4px] leading-[1.75] shadow-none text-black/90 text-ellipsis duration-1000 
            font-[400] border-[#dce6f1] focus:w-[447px]"
            />
          </div>
          <div className="absolute left-2 z-10">
            <img src={SearchIcon} alt="Search Icon" width={18} />
          </div>
        </div>
        <nav className="max-sm:fixed max-sm:left-0 max-sm:bottom-0 max-sm:bg-white max-sm:w-full ml-auto">
          <ul className="flex flex-nowrap list-none">
            {navigations.map((nav, i) => (
              <li key={nav.name} className="flex items-center max-sm:min-w-[70px] cursor-pointer">
                <a className="flex items-center justify-center bg-transparent flex-col text-[12px] font-[400] leading-[1.5] min-h-[52px] min-w-[80px] relative no-underline">
                  <img src={nav.path} alt={nav.alt} />
                  <span className="flex items-center text-black/60 hover:text-black/90 active:text-black/90">
                    {nav.name}
                  </span>
                  {i == 0 && <span className="absolute bottom-0 left-0 mb-1 w-full h-0.5 bg-black"></span>}
            
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
