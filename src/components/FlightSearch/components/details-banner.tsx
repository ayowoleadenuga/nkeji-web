import {
  formatDate,
  formatPassengerCount,
  truncateSentence,
} from "@nkeji-web/lib/utils";
import Image from "next/image";
import { FlightSearchPayload, TicketType } from "@nkeji-web/lib/global-types";

const DetailsBanner = ({
  flightSearchPayload,
}: {
  flightSearchPayload: FlightSearchPayload;
}) => {
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
    <div className="flex justify-between items-start w-full">
      <div className="w-[45%] ">
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
          height={20}
          width={20}
          layout="intrinsic"
          src="/assets/to-fro.svg"
          alt=""
          className="mt-[20%] md:mt-4 rotate-90 md:rotate-0"
        />
      ) : (
        <Image
          height={20}
          width={20}
          layout="intrinsic"
          src="/assets/to.svg"
          alt=""
          className="mt-[20%] md:mt-4 rotate-90 md:rotate-0"
        />
      )}
      <div className="w-[45%] ">
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
  );
};

export default DetailsBanner;
