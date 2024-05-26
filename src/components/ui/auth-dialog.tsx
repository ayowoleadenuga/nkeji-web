"use client";

import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from "./dialog";
import { useState } from "react";
import { CheckboxWithText } from "./checkbox-with-text";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@nkeji-web/redux/store";
import { toggleLoginDialog } from "@nkeji-web/redux/features/authModalSlice";

const AuthDialog = () => {
  const [currentTab, setCurrentTab] = useState("login");
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const isLoginDialogOpen = useSelector((state:RootState) => state.authModal.isLoginDialogOpen);
console.log(isLoginDialogOpen, 'isLoginDialogOpen');
const handleCloseAuthDialog = ()=>{
  dispatch(toggleLoginDialog(false))
}
  return (
    <>

    <Dialog open={isLoginDialogOpen} onOpenChange={handleCloseAuthDialog} >
 
    <DialogContent className="max-w-4xl p-0 bg-transparent overflow-hidden">
      <DialogHeader className="">
        <DialogDescription>
          <div className="flex h-[700px]">
          <div className="relative w-full h-full">
        <Image
          layout="fill" 
          src="/assets/auth-screen.png"
          alt="Auth Screen"
          objectFit="cover"
          className=""
        />
      </div>
            <div className="bg-white flex-grow relative ">
              <div className="flex justify-end pr-2 pt-4">
                <Image
                  height={30}
                  width={30}
                  layout="intrinsic"
                  src={`/assets/close.svg`}
                  alt=""
                  className="cursor-pointer"
                  onClick={handleCloseAuthDialog}
                />
              </div>
              <div className="px-10">
                <div className="flex border-b border-b-[#DEDFE0] w-full space-x-8 mt-5 ">
                  <div
                    onClick={() => setCurrentTab("login")}
                    className={`cursor-pointer text-base pb-4 ${
                      currentTab === "login"
                        ? "border-b border-b-black text-[#1B1E21] inter-bold"
                        : "text-[#A3A7AB]"
                    }`}
                  >
                    Login
                  </div>
                  <div
                    onClick={() => setCurrentTab("register")}
                    className={`cursor-pointer text-base pb-4  ${
                      currentTab === "register"
                        ? "border-b inter-bold text-base text-[#1B1E21] border-b-black"
                        : "text-[#A3A7AB]"
                    }`}
                  >
                    Register
                  </div>
                </div>
                {currentTab === "login" && (
                  <div className="mt-8">
                    <h3 className="text-2xl inter-bold text-[#1B1E21]">
                      Login to your account
                    </h3>
                    <div className="mt-5 flex space-x-8">
                      <div>
                        <Image
                          height={30}
                          width={30}
                          layout="intrinsic"
                          src={`/assets/google.svg`}
                          alt=""
                          className="cursor-pointer"
                        />
                      </div>
                      <div>
                        <Image
                          height={30}
                          width={30}
                          layout="intrinsic"
                          src={`/assets/facebook-blue.svg`}
                          alt=""
                          className="cursor-pointer"
                        />
                      </div>
                      <div>
                        <Image
                          height={30}
                          width={30}
                          layout="intrinsic"
                          src={`/assets/apple.svg`}
                          alt=""
                          className="cursor-pointer"
                        />
                      </div>
                    </div>

                    <div className="flex space-x-1 items-center mt-5">
                      <span className="border w-60"></span>
                      <span className="text-[#A3A7AB] inter-semibold text-base">
                        or
                      </span>
                      <span className="border w-60"></span>
                    </div>
                    <div className="mt-5">
                      <div className={`grid items-center gap-1.5 w-full `}>
                        <label
                          htmlFor="email"
                          className="text-[#1B1E21] inter-bold text-base"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="lagbaja@gmail.com"
                          value={values.email}
                          className="border border-[#F0F0F1] shadow rounded-lg bg-white p-3"
                        />
                      </div>
                      <div className={`grid items-center gap-1.5 w-full mt-2`}>
                        <label
                          htmlFor="email"
                          className="text-[#1B1E21] inter-bold text-base"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          value={values.password}
                          className="border border-[#F0F0F1] shadow rounded-lg bg-white p-3"
                        />
                      </div>
                    </div>

                    <button className="text-white inter-semibold text-sm bg-[#7F56D9] rounded-full w-full mt-10 py-5">
                      Sign in
                    </button>
                  </div>
                )}

                {currentTab === "register" && (
                  <div className="mt-8">
                    <h3 className="text-2xl inter-bold text-[#1B1E21]">
                      Create your account
                    </h3>
                    <div className="mt-5 flex space-x-8">
                      <div>
                        <Image
                          height={30}
                          width={30}
                          layout="intrinsic"
                          src={`/assets/google.svg`}
                          alt=""
                          className="cursor-pointer"
                        />
                      </div>
                      <div>
                        <Image
                          height={30}
                          width={30}
                          layout="intrinsic"
                          src={`/assets/facebook-blue.svg`}
                          alt=""
                          className="cursor-pointer"
                        />
                      </div>
                      <div>
                        <Image
                          height={30}
                          width={30}
                          layout="intrinsic"
                          src={`/assets/apple.svg`}
                          alt=""
                          className="cursor-pointer"
                        />
                      </div>
                    </div>

                    <div className="flex space-x-1 items-center mt-5">
                      <span className="border w-60"></span>
                      <span className="text-[#A3A7AB] inter-semibold text-base">
                        or
                      </span>
                      <span className="border w-60"></span>
                    </div>
                    <div className="mt-5 flex flex-col space-y-4">
                      <div className={`grid items-center gap-1.5 w-full `}>
                        <label
                          htmlFor="email"
                          className="text-[#1B1E21] inter-bold text-base"
                        >
                          Full name
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Your name"
                          value={values.name}
                          className="border border-[#F0F0F1] shadow rounded-lg bg-white p-3"
                        />
                      </div>
                      <div className={`grid items-center gap-1.5 w-full `}>
                        <label
                          htmlFor="email"
                          className="text-[#1B1E21] inter-bold text-base"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="lagbaja@gmail.com"
                          value={values.email}
                          className="border border-[#F0F0F1] shadow rounded-lg bg-white p-3"
                        />
                      </div>
                      <div className={`grid items-center gap-1.5 w-full `}>
                        <label
                          htmlFor="email"
                          className="text-[#1B1E21] inter-bold text-base"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          value={values.password}
                          className="border border-[#F0F0F1] shadow rounded-lg bg-white p-3"
                        />
                      </div>
                    </div>

                    <button className="text-white inter-semibold text-sm bg-[#7F56D9] rounded-full w-full mt-10 py-5">
                     Register
                    </button>
                    <div className="pt-5">

            <CheckboxWithText label=" Agree to Terms and Conditions & Privacy Policy" className="text-[#7B8086]" />
                    </div>

                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
    </Dialog>
    
    
    </>
  );
};

export default AuthDialog;
