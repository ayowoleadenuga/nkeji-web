"use client";

import React from "react";
import Image from "next/image";
import DatePickerWithFloatingLabel from "./DatePickerWithFloatingLabel";
import { useRouter } from "next/navigation";
import AirportSearchComponent from "./AirportSearchComponent";
import TripTypeDropdown from "./TripTypeDropdown";
import { useSelector } from "react-redux";
import { RootState } from "@nkeji-web/redux/store";
import { isSearchPayloadValid } from "@nkeji-web/lib/utils";
import PassengersDropdown from "@nkeji-web/components/Homepage/components/PassengersDropdown";
import CabinClassDropdown from "./CabinClassDropdown";
import { TicketType } from "@nkeji-web/lib/global-types";

interface BookingWidgetProps {
  setShowFlightComponent?: any;
  isSamePage?: boolean;
  showTabs?: boolean;
}

const FlightBookingWidget: React.FC<BookingWidgetProps> = ({
  setShowFlightComponent,
  showTabs = true,
  isSamePage = false,
}) => {
  const router = useRouter();
  const flightSearchPayload = useSelector(
    (state: RootState) => state.flightSearch
  );
  const enableButton = isSearchPayloadValid(flightSearchPayload);

  return (
    <>
      <div className="mt-10 relative w-[88%] mx-auto block">
        {showTabs && (
          <div className="flex space-x-3">
            <button className="bg-white text-[#7F56D9] rounded-t-xl py-5 px-10 text-lg inter-bold">
              Flights
            </button>
            <button className="bg-white text-gray-600 rounded-t-xl py-5 px-10 text-lg inter-bold opacity-[.58] cursor-not-allowed">
              Hotels
            </button>
          </div>
        )}
        <div
          className={`top-14 rounded-br-xl rounded-tr-xl ${
            !showTabs && "rounded-tl-xl"
          } rounded-bl-xl bg-white shadow-lg w-full h-[fit-content]  left-0 right-10 lg:right-24 p-3 lg:p-10 ml-0 border-t-[#e6eaef] border-t-[0.5px]`}
        >
          <div className="flex flex-col md:flex-row space-x-0 space-y-3 md:space-y-0 md:space-x-3 lg:space-x-8">
            <TripTypeDropdown />
            <PassengersDropdown />
            <CabinClassDropdown />
          </div>
          <div className="mt-0 lg:mt-6 lg:border border-[#D0D5DD] bg-[#FDFDFD] rounded-[100px] py-4 pl-0 lg:pl-8 pr-0 lg:pr-3  flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between items-center lg:h-[80px]">
            <div className="w-full lg:w-1/2 pl-0  md:pl-6 lg:pl-0 flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center border-0 lg:border-0 border-[#D0D5DD] md:rounded-[100px] rounded-none lg:rounded-none md:border md:h-[80px] relative">
              <div className="w-full  border border-[#D0D5DD] rounded-[100px] md:border-0 md:rounded-none h-[80px] md:h-full">
                <AirportSearchComponent label="From" id="departure" />
              </div>
              <div className="hidden mt-0 px-6 lg:px-5 md:flex items-center md:border-r md:border-l border-l-[#EAEAEB] border-r-[#EAEAEB] h-full">
                {flightSearchPayload.type === TicketType.RETURN ? (
                  <Image
                    height={40}
                    width={40}
                    layout="intrinsic"
                    src="/assets/to-fro.svg"
                    alt=""
                    className=""
                  />
                ) : (
                  <Image
                    height={40}
                    width={40}
                    layout="intrinsic"
                    src="/assets/to.svg"
                    alt=""
                    className=""
                  />
                )}
              </div>
              <div className="border border-[#D0D5DD] rounded-[100px] md:border-0  md:rounded-none h-[80px] md:h-full w-full">
                <AirportSearchComponent label="To" id="destination" />
              </div>
            </div>
            <div className="md:pl-8 lg:pl-0 md:h-[80px] flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center md:border md:border-[#D0D5DD] md:rounded-[100px] lg:border-0 relative">
              <DatePickerWithFloatingLabel
                className="lg:border-l  lg:border-[#EAEAEB] border border-[#D0D5DD] rounded-[100px] md:border-0 md:rounded-none "
                label="Departure"
                id="departure"
                defaultValue=""
                icon
                isDatePicker
              />

              {flightSearchPayload.type === TicketType.RETURN && (
                <DatePickerWithFloatingLabel
                  className="md:border-l lg:border-[#EAEAEB] border border-[#D0D5DD] rounded-[100px] md:border-0 md:rounded-none "
                  label="Return"
                  id="return"
                  defaultValue=""
                  icon
                  isDatePicker
                />
              )}
            </div>

            <button
              type="button"
              disabled={!enableButton}
              onClick={() =>
                isSamePage
                  ? setShowFlightComponent(false)
                  : router.push("/flight-search")
              }
              className={`w-auto text-white ${
                !enableButton ? "bg-gray-400" : "bg-[#7F56D9]"
              } rounded-[100px] py-3 px-14 lg:px-10 text-lg inter-medium ${
                !enableButton && "cursor-not-allowed"
              }`}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightBookingWidget;
