"use client";

import React from "react";
import Image from "next/image";
import DatePickerWithFloatingLabel from "./DatePickerWithFloatingLabel";
import { useRouter } from "next/navigation";
import AirportSearchComponent from "./AirportSearchComponent";
import TripTypeDropdown from "./TripTypeDropdown";
import { useSelector } from "react-redux";
import { isSearchPayloadValid } from "@nkeji-web/lib/utils";
import PassengersDropdown from "@nkeji-web/components/Homepage/components/PassengersDropdown";
import CabinClassDropdown from "./CabinClassDropdown";
import { TicketType } from "@nkeji-web/lib/global-types";
import { RootState } from "@nkeji-web/redux/store";
import { useGetFlightsMutation } from "@nkeji-web/redux/features/apiSlice";

interface BookingWidgetProps {
  setShowFlightComponent?: (show: boolean) => void;
  isSamePage?: boolean;
  showTabs?: boolean;
  searchHandler?: () => void;
}

const FlightBookingWidget: React.FC<BookingWidgetProps> = ({
  setShowFlightComponent,
  showTabs = true,
  isSamePage = false,
  searchHandler,
}) => {
  const router = useRouter();
  const flightSearchPayload = useSelector(
    (state: RootState) => state.flightSearch
  );
  const enableButton = isSearchPayloadValid(flightSearchPayload);

  const searchButtonHandler = () => {
    if (!!setShowFlightComponent) {
      setShowFlightComponent(false);
    }
    if (isSamePage && !!searchHandler) {
      searchHandler();
    } else {
      router.push("/flight-search");
    }
  };

  return (
    <>
      <div className="mt-10 relative w-full md:w-[88%] mx-auto block">
        {showTabs && (
          <div className="flex justify-between md:justify-normal md:space-x-3 px-3 md:px-0 ">
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
          } rounded-bl-xl bg-white sm:shadow-lg w-full h-[fit-content]  left-0 right-10 xl:right-24 p-3 xl:p-10 ml-0 border-t-[#e6eaef] border-t-[0.5px]`}
        >
          <div className="flex flex-wrap justify-between xl:justify-start w-full gap-3">
            <TripTypeDropdown />
            <PassengersDropdown />
            <CabinClassDropdown />
          </div>
          <div className="mt-0 xl:mt-6 xl:border border-[#D0D5DD] bg-[#FDFDFD] rounded-[100px] py-4 pl-0 xl:pl-3 pr-2   flex flex-col xl:flex-row space-y-4 xl:space-y-0 justify-between items-center xl:h-[80px] md:space-x-3 xl:space-x-4">
            <div className="w-full xl:w-1/2 pl-0  md:pl-6 xl:pl-0 flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center border-0 xl:border-0 border-[#D0D5DD] md:rounded-[100px] rounded-none xl:rounded-none md:border md:h-[80px] relative">
              <div className="w-full  border border-[#D0D5DD] rounded-[100px] md:border-0 md:rounded-none  h-[80px] md:h-full">
                <AirportSearchComponent label="From" id="departure" />
              </div>
              <div className="hidden mt-0 px-6 xl:px-5 md:flex items-center md:border-r md:border-l  border-l-[#EAEAEB] border-r-[#EAEAEB] h-full">
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
              <div className="border relative border-[#D0D5DD] rounded-[100px] md:border-0  md:rounded-none h-[80px] md:h-full w-full">
                <AirportSearchComponent label="To" id="destination" />
                <div className="md:hidden absolute right-2 top-[-50px] mt-0 px-6 xl:px-5 flex items-center md:border-r md:border-l  border-l-[#EAEAEB] border-r-[#EAEAEB] h-full">
                  {flightSearchPayload.type === TicketType.RETURN ? (
                    <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-gray-300">
                      <Image
                        height={20}
                        width={20}
                        layout="intrinsic"
                        src="/assets/to-fro.svg"
                        alt=""
                        className="rotate-90"
                      />
                    </div>
                  ) : (
                    <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-gray-300 ">
                      <Image
                        height={20}
                        width={20}
                        layout="intrinsic"
                        src="/assets/to.svg"
                        alt=""
                        className="rotate-90"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="md:pl-8 xl:pl-0 md:h-[80px] flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center md:border md:border-[#D0D5DD] md:rounded-[100px] xl:border-0 relative w-full xl:w-auto ">
              <DatePickerWithFloatingLabel
                className="xl:border-l  xl:border-[#EAEAEB] border border-[#D0D5DD] rounded-[100px] md:border-0 md:rounded-none "
                label="Departure"
                id="departure"
                icon
              />

              {flightSearchPayload.type === TicketType.RETURN && (
                <DatePickerWithFloatingLabel
                  className="md:border-l xl:border-[#EAEAEB] border border-[#D0D5DD] rounded-[100px] md:border-0 md:rounded-none "
                  label="Return"
                  id="return"
                  icon
                />
              )}
            </div>
            <div className="block xl:flex  ">
              <button
                type="button"
                disabled={!enableButton}
                onClick={searchButtonHandler}
                className={`w-auto text-white ${
                  !enableButton ? "bg-gray-400" : "bg-[#7F56D9]"
                } rounded-[100px] py-3 px-14  xl:px-5 text-lg inter-medium ${
                  !enableButton && "cursor-not-allowed"
                }`}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightBookingWidget;
