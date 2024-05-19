// @refresh reset
"use client";

import Image from "next/image";
import Navigation from "../Homepage/components/navigation";
import FlightTabs from "./components/flight-tabs";
import { MapImg } from "./constants/images";
import { useCallback, useEffect, useState } from "react";
import SearchResultComponent from "./components/search-result";
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
import FlightBookingWidget from "../Homepage/components/flightBookingWidget";
import { useSelector } from "react-redux";
import { RootState } from "@nkeji-web/redux/store";
import { useGetFlightsMutation } from "@nkeji-web/redux/features/apiSlice";
import {
  formatDate,
  formatPassengerCount,
  truncateSentence,
} from "@nkeji-web/lib/utils";
import { FlightSearchResult, TicketType } from "@nkeji-web/lib/global-types";
import LoadingSpinner from "./components/loading-spinner";
import TravelerDetails from "./components/traveler-details";
import BaggageReview from "./components/baggage-review";
import BaggageAllowance from "./components/baggage-allowance";

const SubHeader = () => {
  return (
    <div className="flex justify-between items-center bg-white w-full px-6 lg:px-20">
      <div className=" flex space-x-3 items-center">
        <h3 className="inter-bold text-2xl">Your flight details</h3>
        <p className="text-[#A3A7AB] inter-bold text-base">BHX - ABV</p>
      </div>
      <div className="ml-auto flex items-center space-x-1">
        <a href="" className="text-[#7F56D9] text-sm inter-semibold underline">
          View details
        </a>
        <Image
          height={10}
          width={10}
          layout="intrinsic"
          src="/assets/dropdown.svg"
          alt=""
          className=""
        />
      </div>
      <div></div>
    </div>
  );
};

const FlightSearch = () => {
  const [showFlightComponent, setShowFlightComponent] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);
  const flightSearchPayload = useSelector(
    (state: RootState) => state.flightSearch
  );
  const [getFlightsMutation, { data, isLoading }] = useGetFlightsMutation();
  const search = useCallback(async () => {
    try {
      await getFlightsMutation(flightSearchPayload);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    search();
  }, []);

  const {
    departure,
    departureDate,
    destination,
    returnDate,
    noOfAdults,
    noOfInfants,
    noOfKids,
    type,
  } = flightSearchPayload;
  const passengerCount = {
    adults: noOfAdults,
    children: noOfKids,
    infants: noOfInfants,
  };

  return (
    <>
      {isLoading ? (
        <div className="bg-white flex items-center justify-center h-screen">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <Navigation hasBg />
          <FlightTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
          {currentTab === 0 && (
            <div>
              <div>
                {showFlightComponent ? (
                  <FlightBookingWidget
                    setShowFlightComponent={setShowFlightComponent}
                    isSamePage
                    showTabs={false}
                  />
                ) : (
                  <div className="px-6 lg:px-20 bg-white mt-10 w-full flex flex-col lg:flex-row justify-between ">
                    <div className="w-[38%] ">
                      <div className="flex justify-between items-start">
                        <div>
                          <div>
                            <label
                              htmlFor=""
                              className="text-gray-500 text-xs inter-semibold"
                            >
                              From
                            </label>

                            <p className="text-[#33383E] text-sm inter-medium">
                              {departure.city}
                            </p>
                            <p className="text-[#7B8086] inter-semibold text-xs">
                              {`${truncateSentence(departure.name, 20)}(${
                                departure.id
                              })`}
                            </p>
                          </div>
                          <div className="mt-5">
                            <label
                              htmlFor=""
                              className="text-gray-500 text-xs inter-semibold"
                            >
                              Departure
                            </label>
                            <p className="text-[#33383E] text-sm inter-medium">
                              {type === TicketType.RETURN && returnDate
                                ? `${formatDate(departureDate)} - ${formatDate(
                                    returnDate
                                  )}`
                                : formatDate(departureDate)}
                            </p>
                          </div>
                        </div>

                        {type === TicketType.RETURN ? (
                          <Image
                            height={30}
                            width={30}
                            layout="intrinsic"
                            src="/assets/to-fro.svg"
                            alt=""
                            className="mt-4"
                          />
                        ) : (
                          <Image
                            height={30}
                            width={30}
                            layout="intrinsic"
                            src="/assets/to.svg"
                            alt=""
                            className="mt-4"
                          />
                        )}
                        <div>
                          <div>
                            <label
                              htmlFor=""
                              className="text-gray-500 text-xs inter-semibold"
                            >
                              To
                            </label>

                            <p className="text-[#33383E] text-sm inter-medium">
                              {destination.city}
                            </p>
                            <p className="text-[#7B8086] inter-semibold text-xs">
                              {`${truncateSentence(destination.name, 20)}(${
                                destination.id
                              })`}
                            </p>
                          </div>
                          <div className="mt-5">
                            <label
                              htmlFor=""
                              className="text-gray-500 text-xs inter-semibold"
                            >
                              Passengers
                            </label>

                            <p className="text-[#33383E] text-sm inter-medium">
                              {formatPassengerCount(passengerCount)}
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
                          onClick={() => setShowFlightComponent(true)}
                          className="text-[#7F56D9]  text-sm inter-semibold underline"
                        >
                          Modify search
                        </a>
                      </div>
                    </div>
                    <Image src={MapImg} alt="map" className="w-1/2" />
                  </div>
                )}
              </div>
              <div className="px-6 py-10 lg:px-20 bg-[#F7F8F9] mt-10 flex space-x-4">
                <SearchResultComponent />
                <div className="w-[74%]">
                  <FlightRangeTabs />
                  {data?.data?.map((offer: FlightSearchResult) => (
                    <div key={offer.id}>
                      <FlightRouteCard
                        flightData={offer}
                        flightSearchPayload={flightSearchPayload}
                      />
                    </div>
                  ))}

                  <div className="text-center mt-10 bg-[#D7CBF3] mx-auto bg-opacity-20 w-[fit-content] py-2 px-4 rounded-lg">
                    <p className="text-[#7F56D9] inter-semibold text-sm ">
                      No more flights
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentTab === 1 && (
            <div className="w-full py-5 ">
              <SubHeader />
              <div className="bg-[#F7F8F9] px-6 py-5 lg:px-20 mt-10 flex justify-between">
                <div className="w-[68%] flex flex-col space-y-3">
                  <ContactDetails />
                  <PassengerDetails />
                  <SeatSelection />
                </div>
                <div className="w-[30%] flex flex-col space-y-3">
                  <CancellationProtection />
                  <BaggageProtection />
                  <PriceDetails />
                </div>
              </div>
            </div>
          )}

          {currentTab === 2 && (
            <div className="w-full py-5">
              <SubHeader />

              <div className="bg-[#F7F8F9] px-6 py-5 lg:px-20 mt-10 flex justify-between">
                <div className="w-[68%] flex flex-col space-y-3">
                  <ContactDetails
                    showDetails
                    setCurrentTab={setCurrentTab}
                    index={2}
                  />
                  <BaggageAllowance setCurrentTab={setCurrentTab} index={2} />
                  <div className="bg-white w-full py-6 px-5">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg inter-bold">Extras</h3>
                      <p className="text-base inter-bold">£0</p>
                    </div>
                  </div>
                </div>
                <div className="w-[30%] flex flex-col space-y-3">
                  <CancellationProtection />
                  <BaggageProtection />
                  <PriceDetails />
                </div>
              </div>
            </div>
          )}
          {currentTab === 3 && (
            <div className="w-full py-5">
              <SubHeader />

              <div className="bg-[#F7F8F9] px-6 py-5 lg:px-20 mt-10 flex justify-between">
                <div className="w-[68%] flex flex-col space-y-3">
                  <ContactDetails
                    showDetails
                    setCurrentTab={setCurrentTab}
                    index={3}
                  />
                  <TravelerDetails index={3} setCurrentTab={setCurrentTab} />
                  <BaggageReview />
                </div>
                <div className="w-[30%] flex flex-col space-y-3">
                  <CancellationProtection />
                  <BaggageProtection />
                  <PriceDetails />
                </div>
              </div>
            </div>
          )}

          {currentTab >= 1 && (
            <div className="flex justify-center space-x-3 mt-6">
              <button
                type="button"
                onClick={() => setCurrentTab(currentTab - 1)}
                className="rounded-full px-14 py-3 border border-[#7F56D9] bg-white text-sm inter-semibold"
              >
                Back
              </button>
              <button
                onClick={() => setCurrentTab(currentTab + 1)}
                type="button"
                className="rounded-full px-14 py-3 bg-[#7F56D9] text-white text-sm inter-semibold"
              >
                {currentTab === 3 ? "Make payment" : "Next"}
              </button>
            </div>
          )}
          <CustomerBenefits />
          <FAQS />
          <Footer />
        </>
      )}
    </>
  );
};

export default FlightSearch;
