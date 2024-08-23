import Image from "next/image";
import { flightRangeTabLists } from "../constants/constants";
import {
  FlightSearchResult,
  ResultsTabType,
} from "@nkeji-web/lib/global-types";
import { formatFlightDuration } from "@nkeji-web/lib/utils";
import { DataList } from "./search-result-view";
import { useState, useRef, useEffect } from "react";

const FlightRangeTabs = ({
  data,
  currentTab,
  setCurrentTab,
}: {
  data: DataList | null;
  currentTab: { tag: string; keyword: ResultsTabType };
  setCurrentTab: (tab: { tag: string; keyword: ResultsTabType }) => void;
}) => {
  const dropdownRef = useRef<any>(null);
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);
  const [showCategories, setShowCategories] = useState<boolean>(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowCategories(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowCategories(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={`h-[75px] w-full flex justify-between items-center rounded-lg overflow-hidden bg-white`}
    >
      <div className="md:flex  hidden w-[75%] h-full">
        {flightRangeTabLists.map((tab, index) => {
          return (
            <div
              className={`flex flex-col items-center border-r border-r-[#7F56D9] justify-center cursor-pointer  w-[34%] h-full
              ${currentTab.tag === tab.tag ? "bg-[#7F56D9]" : "bg-white"}
              `}
              onClick={() => setCurrentTab(tab)}
              key={tab.tag}
            >
              <div className="flex  items-center space-x-3">
                <p
                  className={`inter-semibold text-base ${
                    currentTab.tag === tab.tag ? "text-white" : "text-[#A3A7AB]"
                  }`}
                >
                  {tab.tag}
                </p>
                {currentTab.tag === tab.tag && (
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
                {data && (
                  <span
                    className={`text-base flex items-center ${
                      currentTab.tag === tab.tag
                        ? "text-white"
                        : "text-[#1B1E21]"
                    }`}
                  >
                    £{data[tab.keyword][0].price}{" "}
                  </span>
                )}
                <span
                  className="flex items-center justify-center w-5"
                  // Adjust the width as needed to center the period
                >
                  .
                </span>

                {data && (
                  <span
                    className={`text-base ${
                      currentTab.tag === tab.tag
                        ? "text-white"
                        : "text-[#A3A7AB]"
                    }`}
                  >
                    {formatFlightDuration(
                      data[tab.keyword][0].departure.departureTime,
                      data[tab.keyword][0].departure.arrivalTime
                    )}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex  md:hidden w-[75%] h-full">
        <div
          className={`flex flex-col items-center border-r border-r-[#7F56D9] justify-center cursor-pointer  w-full h-full bg-[#7F56D9]`}
          // onClick={() => setCurrentTab(tab)}
        >
          <div className="flex  items-center space-x-3">
            <p className={`inter-semibold text-base text-white`}>
              {flightRangeTabLists[currentTabIndex].tag}
            </p>

            <Image
              height={18}
              width={18}
              layout="intrinsic"
              src="/assets/info-circle.svg"
              alt=""
              className=""
            />
          </div>
          <div className="flex items-center">
            {data && (
              <span
                className={`text-base flex items-center ${
                  currentTab.tag === flightRangeTabLists[currentTabIndex].tag
                    ? "text-white"
                    : "text-[#1B1E21]"
                }`}
              >
                £{data[flightRangeTabLists[currentTabIndex].keyword][0].price}{" "}
              </span>
            )}
            <span
              className="flex items-center justify-center w-5"
              // Adjust the width as needed to center the period
            >
              .
            </span>

            {data && (
              <span className={`text-base text-white`}>
                {formatFlightDuration(
                  data[flightRangeTabLists[currentTabIndex].keyword][0]
                    .departure.departureTime,
                  data[flightRangeTabLists[currentTabIndex].keyword][0]
                    .departure.arrivalTime
                )}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="w-[25%]  h-full flex justify-center items-center space-x-3 ">
        <button className="md:block hidden">Sort</button>
        <Image
          height={18}
          width={18}
          layout="intrinsic"
          src="/assets/filter-lines.svg"
          alt=""
          className="cursor-pointer  hidden md:block "
        />
        <button onClick={() => setShowCategories(!showCategories)}>
          <Image
            height={18}
            width={18}
            layout="intrinsic"
            src="/assets/filter-lines.svg"
            alt=""
            className="cursor-pointer md:hidden block "
          />
        </button>
        {showCategories && (
          <div className="flex flex-col absolute   top-[60px] z-50">
            {flightRangeTabLists.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setShowCategories(false);
                  setCurrentTabIndex(index);
                  setCurrentTab(item);
                }}
                className="text-[14px] text-[#333333] bg-slate-300 rounded-[4px] p-1 w-full"
              >
                {item?.tag}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FlightRangeTabs;
