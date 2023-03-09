import React, { useState } from "react";
import {
  DownIconSVG,
  UserSVG,
  SearchIconSVG,
  HomeLogoSVG,
} from "../../assets/index";
import { navigations } from "../../constants/navigations";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const navigate = useNavigate();
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        console.log(`User sign out successfully`);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="fixed top-0 left-0 z-10 w-screen px-[24px] border-b-1 border-b-black/5 bg-white">
      <div className="flex items-center mx-auto min-h-full max-w-[1128px]">
        <span className="mr-[8px] text-[0px]">
          <a onClick={() => navigate("/home", { replace: true })}>
            <img
              src={HomeLogoSVG}
              alt="Home SVG"
              className="min-w-[34px] min-h-[34px]"
            />
          </a>
        </span>
        <div className="relative flex flex-row items-center justify-center">
          {" "}
          {/*Search*/}
          <div className="">
            <input
              type="text"
              placeholder="Search"
              className="w-[290px] h-[34px] pl-[30px] pr-[10px] border-none text-[14px] bg-[#eef3f8] 
            rounded-[4px] leading-[1.75] shadow-none text-black/90 text-ellipsis duration-1000 
            font-[400] border-[#dce6f1] focus:w-[447px]"
            />
          </div>
          <div className="absolute left-2 z-10">
            <img src={SearchIconSVG} alt="Search Icon" width={18} />
          </div>
        </div>
        <nav className="max-sm:fixed max-sm:left-0 max-sm:bottom-0 max-sm:bg-white max-sm:w-full ml-auto flex items-center justify-center">
          <ul className="flex flex-nowrap list-none ">
            {navigations.map((nav) => (
              <li
                key={nav.name}
                className="flex items-center max-sm:min-w-[70px] cursor-pointer text-opacity-hover"
              >
                <a className="flex items-center justify-center bg-transparent flex-col text-[12px] font-[400] leading-[1.5] min-h-[52px] min-w-[80px] relative no-underline">
                  <img src={nav.path} alt={nav.alt} />
                  <span className="flex items-center text-black/60">
                    {nav.name}
                  </span>
                </a>
              </li>
            ))}

            <li className="flex items-center max-sm:min-w-[70px] cursor-pointer relative">
              <a
                onClick={() => setIsActive(!isActive)}
                className="flex text-opacity-hover items-center justify-center bg-transparent flex-col text-[12px] font-[400] leading-[1.5] min-h-[52px] min-w-[80px] relative no-underline"
              >
                <img
                  className="w-[24px] h-[24px] rounded-full"
                  src={UserSVG}
                  alt="User SVG"
                />
                <span className="flex items-center justify-center text-black/60">
                  Me
                  <img src={DownIconSVG} alt="Down Icon SVG" />
                </span>
              </a>

              <div
                className={`${
                  isActive ? "flex" : "hidden"
                } absolute top-[60px] right-0 bg-white rounded-[5px] shadow-md w-[100px] z-50 text-[16px] duration-[167ms] border`}
              >
                <a
                  onClick={signOutHandler}
                  className="hover:underline text-center w-full"
                >
                  Sign Out
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
