"use client";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@nkeji-web/redux/store";
import { setPhoneNumber } from "@nkeji-web/redux/features/authSlice";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "@nkeji-web/components/ui/button";
import ForgotPassword from "@nkeji-web/components/auth/forgotPassword";
import Link from "next/link";
import { useLoginMutation } from "@nkeji-web/redux/features/authApi";
import { useToast } from "@nkeji-web/components/ui/use-toast";
import { clearError } from "@nkeji-web/redux/features/authSlice";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();

  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const { toast } = useToast();
  const { phoneNumber } = useSelector((state: RootState) => state.auth);
  const [userTab, setUserTab] = useState<number>(0);
  const allOptions = ["Phone number", "Email address"];
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [loginTab, setLoginTab] = useState<"login" | "forgot password">(
    "login"
  );
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = values;
    dispatch(clearError());
    try {
      await login({ email, password }).unwrap();
      // Handle successful login here (e.g., store token, redirect)
      toast({
        title: "Success!",
        description: "Your login was successful",
      });
      router.push("/");
    } catch (err) {
      // Handle error here
      toast({
        title: "Oops! an error has occurred",
        variant: "destructive",
        description: `Please try again later`,
      });
    }
  };
  return (
    <div className="w-full h-[100vh]  relative flex justify-between ">
      <Link
        href="/signup"
        className={`border border-[#F0F0F1] text-black hover:text-white hover:bg-[#7F56D9] absolute top-10 right-10 shadow rounded-lg bg-white  px-3  h-10 flex items-center justify-center `}
      >
        Open account
      </Link>
      <div className="md:block hidden relative w-[38.5%]">
        {/* <div className=" loginPageBgImage"></div> */}
        <Image
          width={100}
          height={100}
          src="/assets/cloudBg.png"
          alt="Auth Screen"
          className="w-[100%] h-[100%] "
        />
        <Link href="/">
          <Image
            width={100}
            height={50}
            src="/assets/whiteLogo.svg"
            alt="nkeji"
            className="absolute top-6 left-10"
          />
        </Link>
      </div>
      {loginTab === "login" ? (
        <div className="flex items-center justify-center w-[61.5%] h-[100%] ">
          <div>
            <h2 className="text-3xl font-bold text-[1D1D20] ">Welcome back!</h2>
            <p className="text-[14px] opacity-70 ">
              Enter the {userTab === 0 ? "phone number" : "email address"}{" "}
              associated with your Nkeji account
            </p>
            <div className="flex items-center w-full mt-8  bg-[#F8F8F8] rounded-[40px] h-[44px] px-1 font-[500] text-[12px] ">
              {allOptions?.map((item, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setUserTab(index)}
                    className={`${
                      userTab === index
                        ? "bg-white text-[#000000] font-[700] "
                        : "text-[#B3B3B3] "
                    } w-[50%] h-[40px] rounded-[40px] `}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            <div
              className={`${
                userTab === 0 ? "flex" : "hidden"
              } items-center h-[48px] w-full mt-6 mb-4`}
            >
              <span className="  w-[20%] h-full rounded-l-lg border border-[#F0F0F1] shadow flex items-center gap-2 justify-center ">
                <Image
                  height={24}
                  width={24}
                  layout="intrinsic"
                  src={`/assets/ukflag.svg`}
                  alt=""
                  className="cursor-pointer w-[24px] h-[24px] "
                />
                <p className=" ">+44</p>
              </span>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="730 000 0000"
                autoComplete="tel"
                max="10"
                min="10"
                pattern="[0-9]{10}"
                required
                value={phoneNumber}
                onChange={(e) => dispatch(setPhoneNumber(e.target.value))}
                className="border border-[#F0F0F1] shadow rounded-r-lg bg-white h-full px-3 w-[80%] outline-none"
              />
            </div>
            <input
              id="phoneNumber"
              placeholder="Enter your email address"
              autoComplete="tel"
              pattern="[0-9]{10}"
              required
              className={`${
                userTab === 1 ? "flex" : "hidden"
              } border border-[#F0F0F1] shadow rounded-lg bg-white mt-6 mb-4 px-3 w-full h-[48px] outline-none`}
            />
            <div className=" relative border border-[#F0F0F1] shadow rounded-lg bg-white p-3">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                id="password"
                value={values.password}
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
                className="border-0 outline-none"
              />
              <span
                className="absolute top-1 right-3 cursor-pointer translate-y-[50%]"
                onClick={handlePasswordVisibility}
              >
                {showPassword ? (
                  <EyeOffIcon color="#8A3FFC" />
                ) : (
                  <EyeIcon color="#8A3FFC" />
                )}
              </span>
            </div>
            <button
              onClick={() => setLoginTab("forgot password")}
              className="text-[#7F56D9] font-[600] mt-2 text-[14px] "
            >
              Forgot password
            </button>
            <Button
              disabled={isLoading}
              onClick={handleLogin}
              className="w-full bg-[#7F56D9] mt-10 rounded-[8px] text-white inter-semibold"
            >
              Log in
            </Button>
          </div>
        </div>
      ) : (
        <ForgotPassword setLoginTab={setLoginTab} />
      )}
    </div>
  );
};

export default Page;
