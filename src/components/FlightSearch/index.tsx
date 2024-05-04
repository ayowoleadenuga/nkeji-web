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
import FlightRangeTabs from "./components/flight-range";
import FlightRouteCard from "./components/route-card";
import ContactDetails from "./components/contact-details";
import PassengerDetails from "./components/passenger-details";
import SeatSelection from "./components/seat-selection";
import BaggageProtection from "./components/baggage-protection";
import CancellationProtection from "./components/cancellation-protection";
import PriceDetails from "./components/price-details";
import { CustomerBenefits } from "../Homepage/components/customer-benefit";
import { FAQS } from "../Homepage/components/faq";
import { Footer } from "../Homepage/components/footer";

const FlightSearch = () => {
  const[showFlightComponent,setShowFlightComponent] = useState(false)
  const [currentTab, setCurrentTab]= useState(flightSearchTabs[1].navLink)

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
      <div className="px-6 py-10 lg:px-20 bg-[#F7F8F9] mt-10 flex space-x-4">
      <SearchResultComponent />
      <div className="flex-grow">
        <FlightRangeTabs/>
        <FlightRouteCard />
        <FlightRouteCard />
        <FlightRouteCard />
        <FlightRouteCard />
        <FlightRouteCard />
        <FlightRouteCard />
        <div className="text-center mt-10 bg-[#D7CBF3] mx-auto bg-opacity-20 w-[fit-content] py-2 px-4 rounded-lg">
          <p className="text-[#7F56D9] inter-semibold text-sm ">No more flights</p>
          
        </div>
      </div>
      </div>
      </div>
      }

      {
         currentTab === 'passenger-details' && 
         <div className="w-full px-6 py-5 lg:px-20">
          <div className="flex justify-between items-center bg-white w-full">
          <div className=" flex space-x-3 items-center">
            <h3 className="inter-bold text-2xl">Your flight details</h3>
            <p className="text-[#A3A7AB] inter-bold text-base">BHX - ABV</p>
          </div>
          <div className="ml-auto flex items-center space-x-1">
            <a href="" className="text-[#7F56D9] text-sm inter-semibold underline">View details</a>
            <Image
                  height={10}
                  width={10}
                  layout="intrinsic"
                  src="/assets/dropdown.svg"
                  alt=""
                  className=""
                />
          </div>
          <div>

          </div>
          </div>
          <div className="bg-[#F7F8F9] px-6 py-5 lg:px-20 mt-10 flex justify-between">
            <div className="w-[68%] flex flex-col space-y-3">

            <ContactDetails/>
            <PassengerDetails />
            <SeatSelection />
            </div>
            <div className="w-[30%] flex flex-col space-y-3">
              <CancellationProtection />
              <BaggageProtection />
              <PriceDetails />
            </div>

          
          </div>
          <div className="flex justify-center space-x-3 mt-6">
            <button className="rounded-full px-14 py-3 border border-[#7F56D9] bg-white text-sm inter-semibold">Back</button>
            <button className="rounded-full px-14 py-3 bg-[#7F56D9] text-white text-sm inter-semibold">Next</button>
            </div>
         </div>
      }
      <CustomerBenefits />
      <FAQS />
      <Footer />
    </>
  );
};

export default FlightSearch;
