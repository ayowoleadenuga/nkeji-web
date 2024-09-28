"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@nkeji-web/redux/store";
import { setPhoneNumber } from "@nkeji-web/redux/features/authSlice";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "@nkeji-web/components/ui/button";
import ForgotPassword from "@nkeji-web/components/auth/forgotPassword";
import Link from "next/link";
import EnterOtp from "@nkeji-web/components/auth/enterOtp";
import KnowYouBetter from "@nkeji-web/components/auth/knowYouBetter";
import WhereYouLive from "@nkeji-web/components/auth/whereYouLive";

const Page = () => {
  const dispatch = useDispatch();
  const { phoneNumber } = useSelector((state: RootState) => state.auth);
  const [userTab, setUserTab] = useState<number>(0);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [conditionChecked, setConditionChecked] = useState(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [signinTab, setSigninTab] = useState<
    "open account" | "otp" | "know you better" | "where you live"
  >("open account");
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [validPassword, setValidPassword] = useState(false);
  const [checks, setChecks] = useState({
    hasUppercase: false,
    hasLowercase: false,
    hasMinimumLength: false,
    hasSpecialChar: false,
    hasNumber: false,
  });
  useEffect(() => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        values.email
      );
    setValidEmail(emailRegex);
  }, [values.email]);

  useEffect(() => {
    validatePassword();
  }, [values.password]);

  const validatePassword = () => {
    const hasUppercase = /[A-Z]/.test(values.password);
    const hasLowercase = /[a-z]/.test(values.password);
    const hasMinimumLength = values.password.length >= 8;
    const hasSpecialChar = /[!@#$%^&*().]/.test(values.password);
    const hasNumber = /[0-9]/.test(values.password);

    const isValid =
      hasUppercase &&
      hasLowercase &&
      hasSpecialChar &&
      hasMinimumLength &&
      hasNumber;
    setValidPassword(isValid);

    setChecks({
      hasUppercase,
      hasLowercase,
      hasMinimumLength,
      hasSpecialChar,
      hasNumber,
    });
  };
  const theChecks = [
    { name: "8 characters", cheked: checks.hasMinimumLength },
    { name: "Uppercase", cheked: checks.hasUppercase },
    { name: "Lowercase", cheked: checks.hasLowercase },
    { name: "Special character", cheked: checks.hasSpecialChar },
  ];
  return (
    <div className="w-full h-[100vh]  relative flex justify-between ">
      <Link
        href="/login"
        className={`border border-[#F0F0F1] text-black hover:text-white hover:bg-[#7F56D9] absolute top-10 right-10 shadow rounded-lg bg-white  px-3  h-10  flex items-center justify-center`}
      >
        Login
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
      {signinTab === "open account" ? (
        <div className="flex items-center justify-center w-[61.5%] h-[100%] ">
          <div className="w-[50%]">
            <h2 className="text-3xl font-bold text-[1D1D20] ">
              Let’s get started
            </h2>
            <p className="text-[14px] opacity-70 ">Enter your details</p>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              autoComplete="tel"
              required
              value={values.email}
              onChange={e => setValues({ ...values, email: e.target.value })}
              className={`flex border border-[#F0F0F1] shadow rounded-lg bg-white mt-6 mb-4 px-3 w-full h-[48px] outline-none`}
            />
            <p
              className={
                !validEmail && values.email
                  ? "text-[#5e1c1c] text-[12px] font-[700]  "
                  : "hidden"
              }
            >
              ❗ Please, kindly enter a valid Email address
            </p>

            <div className={`flex items-center h-[48px] w-full mt-6 mb-4`}>
              <span className="  w-[30%] h-full rounded-l-lg border border-[#F0F0F1] shadow flex items-center gap-2 justify-center ">
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
                type="number"
                id="phoneNumber"
                placeholder="730 000 0000"
                autoComplete="tel"
                max="10"
                min="10"
                pattern="[0-9]{10}"
                required
                value={phoneNumber}
                onChange={e => dispatch(setPhoneNumber(e.target.value))}
                className="border border-[#F0F0F1] shadow rounded-r-lg bg-white h-full px-3 w-[70%] outline-none"
              />
            </div>

            <div className=" relative border border-[#F0F0F1] shadow rounded-lg bg-white p-3">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                id="password"
                value={values.password}
                onChange={e =>
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
            <div className="flex items-center gap-3 flex-wrap mt-4">
              {theChecks.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-[#F5F5F5] rounded-[80px] flex items-center justify-center gap-1 px-3 py-1 "
                  >
                    {item?.cheked && (
                      <Image
                        height={15}
                        width={15}
                        layout="intrinsic"
                        src={`/assets/checked2.svg`}
                        alt=""
                      />
                    )}
                    <p className="text-[14px] ">{item?.name}</p>
                  </div>
                );
              })}
            </div>
            <div className="w-full flex items-center justify-between gap-3 mt-4">
              <input
                onChange={() => setConditionChecked(!conditionChecked)}
                type="checkbox"
                className="w-6 h-6 accent-[#7F56D9] cursor-pointer"
              />
              <p className="text-[12px] text-[#1D1D2099] ">
                I have read, understood and I agree to Nkeji’s Privacy Policy,
                and Terms and conditions.
              </p>
            </div>
            <Button
              disabled={!validEmail || !validPassword || !conditionChecked}
              className="w-full bg-[#7F56D9] mt-10 rounded-[8px] text-white inter-semibold"
              onClick={() => setSigninTab("otp")}
            >
              Open Account
            </Button>
          </div>
        </div>
      ) : signinTab === "otp" ? (
        <EnterOtp setSigninTab={setSigninTab} />
      ) : signinTab === "know you better" ? (
        <KnowYouBetter setSigninTab={setSigninTab} />
      ) : (
        <WhereYouLive setSigninTab={setSigninTab} />
      )}
    </div>
  );
};

export default Page;
