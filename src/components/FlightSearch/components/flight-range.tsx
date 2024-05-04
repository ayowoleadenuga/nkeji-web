"use client";
import { useState } from "react";
import Image from "next/image";
import { flightRangeTabLists } from "../constants/constants";

const FlightRangeTabs = () => {
  const [currentTab, setCurrentTab] = useState(flightRangeTabLists[0].tag);

  return (
    <div
      className={`h-[75px] w-full flex justify-between items-center rounded-lg overflow-hidden bg-white`}
    >
      {flightRangeTabLists.map((tab, index) => {
        return (
          <div
            className={`flex flex-col items-center border-r border-r-[#7F56D9] justify-center cursor-pointer  w-[25%] h-full
              ${currentTab === tab.tag ? "bg-[#7F56D9]" : "bg-white"}
              `}
            onClick={() => setCurrentTab(tab.tag)}
            key={tab.tag}
          >
            <div className="flex  items-center space-x-3">
              <p
                className={`inter-semibold text-base ${
                  currentTab === tab.tag ? "text-white" : "text-[#A3A7AB]"
                }`}
              >
                {tab.tag}
              </p>
              {currentTab === tab.tag && (
                <Image
                  height={18}
                  width={18}
                  layout="intrinsic"
                  src="/assets/info-circle.svg"
                  alt=""
                  className=""
                />
              )}
            </div>
            <div className="flex items-center">
              <span
                className={`text-base flex items-center ${
                  currentTab === tab.tag ? "text-white" : "text-[#1B1E21]"
                }`}
              >
                £{tab.price}{" "}
              </span>
              <span
                className="flex items-center justify-center w-5"
                // Adjust the width as needed to center the period
              >
                .
              </span>

              <span
                className={`text-base ${
                  currentTab === tab.tag ? "text-white" : "text-[#A3A7AB]"
                }`}
              >
                {tab.duration}
              </span>
            </div>
          </div>
        );
      })}
      <div className="w-[25%] h-full flex justify-center items-center space-x-3">
        <p>Sort</p>
        <Image
          height={18}
          width={18}
          layout="intrinsic"
          src="/assets/filter-lines.svg"
          alt=""
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default FlightRangeTabs;
