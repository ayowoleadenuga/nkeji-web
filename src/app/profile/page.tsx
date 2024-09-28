import React from "react";
import ProfileNavigation from "@nkeji-web/components/Homepage/components/ProfileNavigation";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@nkeji-web/lib/utils";
import ProfileInfo from "@nkeji-web/components/profile/ProfileInfo";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
const page = () => {
  return (
    <div>
      <ProfileNavigation />
      <div className={cn("mt-4 px-6 lg:px-20 font-sans", fontSans.variable)}>
        <h2 className="text-[24px] font-[700] ">Account settings</h2>
        <p className="text-[14px] ">Mirabeloffiong34@gmail.com</p>
        <ProfileInfo />
      </div>
    </div>
  );
};

export default page;
