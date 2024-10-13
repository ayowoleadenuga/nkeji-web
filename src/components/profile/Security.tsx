"use client";
import MyInput from "@nkeji-web/components/ui/MyInput";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const Security = () => {
  const [showCurrentPassword, setShowCurrentPassword] =
    useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [requiredDetails, setRequiredDetails] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRequiredDetails({
      ...requiredDetails,
      [event.target.name]: event.target.value,
    });
  };
  const [validPassword, setValidPassword] = useState(false);
  const [checks, setChecks] = useState({
    hasUppercase: false,
    hasLowercase: false,
    hasMinimumLength: false,
    hasSpecialChar: false,
    hasNumber: false,
  });

  useEffect(() => {
    validatePassword();
  }, [requiredDetails.newPassword]);

  const validatePassword = () => {
    const hasUppercase = /[A-Z]/.test(requiredDetails.newPassword);
    const hasLowercase = /[a-z]/.test(requiredDetails.newPassword);
    const hasMinimumLength = requiredDetails.newPassword.length >= 8;
    const hasSpecialChar = /[!@#$%^&*().]/.test(requiredDetails.newPassword);
    const hasNumber = /[0-9]/.test(requiredDetails.newPassword);

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
    <div className="w-full h-full ">
      <div className="border-b border-b-[#EAECF0] pb-4 w-full ">
        <p className="font-[700] text-[18px] ">Security</p>
        <p className="text-[#808080] text-[14px] ">Keep your account secure</p>
      </div>
      <div className="w-full flex items-start justify-between mt-6 ">
        <div className="w-[47%] relative">
          <MyInput
            type={showCurrentPassword ? "text" : "password"}
            name="currentPassword"
            className=" text-[14px] font-[400] w-full border rounded-[8px] pl-3 pr-10  border-[#DAE0E6] text-[#808080] mt-1  bg-white  outline-none h-[48px]  "
            placeholder="Current password"
            onChange={handleOnchange}
            value={requiredDetails.currentPassword}
          />
          <span
            className="absolute top-1 right-3 cursor-pointer translate-y-[50%]"
            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
          >
            {showCurrentPassword ? (
              <EyeOffIcon color="#8A3FFC" />
            ) : (
              <EyeIcon color="#8A3FFC" />
            )}
          </span>
        </div>
        <div className="w-[47%] relative ">
          <MyInput
            type={showNewPassword ? "text" : "password"}
            name="newPassword"
            className=" text-[14px] font-[400] w-full border rounded-[8px] pl-3 pr-10  border-[#DAE0E6] text-[#808080] mt-1  bg-white  outline-none h-[48px]  "
            placeholder="New password"
            onChange={handleOnchange}
            value={requiredDetails.newPassword}
          />
          <span
            className="absolute top-1 right-3 cursor-pointer translate-y-[50%]"
            onClick={() => setShowNewPassword(!showNewPassword)}
          >
            {showCurrentPassword ? (
              <EyeOffIcon color="#8A3FFC" />
            ) : (
              <EyeIcon color="#8A3FFC" />
            )}
          </span>
          <div className="flex items-center gap-1 flex-wrap mt-2">
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
                  <p className="text-[12px] ">{item?.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <button
        disabled={
          !requiredDetails.newPassword ||
          !requiredDetails.currentPassword ||
          !validPassword
        }
        className="w-full h-[45px] text-[14px] mt-10 bg-primary-main rounded-[8px] text-white "
      >
        Update password
      </button>
    </div>
  );
};

export default Security;
