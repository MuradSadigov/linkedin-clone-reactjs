import React from "react";
import LoginLogo from "../../assets/images/login-logo.svg";

const Header = () => {
  return (
    <header className="max-w-[1128px] m-auto flex flex-col items-center justify-between max-xl:px-[20px]">
      <div className="w-full">
        <a href="/">
          <img src={LoginLogo} alt="LinkedIn Logo" height={34} width={135} />
        </a>
      </div>
      <h1 className="w-full text-center py-[24px] px-[16px] text-3xl font-[400]">
        Make the most of your professional life
      </h1>
    </header>
  );
};

export default Header;
