import { Departure } from "@nkeji-web/lib/global-types";
import {
  convertToFormattedDateTime,
  formatFlightDuration,
} from "@nkeji-web/lib/utils";
import Image from "next/image";
import React from "react";

export interface TripProps {
  trip: Departure;
  direction?: "to" | "fro";
}

const Trip = ({ trip, direction = "to" }: TripProps) => {
  if (!trip) {
    return <div>Invalid trip found</div>;
  }
  const {
    departureTime,
    arrivalTime,
    departureAirport,
    airline,
    arrivalAirport,
    stops,
  } = trip;
  const depatureDateTime = convertToFormattedDateTime(departureTime);
  const arrivalDateTime = convertToFormattedDateTime(arrivalTime);
  const duration = formatFlightDuration(departureTime, arrivalTime);
  return (
    <div
      className={`flex justify-between items-center ${
        direction === "to" ? "mb-5" : ""
      }`}
    >
      <div className="mr-4">
        <Image
          height={32}
          width={32}
          layout="intrinsic"
          src={airline.logo}
          alt=""
          className="cursor-pointer mb-1 mx-auto"
        />
        <p className="text-xs text-black ">{airline.name}</p>
      </div>
      <div>
        <p className="text-2xl text-[#1B1E21]">{depatureDateTime.time}</p>
        <p className="relative inter-semibold text-xs text-[#A3A7AB]">
          {departureAirport.id} <span className=" top-1/2 left-0">. </span>
          {depatureDateTime.date}
        </p>
      </div>
      <div className="flex flex-col items-center space-y-1 w-[70%]">
        <p className="text-xs inter-semibold">{duration}</p>
        <span className="flex w-full items-center justify-center h-1">
          {direction === "fro" && (
            <Image
              height={18}
              width={18}
              layout="intrinsic"
              src="/assets/flight.svg"
              alt=""
              className="cursor-pointer  transform rotate-180"
            />
          )}
          <span
            className={`h-1 w-[30%] rounded-tl rounded-bl bg-[#7F56D9]`}
          ></span>
          <span className="h-1 w-[30%] bg-[#D7CBF3]"></span>
          <span
            className={`h-1 w-[30%] bg-[#7F56D9] rounded-tr rounded-br`}
          ></span>
          {direction === "to" && (
            <Image
              height={18}
              width={18}
              layout="intrinsic"
              src="/assets/flight.svg"
              alt=""
              className="cursor-pointer "
            />
          )}
        </span>
        <p className="text-xs inter-semibold">{`${stops} ${
          stops > 1 ? "stops" : "stop"
        }`}</p>
      </div>
      <div>
        <p className="text-2xl text-[#1B1E21]">{arrivalDateTime.time}</p>
        <p className="relative inter-semibold text-xs text-[#A3A7AB]">
          {arrivalAirport.id} <span className=" top-1/2 left-0">. </span>
          {arrivalDateTime.date}
        </p>
      </div>
    </div>
  );
};

export default Trip;
