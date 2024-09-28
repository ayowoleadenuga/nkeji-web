"use client";
import CodeInput from "@nkeji-web/components/auth/codeInput";
import { Button } from "@nkeji-web/components/ui/button";
import React, { useState } from "react";

interface enterOtpInterface {
  setSigninTab: React.Dispatch<
    React.SetStateAction<
      "open account" | "otp" | "know you better" | "where you live"
    >
  >;
}

const EnterOtp: React.FC<enterOtpInterface> = ({ setSigninTab }) => {
  const [pin, setPin] = useState("");

  const handlePin = (value: string) => {
    setPin(value);
  };
  return (
    <div className="flex items-center justify-center w-[61.5%] h-[100%] ">
      <div className="w-[60%] ">
        <h2 className="text-3xl font-bold text-[1D1D20] ">Check your inbox</h2>
        <p className="text-[14px] mb03 ">
          We’ve sent a 6 digit OTP to your mail
        </p>
        <CodeInput onCodeChange={handlePin} />

        <Button
          className="w-full bg-[#7F56D9] mt-10 rounded-[8px] text-white inter-semibold"
          onClick={() => setSigninTab("know you better")}
        >
          Verify OTP
        </Button>
        <span className="w-full flex items-center gap-1 text-[14px] justify-center mt-3 inter-semibold ">
          <p>Didn&apos;t get OTP? </p>
          <button className="text-[#7F56D9] ">Resend</button>
        </span>
      </div>
    </div>
  );
};

export default EnterOtp;
