import React, { SyntheticEvent, useState } from "react";
import GoogleSVG from "../../assets/images/google.svg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface ILogIn {
  email: string;
  password: string;
}
const Form = () => {
  const {
    reset,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<ILogIn>();
  const [isShow, setIsShow] = useState<boolean>(true);
  const navigate = useNavigate();
  const passwordShowHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    setIsShow(!isShow);
  };

  const submitHandler = (data: ILogIn) => {
    const { email, password } = data;
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Succesfully Signed In");
        navigate("/home");
      })
      .catch((error) => {
        console.log(error.message);
      });

    reset();
  };

  return (
    <div className="w-fit max-md:w-full">
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="flex flex-col my-[12px]">
          <label
            htmlFor="email"
            className="text-black/75 font-[600] text-[16px] mb-[8px]"
          >
            Email
          </label>
          <div className="py-[14px] px-[16px] rounded-[4px] border text-[16px] bg-white border-black/75 text-black/90 hover:border-black hover:cursor-pointer">
            <input
              type="email"
              id="email"
              className="w-full outline-none text-[16px] autofill:bg-[#E8F0FE]"
              autoComplete="on"
              {...register("email")}
            />
          </div>
        </div>

        <div className="flex flex-col my-[12px]">
          <label
            htmlFor="password"
            className="text-black/75 font-[600] text-[16px] mb-[8px]"
          >
            Password
          </label>
          <div className="flex flex-row items-center gap-3 py-[14px] px-[16px] rounded-[4px] border text-[16px] bg-white border-black/75 text-black/90 hover:border-black hover:cursor-pointer">
            <input
              type={isShow ? "password" : "text"}
              id="password"
              className="w-full outline-none text-[16px]  autofill:bg-[#E8F0FE]"
              autoComplete="on"
              {...register("password")}
            />
            <button
              onClick={passwordShowHandler}
              className="font-[600] text-[16px] text-[#0a66c2] z-50 bg-transparent"
            >
              Show
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <a
            href=""
            className="font-[600] text-[#0a66c2] leading-[1.25] hover:underline hover:text-[#004182] w-fit my-[16px]"
          >
            Forgot password?
          </a>
          <button
            type="submit"
            className="w-[400px] min-h-[48px] text-center text-[16px] font-[600] border max-md:w-full
                  rounded-[24px] bg-[#0a66c2] shadow text-[#ffffff] duration-[167ms] py-[12px] px-[24px] hover:bg-[#004182] my-[8px]"
          >
            Sign in
          </button>
        </div>

        <div className="relative py-[24px] flex items-center justify-center">
          <div className="absolute border-gray-600 border-[1px] bg-gray-300 w-[400px] -z-10"></div>
          <span className="px-[16px] bg-[#f3f2ef]">or</span>
        </div>
      </form>

      <button
        className="flex items-center justify-center w-[400px] min-h-[48px] text-center text-[16px] font-[600] border 
              rounded-[24px] border-black duration-[167ms] py-[12px] px-[24px] hover:bg-black/5 gap-1 max-md:w-full"
      >
        <img src={GoogleSVG} alt="Google SVG" />
        Sign in with Google
      </button>
    </div>
  );
};

export default Form;
