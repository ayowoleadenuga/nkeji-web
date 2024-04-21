// @refresh reset
"use client";

import Image from "next/image";
import Navigation from "../Homepage/components/navigation";
import FlightTabs from "./components/flight-tabs";
import { MapImg } from "./constants/images";
import { useState } from "react";
import FlightBookingWidget from "../Homepage/components/flightBookingWidget";
import SearchResultComponent from "./components/search-result";
import { flightSearchTabs } from "./constants/constants";

const FlightSearch = () => {
  const[showFlightComponent,setShowFlightComponent] = useState(false)
  const [currentTab, setCurrentTab]= useState(flightSearchTabs[0].navLink)

  return (
    <>
      <Navigation hasBg />
      <FlightTabs currentTab={currentTab} setCurrentTab={setCurrentTab}  />
      { 
      currentTab === flightSearchTabs[0].navLink &&
     <div>
      <div>

      {
        showFlightComponent ? 
        <FlightBookingWidget setShowFlightComponent={setShowFlightComponent} isSamePage />
      :
      <div className="px-6 lg:px-20 bg-white mt-10 w-full flex flex-col lg:flex-row justify-between ">
        <div className="w-[38%] ">
          <div className="flex justify-between items-start">
            <div>
            <div>
              <label htmlFor="" className="text-gray-500 text-xs inter-semibold">
                From
              </label>

              <p className="text-[#33383E] text-sm inter-medium">Birmingham</p>
              <p className="text-[#7B8086] inter-semibold text-xs">
                Birmingham Intl. Airport (BHX)
              </p>
            </div>
            <div className="mt-5">
              <label htmlFor="" className="text-gray-500 text-xs inter-semibold">
                Departure
              </label>

              <p className="text-[#33383E] text-sm inter-medium">
                12 Nov 2024 - 12 Nov 2024
              </p>
            </div>
            </div>
          
            <Image
              height={40}
              width={40}
              layout="intrinsic"
              src="/assets/to-fro.svg"
              alt=""
              className=""
            />
            <div>
            <div>
              <label htmlFor="" className="text-gray-500 text-xs inter-semibold">
                To
              </label>

              <p className="text-[#33383E] text-sm inter-medium">Abuja</p>
              <p className="text-[#7B8086] inter-semibold text-xs">
                Nnamdi Azikiwe Airport (ABV)
              </p>
            </div>
            <div className="mt-5">
              <label htmlFor="" className="text-gray-500 text-xs inter-semibold" >
                Passengers
              </label>

              <p className="text-[#33383E] text-sm inter-medium">
                2 Adult, 1 Child
              </p>
            </div>
            </div>
          
          </div>
          <div className="flex space-x-1 items-start mt-5 cursor-pointer  w-[fit-content]">
            
          <Image
              height={18}
              width={18}
              layout="intrinsic"
              src="/assets/edit.svg"
              alt=""
              className=""
            />
          
        <a 
        onClick={()=> setShowFlightComponent(true) }
        className="text-[#7F56D9]  text-sm inter-semibold underline">Modify search</a>
          </div>
        </div>
        <Image src={MapImg} alt="map" className="w-1/2" />
      </div>
      }
      </div>
      <div className="px-6 py-10 lg:px-20 bg-[#F7F8F9] mt-10">

      <SearchResultComponent />
      </div>
        </div>
      }
     
    </>
  );
};

export default FlightSearch;
