"use client";
import ToggleButton from "@nkeji-web/components/ui/ToggleButton";
import React, { useState } from "react";

const NotificationPreference = () => {
  const [useSmsIsChecked, setUseSmsIsChecked] = useState(false);
  const [useEmailIsChecked, setUseEmailIsChecked] = useState(false);
  const notificationOptions = [
    "Newsletters",
    "Promotional offers",
    "Weekend getaway",
    "Price drop",
    "Discounts",
    "Juicy offers",
  ];
  return (
    <div className="w-full h-full">
      <div className="border-b border-b-[#EAECF0] pb-4 w-full mb-6 ">
        <p className="font-[700] text-[18px] ">Notification preferences</p>
        <p className="text-[#808080] text-[14px] ">
          Update your password and secure your account
        </p>
      </div>
      <div className="flex items-center justify-between w-full">
        <div>
          <p className={` font-[300] italic  `}>SMS</p>
          <p className=" text-[14px] text-[#808080] ">
            Get your notification sent straight to your messages
          </p>
        </div>
        <ToggleButton
          isChecked={useSmsIsChecked}
          setIsChecked={setUseSmsIsChecked}
        />
      </div>
      <div className="mt-6 flex items-center justify-between w-full">
        <div>
          <p className={` font-[300] italic  `}>Email</p>
          <p className=" text-[14px] text-[#808080] ">
            Get your notification sent straight to your email address
          </p>
        </div>
        <ToggleButton
          isChecked={useEmailIsChecked}
          setIsChecked={setUseEmailIsChecked}
        />
      </div>
      <div className="bg-[#FAFAFA] w-full p-4 rounded-[8px] mt-6 border border-[#EAECF0] ">
        <div className="border-b border-b-[#EAECF0] pb-4 w-full mb-6 ">
          <p className={` font-[300] italic  `}>Get notified</p>
        </div>
        <div className="flex flex-col gap-4">
          {notificationOptions.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full text-[14px]  flex items-center justify-between"
              >
                <p>{item}</p>
                <input
                  className="accent-primary-main cursor-pointer w-4 h-4"
                  type="checkbox"
                />
              </div>
            );
          })}
        </div>
      </div>
      <button className="w-full h-[45px] text-[14px] mt-10 bg-primary-main rounded-[8px] text-white ">
        Save changes
      </button>
    </div>
  );
};

export default NotificationPreference;
