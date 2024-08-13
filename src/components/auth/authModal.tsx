import Image from "next/image";
import { useDispatch } from "react-redux";
import LoginForm from "./loginForm";
import { clearError, resetState } from "@nkeji-web/redux/features/authSlice";
import SignupForm from "./signupForm";
import { DialogContent } from "../ui/dialog";
import { AuthTabType } from ".";

const AuthModal = ({
  currentTab,
  setCurrentTab,
}: {
  currentTab: AuthTabType;
  setCurrentTab: (val: AuthTabType) => void;
}) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(clearError());
    dispatch(resetState());
  };

  return (
    <DialogContent
      closeButton={
        <div className="absolute right-6 top-2">
          <Image
            height={30}
            width={30}
            layout="intrinsic"
            src={`/assets/close.svg`}
            alt=""
            className="cursor-pointer"
          />
        </div>
      }
      className="lg:max-w-[55%] md:max-w-[70%] max-w-[100%] lg:max-h-[90vh] md:max-h-[80vh] max-h-[100vh] overflow-auto p-0"
    >
      <div className="flex overflow-auto rounded-lg relative mb-[-16px]">
        <div className="md:block hidden relative w-[40%]">
          <Image
            layout="fill"
            src="/assets/auth-screen.png"
            alt="Auth Screen"
            objectFit="cover"
            className=""
          />
        </div>
        <div className="bg-white w-full md:w-[60%] relative pt-4">
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
    </DialogContent>
  );
};

export default AuthModal;
