import { AllProfileSidebarItems } from "@nkeji-web/components/profile/AllProfileSidebarItems";
import Image from "next/image";
import React from "react";

interface ProfileSideBarInterface {
  setProfileInfoTab: React.Dispatch<React.SetStateAction<number>>;
  profileInfoTab: number;
}

const ProfileSideBar: React.FC<ProfileSideBarInterface> = ({
  setProfileInfoTab,
  profileInfoTab,
}) => {
  return (
    <div className="w-[25%] ">
      {AllProfileSidebarItems.map((item, index) => {
        return (
          <div
            onClick={() => setProfileInfoTab(index)}
            key={index}
            className={`shadow-sm mb-4 hover:shadow-[#7E43FF] border rounded-[8px] px-2 h-[86px] flex items-center cursor-pointer gap-2 ${
              profileInfoTab === index ? "border border-primary-main " : ""
            } `}
          >
            <Image
              height={30}
              width={30}
              src={item?.image}
              alt="notification"
            />
            <div className="flex items-center justify-between w-full">
              <div>
                <p
                  className={`${
                    profileInfoTab === index ? "text-primary-main" : ""
                  } font-[300] text-[14px] italic  `}
                >
                  {item?.name}
                </p>
                <p className="w-[80%] text-[12px] text-[#808080] ">
                  {item?.description}
                </p>
              </div>
              <Image
                height={8}
                width={8}
                src="/assets/viewArrow.svg"
                alt="notification"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileSideBar;
