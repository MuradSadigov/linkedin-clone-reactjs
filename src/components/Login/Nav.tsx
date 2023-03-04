import React from "react";
import LoginLogo from "../../assets/images/login-logo.svg";

const Nav = () => {
  return (
    <nav className="max-w-[1128px] m-auto py-[20px] flex items-center relative justify-between flex-nowrap max-xl:px-[20px]">
      <a href="/">
        <img src={LoginLogo} alt="LinkedIn Logo" height={34} width={135} />
      </a>
      <div className="flex gap-[12px]">
        <a
          href="/"
          className="text-[16px] py-[10px] px-[12px] no-underline text-black/50 rounded-[4px]
       hover:bg-black/5 hover:text-black "
        >
          Join Now
        </a>

        <a
          href="/"
          className="rounded-[24px] border-[#0a66c2] border text-[#0a66c2] text-[16px] font-[600] duration-[167ms] text-center
      py-[10px] px-[24px] hover:bg-[#70b4f95d] no-underline"
        >
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default Nav;
