import React, { useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { auth, db } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import GoogleSVG from "../../assets/images/google.svg";
import { ISignUp } from "./Interface/SignUp";



const Form = () => {
    const {
        reset,
        handleSubmit,
        formState: { errors },
        register,
        watch,
      } = useForm<ISignUp>();
      useEffect(() => {
        document.title = "Sign Up | LinkedIn";
      }, []);
    
      const password = watch("password");
      const navigate = useNavigate();
      const submitHandler = async (data: ISignUp) => {
        const { email, name, surname, password, passwordConfirmation } = data;
        await createUserWithEmailAndPassword(auth, email, password)
          .then(async (cred) => {
            await setDoc(doc(db, "users", cred.user.uid), {
              name: name,
              surname: surname,
              password: password,
            })
              .then(() => {
                console.log("User data has been set to the data base!");
              })
              .catch((error) => {
                console.error(error);
              });
          })
          .then(() => {
            navigate("/home", { replace: true });
          })
          .catch((error) => {
            return error.message;
          });
        reset();
      };
  return (
    <form
        className="flex flex-col w-[400px] mx-auto rounded-[8px] bg-[#fff] p-[24px]"
        onSubmit={handleSubmit(submitHandler)}
      >
        <label
          htmlFor="name"
          className="font-[400] text-black/60 leading-5 text-base mb-1"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          className="px-[10px] border border-black/60 rounded-[4px] h-[32px] bg-[#fff] font-[400] text-base"
          {...register("name", { required: "This field is required" })}
        />
        <p>{errors.name && errors.name.message}</p>
        <label
          htmlFor="surname"
          className="font-[400] text-black/60 leading-5 text-base mb-1 mt-[16px]"
        >
          Surname
        </label>
        <input
          type="text"
          id="surname"
          className="px-[10px] border border-black/60 rounded-[4px] h-[32px] bg-[#fff] font-[400] text-base"
          {...register("surname", { required: "This field is required" })}
        />
        <p>{errors.surname && errors.surname.message}</p>

        <label
          htmlFor="email"
          className="font-[400] text-black/60 leading-5 text-base mb-1 mt-[16px]"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="px-[10px] border border-black/60 rounded-[4px] h-[32px] bg-[#fff] font-[400] text-base"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "This field must be a valid email address",
            },
          })}
        />
        <p>{errors.email && errors.email.message}</p>

        <label
          htmlFor="password"
          className="font-[400] text-black/60 leading-5 text-base mb-1 mt-[16px]"
        >
          Password (6 or more characters)
        </label>
        <input
          type="password"
          id="password"
          className="px-[10px] border border-black/60 rounded-[4px] h-[32px] bg-[#fff] font-[400] text-base"
          {...register("password", {
            required: "This field is required",
            minLength: 8,
          })}
        />
        <p>{errors.password && errors.password.message}</p>

        <label
          htmlFor="passwordConfirmation"
          className="font-[400] text-black/60 leading-5 text-base mb-1 mt-[16px]"
        >
          Repeat password
        </label>
        <input
          type="password"
          id="passwordConfirmation"
          className="px-[10px] border border-black/60 rounded-[4px] h-[32px] bg-[#fff] font-[400] text-base"
          {...register("passwordConfirmation", {
            required: "This field is required",
            min: 8,
            validate: (value) =>
              value === password || "The passwords do not match",
          })}
        />
        <p>
          {errors.passwordConfirmation && errors.passwordConfirmation.message}
        </p>

        <span className="font-[400] text-black/60 leading-5 text-xs text-center py-[16px]">
          By clicking Agree & Join, you agree to the LinkedIn{" "}
          <a className="text-[#0a66c2] no-underline font-[600] ml-1 cursor-pointer">
            User Agreement
          </a>
          ,{" "}
          <a className="text-[#0a66c2] no-underline font-[600] ml-1 cursor-pointer">
            Privacy Policy
          </a>
          , and{" "}
          <a className="text-[#0a66c2] no-underline font-[600] ml-1 cursor-pointer">
            Cookie Policy
          </a>
          .
        </span>

        <button
          type="submit"
          className="w-full min-h-[48px] text-center text-[16px] font-[600] border max-md:w-full
                  rounded-[24px] bg-[#0a66c2] shadow text-[#ffffff] duration-[167ms] py-[12px] px-[24px] hover:bg-[#004182] my-[8px]"
        >
          Agree & Join
        </button>
        <div className="relative py-[24px] flex items-center justify-center">
          <div className="absolute border-gray-300 border-[1px] bg-gray-300 w-full z-10"></div>
          <span className="px-[16px] bg-[#f3f2ef] z-20">or</span>
        </div>
        <button
          className="flex items-center justify-center w-full min-h-[48px] text-center text-[16px] font-[600] border 
              rounded-[24px] border-black duration-[167ms] py-[12px] px-[24px] hover:bg-black/5 gap-1 max-md:w-full"
        >
          <img src={GoogleSVG} alt="Google SVG" />
          Sign in with Google
        </button>
        <span className="text-center p-[16px]">
          Already on LinkedIn?
          <a
            className="text-[#0a66c2] no-underline font-[600] ml-1"
            onClick={() => navigate("/", { replace: true })}
          >
            Sign in
          </a>
        </span>
      </form>
  )
}

export default Form