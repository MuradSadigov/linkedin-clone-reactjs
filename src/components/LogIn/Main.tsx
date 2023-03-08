import React from "react";
import Form from "./Form";
import LoginHero from "../../assets/images/login-hero.svg";

const Main = () => {
  return (
    <div
      className="max-w-[1128px] m-auto pt-[40px] flex min-h-[700px] relative flex-wrap w-full items-start
        max-xl:px-[20px]"
    >
      <div className="w-full max-md:flex max-md:flex-col max-md:justify-center max-md:items-center">
        <h1 className="text-[56px] max-md:text-[32px] max-md:text-center max-md:w-[100%] max-md:font-[300] max-md:leading-[30px] text-[#8f5849] font-[200] w-[55%] leading-[70px] pb-[24px]">
          Welcome to your professional community
        </h1>
        <Form />
        <img
          className="-z-10 w-[700px] h-[670px] absolute bottom-[15px] -right-[200px] 
            max-md:relative max-md:bottom-0 max-md:right-0 max-md:mx-auto max-md:mt-[10px] max-sm:h-fit"
          src={LoginHero}
          alt="Login Hero"
        />
      </div>
    </div>
  );
};

export default Main;
