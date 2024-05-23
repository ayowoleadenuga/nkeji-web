import Image from "next/image";
import { Departure, FlightSearchResult } from "@nkeji-web/lib/global-types";
import { useCallback } from "react";
import {
  convertToFormattedDateTime,
  formatFlightDuration,
  truncateSentence,
} from "@nkeji-web/lib/utils";

interface ViewFlightDetailsProps {
  details: FlightSearchResult;
  setOpenViewDetails: (open: boolean) => void;
  handleSelectOffer: () => void;
}

const ViewFlightDetails = ({
  setOpenViewDetails,
  details,
  handleSelectOffer,
}: ViewFlightDetailsProps) => {
  const {
    departureStops,
    departure,
    returnStops,
    handLuggage,
    checkedInLuggage,
    price,
  } = details;
  const renderStops = useCallback((stops: Departure[] | null) => {
    if (stops && stops.length > 0) {
      return stops.map((stop: Departure, index: number) => (
        <div key={index} className="flex justify-between items-start">
          <div className="">
            <div className="flex space-x-2 ">
              <span className=" flex flex-col items-center space-y-[1px]">
                <span className="rounded-full h-4 w-4 bg-[#7F56D9]"></span>
                <span className="rounded h-24 w-1 bg-[#7F56D9]"></span>
              </span>
              <div className="flex space-x-4 items-start">
                <span className="flex flex-col space-y-1">
                  <span className="text-xs ">
                    {convertToFormattedDateTime(stop.departureTime).time}
                  </span>
                  <span className="inter-semibold text-[#A3A7AB] text-xs">
                    {convertToFormattedDateTime(stop.departureTime).date}
                  </span>
                </span>
                <span className="flex flex-col space-y-1">
                  <span className="text-xs ">{`${truncateSentence(
                    stop.departureAirport.name,
                    25
                  )}, ${stop.departureAirport.city}`}</span>
                  <span className="inter-semibold text-[#A3A7AB] text-xs">
                    Terminal
                  </span>
                </span>
              </div>
            </div>
            <div className="flex space-x-2 ">
              <span className="flex flex-col items-center space-y-[1px]">
                {index === stops.length - 1 ? (
                  <Image
                    height={18}
                    width={18}
                    layout="intrinsic"
                    src="/assets/flight.svg"
                    alt="airplane icon"
                    className="transform rotate-90 -ml-[0.08px]"
                  />
                ) : (
                  <>
                    <span className="rounded-full h-4 w-4 bg-[#D7CBF3]"></span>
                    <span className="rounded h-24 w-1 bg-[#D7CBF3]"></span>
                  </>
                )}
              </span>
              <div>
                <div className="flex space-x-4 items-start">
                  <span className="flex flex-col space-y-1">
                    <span className="text-xs ">
                      {convertToFormattedDateTime(stop.arrivalTime).time}
                    </span>
                    <span className="inter-semibold text-[#A3A7AB] text-xs">
                      {convertToFormattedDateTime(stop.arrivalTime).date}
                    </span>
                  </span>
                  <span className="flex flex-col space-y-1">
                    <span className="text-xs ">
                      <span className="text-xs ">{`${truncateSentence(
                        stop.arrivalAirport.name,
                        25
                      )}, ${stop.arrivalAirport.city}`}</span>
                    </span>
                    <span className="inter-semibold text-[#A3A7AB] text-xs">
                      Terminal
                    </span>
                  </span>
                </div>

                {index < stops.length - 1 && (
                  <span className="mt-4 flex items-center space-x-2">
                    <Image
                      height={18}
                      width={18}
                      layout="intrinsic"
                      src="/assets/clock.svg"
                      alt=""
                      className=""
                    />
                    <span className="inter-semibold text-[#A3A7AB] text-xs">
                      Layover{" "}
                      {formatFlightDuration(
                        stop.arrivalTime,
                        stops[index + 1].departureTime
                      )}
                    </span>
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center h-full mt-10">
            <div className="flex space-x-2">
              <Image
                height={40}
                width={40}
                layout="intrinsic"
                src={stop.airline.logo}
                alt={stop.airline.name}
                className="cursor-pointer mb-1"
              />
              <div>
                <p className="text-xs text-black ">{stop.airline.name}</p>
                <p className="relative inter-semibold text-xs text-[#A3A7AB]">
                  {stop.airline.code}
                </p>

                <p className="text-xs text-black">
                  Flight time{" "}
                  {formatFlightDuration(stop.departureTime, stop.arrivalTime)}
                </p>
              </div>
            </div>
          </div>
        </div>
      ));
    }
  }, []);

  const departurePath =
    departureStops && departureStops.length ? departureStops : [departure];
  const returnPath =
    returnStops && returnStops.length
      ? returnStops
      : details.return
      ? [details.return]
      : null;
  return (
    <div className="bg-white  pt-5 rounded-lg mt-2 shadow-lg relative">
      <div className="px-10">
        <div
          className="absolute right-6 top-6"
          onClick={() => setOpenViewDetails(false)}
        >
          <Image
            height={32}
            width={32}
            layout="intrinsic"
            src="/assets/close-btn.svg"
            alt=""
            className="cursor-pointer mb-1"
          />
        </div>
        <div className="w-full mt-2 mb-8">
          <div className="relative">
            <h2 className="text-xl inter-bold">
              Your departure flight to{" "}
              {departurePath &&
                departurePath.length > 0 &&
                departurePath[departurePath.length - 1].arrivalAirport.city}
            </h2>
          </div>
        </div>
        {renderStops(departurePath)}
        {returnPath && returnPath.length > 0 ? (
          <>
            <div className="w-full mt-20 mb-8">
              <div className="relative">
                <h2 className="text-xl inter-bold">
                  Your return flight to{" "}
                  {returnPath &&
                    returnPath.length > 0 &&
                    returnPath[returnPath.length - 1].arrivalAirport.city}
                </h2>
              </div>
            </div>
            {renderStops(returnPath)}
          </>
        ) : (
          ""
        )}
      </div>

      <div className="bg-[#FAFAFA] w-full px-10 pt-10 pb-20 mt-5">
        <div className="w-full flex flex-wrap gap-10">
          <div className="w-[20%] flex items-center space-x-2">
            <Image
              height={32}
              width={32}
              layout="intrinsic"
              src="/assets/luggage.svg"
              alt=""
              className="cursor-pointer mb-1"
            />
            <div className="inter-semibold">
              <p className="text-xs">{handLuggage?.pieces || 1} Carry on bag</p>
              <p className="text-[#7F56D9] text-xs ">
                Max weight is{" "}
                {`${handLuggage?.size || 8}${handLuggage?.massUnit || "kg"}`}
              </p>
            </div>
          </div>

          <div className=" w-[20%] flex items-center space-x-2">
            <Image
              height={32}
              width={32}
              layout="intrinsic"
              src="/assets/snacks.svg"
              alt=""
              className="cursor-pointer mb-1"
            />
            <div className="inter-semibold">
              <p className="text-xs">Snacks provided</p>
            </div>
          </div>

          <div className="w-[20%] flex items-center space-x-2">
            <Image
              height={32}
              width={32}
              layout="intrinsic"
              src="/assets/protected.svg"
              alt=""
              className="cursor-pointer mb-1"
            />
            <div className="inter-semibold">
              <p className="text-xs">Protected transfer</p>
            </div>
          </div>

          <div className="w-[20%] flex items-center space-x-2">
            <Image
              height={32}
              width={32}
              layout="intrinsic"
              src="/assets/no-entertainment.svg"
              alt=""
              className="cursor-pointer mb-1"
            />
            <div className="inter-semibold">
              <p className="text-xs">No entertainment</p>
            </div>
          </div>

          <div className="w-[20%] flex items-center space-x-2">
            <Image
              height={32}
              width={32}
              layout="intrinsic"
              src="/assets/checked-luggage.svg"
              alt=""
              className="cursor-pointer mb-1"
            />
            <div className="inter-semibold">
              <p className="text-xs">
                {checkedInLuggage?.pieces || 2} checked bags
              </p>
              <p className="text-[#7F56D9] text-xs ">
                Max weight is{" "}
                {`${checkedInLuggage?.size || 23}${
                  checkedInLuggage?.massUnit || "kg"
                }`}
              </p>
            </div>
          </div>

          <div className="w-[20%] flex items-center space-x-2">
            <Image
              height={32}
              width={32}
              layout="intrinsic"
              src="/assets/power-outlet.svg"
              alt=""
              className="cursor-pointer mb-1"
            />
            <div className="inter-semibold">
              <p className="text-xs">No Power outlet</p>
            </div>
          </div>

          <div className="w-[20%] flex items-center space-x-2">
            <Image
              height={32}
              width={32}
              layout="intrinsic"
              src="/assets/no-wifi.svg"
              alt=""
              className="cursor-pointer mb-1"
            />
            <div className="inter-semibold">
              <p className="text-xs">No Wi-Fi</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-10 pt-10 pb-10 bg-[#D7CBF3]">
        <div className=" my-auto flex">
          <h4 className="text-xl inter-bold mr-2">£{price}</h4>
          <span className="inter-semibold text-[#95989b] text-md">
            per person
          </span>
        </div>
        <button
          type="button"
          onClick={handleSelectOffer}
          className={`w-auto  text-white bg-[#7F56D9] rounded-[100px] py-3 px-14 lg:px-10 text-lg inter-medium float-right`}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default ViewFlightDetails;
