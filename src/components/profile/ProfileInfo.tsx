"use client";
import NotificationPreference from "@nkeji-web/components/profile/NotificationPreference";
import PaymentMethod from "@nkeji-web/components/profile/PaymentMethod";
import PersonalInfo from "@nkeji-web/components/profile/PersonalInfo";
import ProfileSideBar from "@nkeji-web/components/profile/ProfileSideBar";
import Security from "@nkeji-web/components/profile/Security";
import Image from "next/image";
import React, { useState } from "react";

const ProfileInfo = () => {
  const [profileInfoTab, setProfileInfoTab] = useState(0);
  return (
    <div className="w-full">
      <div className="w-full h-[96px] mt-10 bg-[#f7f5fd] rounded-[16px] flex items-center justify-between px-6 ">
        <div className=" flex items-center gap-3">
          <Image
            height={60}
            width={60}
            src="/assets/rewards.svg"
            placeholder="blur"
            alt="reward"
            blurDataURL="/assets/logo.svg"
          />
          <span>
            <p className="font-[700] ">Nkeji rewards</p>
            <p>15,321 points</p>
          </span>
        </div>
        <button className="text-primary-main text-[14px] font-[700] flex items-center gap-2 ">
          View reward activities
          <Image height={8} width={8} src="/assets/viewArrow.svg" alt="view" />
        </button>
      </div>
      <div className="flex justify-between w-full my-10">
        <ProfileSideBar
          setProfileInfoTab={setProfileInfoTab}
          profileInfoTab={profileInfoTab}
        />
        <div className="shadow-sm border w-[73%] rounded-[8px] p-4 h-fit ">
          {profileInfoTab === 0 ? (
            <PersonalInfo />
          ) : profileInfoTab == 1 ? (
            <Security />
          ) : profileInfoTab === 2 ? (
            <NotificationPreference />
          ) : (
            <PaymentMethod />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
