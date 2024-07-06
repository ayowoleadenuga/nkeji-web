import Image from "next/image";
import { useState } from "react";
import Modal from "../ui/modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@nkeji-web/redux/store";
import { closeModal } from "@nkeji-web/redux/features/authModalReducer";
import LoginForm from "./loginForm";
import { clearError, resetState } from "@nkeji-web/redux/features/authSlice";
import SignupForm from "./signupForm";

const AuthModal = () => {
  const [currentTab, setCurrentTab] = useState("login");
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeModal());
    dispatch(clearError());
    dispatch(resetState());
  };
  const isOpen = useSelector((state: RootState) => state.authModal.isOpen);

  return (
    <Modal
      visible={isOpen}
      zIndex="100"
      onClose={handleClose}
      closeOnClickOut={false}
    >
      <div>
        <div className="flex min-h-[700px] mt-10 mb-10">
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
            <div className="flex justify-end pr-2 pt-4" onClick={handleClose}>
              <Image
                height={30}
                width={30}
                layout="intrinsic"
                src={`/assets/close.svg`}
                alt=""
                className="cursor-pointer"
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
              {currentTab === "login" && <LoginForm closeModal={handleClose} />}

              {currentTab === "register" && (
                <SignupForm closeModal={handleClose} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AuthModal;
