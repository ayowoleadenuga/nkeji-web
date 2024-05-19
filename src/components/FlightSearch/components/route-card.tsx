"use client";

import Image from "next/image";
import ViewFlightDetails from "./view-flight-details";
import { useState } from "react";
import HowItWorksDialog from "@nkeji-web/components/ui/how-it-works-dialog";
import {
  FlightSearchPayload,
  FlightSearchResult,
} from "@nkeji-web/lib/global-types";
import {
  convertToFormattedDateTime,
  currencyToCode,
} from "@nkeji-web/lib/utils";
import Trip from "./trip";
interface RouteCardProps {
  flightData: FlightSearchResult;
  flightSearchPayload: FlightSearchPayload;
}
const FlightRouteCard = ({
  flightData,
  flightSearchPayload,
}: RouteCardProps) => {
  const [openViewDetails, setOpenViewDetails] = useState(false);
  const { departure, currency, price } = flightData;
  return (
    <div className="w-full">
      <div className="bg-white rounded-lg overflow-hidden  mt-5 w-full">
        <div className="px-10 py-5">
          <div className="flex justify-between items-center inter-semibold text-base mb-4">
            <div className="flex items-center space-x-4">
              <p>{flightSearchPayload.departure.city}</p>
              <Image
                height={18}
                width={18}
                layout="intrinsic"
                src="/assets/to.svg"
                alt=""
                className="cursor-pointer"
              />
              <p>{flightSearchPayload.destination.city}</p>
            </div>
            <div>
              <p>{flightSearchPayload.departureDate}</p>
            </div>
          </div>
          <Trip trip={departure} />
          {flightData.return && (
            <Trip trip={flightData.return} direction="fro" />
          )}
        </div>

        <div className="bg-[#F2EEFB] w-full px-10 py-6 flex justify-between">
          <div className="flex items-center space-x-2">
            <p className="text-2xl inter-semibold ">
              {currencyToCode(currency) + price}
            </p>
            <span className="text-[#A3A7AB] text-base inter-medium">
              per person
            </span>
          </div>
          <div className="flex space-x-5 items-center ">
            <div className="flex items-start space-x-1 ">
              <p className="text-base w-[200px]">
                Fly now, pay later with as low as{" "}
                <span className="inter-bold">£500.00</span>
              </p>

              <HowItWorksDialog />
            </div>
            <div
              onClick={() => setOpenViewDetails(!openViewDetails)}
              className="bg-[#D7CBF3] rounded-full px-3 py-2 flex space-x-2 cursor-pointer"
            >
              <p className="text-[#7F56D9] inter-bold text-sm">
                View more details
              </p>
              <Image
                height={12}
                width={12}
                layout="intrinsic"
                src="/assets/dropdown.svg"
                alt=""
                className=""
              />
            </div>
          </div>
        </div>
      </div>
      {openViewDetails && (
        <div className="max-w-full">
          <ViewFlightDetails
            setOpenViewDetails={setOpenViewDetails}
            details={flightData}
          />
        </div>
      )}
    </div>
  );
};

export default FlightRouteCard;
