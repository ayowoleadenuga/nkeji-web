"use client";

import React, { useState } from "react";
import Image from "next/image";
import FloatingLabelInput from "./floatingLabelInput";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@nkeji-web/components/ui/dropdown-menu";
import ReusablePopover from "@nkeji-web/components/ui/reusable-popover";
import { fromDestinations, toDestination } from "../constants/constants";
import { useGetAirportsQuery } from "@nkeji-web/redux/features/apiSlice";

const FlightBookingWidget = () => {
  const [selectedOption, setSelectedOption] = useState("Round Trip");
  const { data, isLoading, error } = useGetAirportsQuery("birmingham");
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };
  console.log({ data });
  return (
    <>
      <div className="mt-10 relative w-[88%] mx-auto block">
        <div className="flex space-x-3">
          <button className="bg-white text-[#7F56D9] rounded-t-xl py-5 px-10 text-lg inter-bold">
            Flights
          </button>
          <button className="bg-white text-gray-600 rounded-t-xl py-5 px-10 text-lg inter-bold opacity-[.58] cursor-not-allowed">
            Hotels
          </button>
        </div>
        <div className="top-14 rounded-br-xl rounded-tr-xl rounded-bl-xl bg-white shadow-lg w-full h-[fit-content]  left-0 right-10 lg:right-24 p-3  lg:p-10 ml-0">
          <div className="flex flex-col md:flex-row space-x-0 space-y-3 md:space-y-0 md:space-x-3 lg:space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-none w-full md:w-1/2 lg:w-[220px]">
                <div className="flex items-center justify-between border border-[#D0D5DD] w-full  rounded-[100px] p-3">
                  <span className="flex items-center space-x-2">
                    <Image
                      height={15}
                      width={15}
                      src="/assets/plane.svg"
                      alt=""
                    />
                    <p>{selectedOption}</p>
                  </span>

                  <Image
                    height={10}
                    width={10}
                    className="float-right"
                    src="/assets/dropdown.svg"
                    alt=""
                  />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[220px] text-center">
                <DropdownMenuItem
                  onClick={() => handleOptionSelect("Round Trip")}
                  className="text-center"
                >
                  Round trip
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleOptionSelect("One-way Trip")}
                >
                  One way trip
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleOptionSelect("Multi-city Trip")}
                >
                  Multi city trip
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <ReusablePopover />
          </div>
          <div className="mt-0 lg:mt-6 lg:border border-[#D0D5DD] bg-[#FDFDFD] rounded-[100px] py-4 pl-0 lg:pl-8 pr-0 lg:pr-3  flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between items-center lg:h-[80px]">
            <div className="w-full lg:w-1/2 pl-0  md:pl-6 lg:pl-0 flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center border-0 lg:border-0 border-[#D0D5DD] md:rounded-[100px] rounded-none lg:rounded-none md:border md:h-[80px] relative">
              <div className="w-full  border border-[#D0D5DD] rounded-[100px] md:border-0 md:rounded-none h-[80px] md:h-full">
                <FloatingLabelInput
                  label="From"
                  id="from"
                  defaultValue=""
                  placeholder="City or Airport"
                  locationList={fromDestinations}
                />
              </div>
              <div className="hidden  mt-0 px-6 lg:px-5 md:flex items-center md:border-r md:border-l border-l-[#EAEAEB] border-r-[#EAEAEB] h-full">
                <Image
                  height={40}
                  width={40}
                  layout="intrinsic"
                  src="/assets/to-fro.svg"
                  alt=""
                  className=""
                />
              </div>
              <div className="border border-[#D0D5DD] rounded-[100px] md:border-0  md:rounded-none h-[80px] md:h-full w-full">
                <FloatingLabelInput
                  label="To"
                  id="to"
                  defaultValue=""
                  placeholder="City or Airport"
                  locationList={toDestination}
                />
              </div>
            </div>
            <div className="w-full md:pl-8 lg:pl-0 lg:w-[35%] md:h-[80px] flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center md:border md:border-[#D0D5DD] md:rounded-[100px] lg:border-0 relative">
              <FloatingLabelInput
                className="lg:border-l  lg:border-[#EAEAEB] border border-[#D0D5DD] rounded-[100px] md:border-0 md:rounded-none "
                label="Departure"
                id="departure"
                defaultValue=""
                icon
                isDatePicker
              />

              <FloatingLabelInput
                className="md:border-l lg:border-[#EAEAEB] border border-[#D0D5DD] rounded-[100px] md:border-0 md:rounded-none "
                label="Return"
                id="return"
                defaultValue=""
                icon
                isDatePicker
              />
            </div>

            <button className="w-auto text-white bg-[#7F56D9] rounded-[100px] py-3 px-14 lg:px-10 text-lg inter-medium">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightBookingWidget;
