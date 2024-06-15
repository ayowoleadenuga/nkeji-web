import { FlightSearchPayload, TicketType } from "@nkeji-web/lib/global-types";
import {
  formatDate,
  formatPassengerCount,
  truncateSentence,
} from "@nkeji-web/lib/utils";
import Image from "next/image";

interface FlightDetailsBannerProps {
  flightSearchPayload: FlightSearchPayload;
  setShowFlightComponent: (show: boolean) => void;
}

const FlightDetailsBanner = ({
  flightSearchPayload,
  setShowFlightComponent,
}: FlightDetailsBannerProps) => {
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
      <div className="flex justify-between items-start">
        <div>
          <div>
            <label className="text-gray-500 text-xs inter-semibold">From</label>
            <p className="text-[#33383E] text-sm inter-medium">
              {departure.city}
            </p>
            <p className="text-[#7B8086] inter-semibold text-xs">{`${truncateSentence(
              departure.name,
              20
            )}(${departure.id})`}</p>
          </div>
          <div className="mt-5">
            <label className="text-gray-500 text-xs inter-semibold">
              Departure
            </label>
            <p className="text-[#33383E] text-sm inter-medium">
              {type === TicketType.RETURN && returnDate
                ? `${formatDate(departureDate)} - ${formatDate(returnDate)}`
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
            <label className="text-gray-500 text-xs inter-semibold">To</label>
            <p className="text-[#33383E] text-sm inter-medium">
              {destination.city}
            </p>
            <p className="text-[#7B8086] inter-semibold text-xs">{`${truncateSentence(
              destination.name,
              20
            )}(${destination.id})`}</p>
          </div>
          <div className="mt-5">
            <label className="text-gray-500 text-xs inter-semibold">
              Passengers
            </label>
            <p className="text-[#33383E] text-sm inter-medium">
              {formatPassengerCount(passengerCount)}
            </p>
          </div>
        </div>
      </div>
      <div className="flex space-x-1 items-start mt-5 cursor-pointer w-[fit-content]">
        <Image
          height={18}
          width={18}
          layout="intrinsic"
          src="/assets/edit.svg"
          alt=""
        />
        <a
          onClick={() => setShowFlightComponent(true)}
          className="text-[#7F56D9] text-sm inter-semibold underline"
        >
          Modify search
        </a>
      </div>
    </>
  );
};

export default FlightDetailsBanner;
