import Image from "next/image";
import { flightRangeTabLists } from "../constants/constants";
import {
  FlightSearchResult,
  ResultsTabType,
} from "@nkeji-web/lib/global-types";
import { formatFlightDuration } from "@nkeji-web/lib/utils";
import { DataList } from "./search-result-view";

const FlightRangeTabs = ({
  data,
  currentTab,
  setCurrentTab,
}: {
  data: DataList | null;
  currentTab: { tag: string; keyword: ResultsTabType };
  setCurrentTab: (tab: { tag: string; keyword: ResultsTabType }) => void;
}) => {
  return (
    <div
      className={`h-[75px] w-full flex justify-between items-center rounded-lg overflow-hidden bg-white`}
    >
      {flightRangeTabLists.map((tab, index) => {
        return (
          <div
            className={`flex flex-col items-center border-r border-r-[#7F56D9] justify-center cursor-pointer  w-[25%] h-full
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
                    currentTab.tag === tab.tag ? "text-white" : "text-[#1B1E21]"
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
                    currentTab.tag === tab.tag ? "text-white" : "text-[#A3A7AB]"
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
