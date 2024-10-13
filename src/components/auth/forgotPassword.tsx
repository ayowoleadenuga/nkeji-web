import { Button } from "@nkeji-web/components/ui/button";
import React from "react";

interface forogtPasswordProp {
  setLoginTab: React.Dispatch<
    React.SetStateAction<"login" | "forgot password">
  >;
}
const ForgotPassword: React.FC<forogtPasswordProp> = ({ setLoginTab }) => {
  return (
    <div className="flex items-center justify-center w-[61.5%] h-[100%] ">
      <div className="w-[70%] ">
        <h2 className="text-3xl font-bold text-[1D1D20] ">
          Forgot your password?
        </h2>
        <p className="text-[14px] opacity-70 w-[90%] ">
          Enter your email address and we&apos;ll send you a link to reset your
          password.
        </p>

        <input
          id="phoneNumber"
          placeholder="Enter your email address"
          autoComplete="tel"
          pattern="[0-9]{10}"
          required
          className={`border border-[#F0F0F1] shadow rounded-lg bg-white mt-6 mb-4 px-3 w-full h-[48px] outline-none`}
        />
        <Button className="w-full bg-[#7F56D9] mt-10 rounded-[8px] text-white inter-semibold">
          Continue
        </Button>
        <button
          onClick={() => setLoginTab("login")}
          className="w-full mt-4 inter-semibold"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
