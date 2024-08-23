"use client";

import Image from "next/image";
import ViewFlightDetails from "./view-flight-details";
import { useRef, useState } from "react";
import HowItWorksDialog from "@nkeji-web/components/ui/how-it-works-dialog";
import {
  FlightSearchPayload,
  FlightSearchResult,
} from "@nkeji-web/lib/global-types";
import {
  convertStringToNumber,
  currencyToCode,
  formatDate2,
} from "@nkeji-web/lib/utils";
import Trip from "./trip";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@nkeji-web/components/ui/dialog";
interface RouteCardProps {
  flightData: FlightSearchResult;
  flightSearchPayload: FlightSearchPayload;
  selectOffer: () => void;
}
const FlightRouteCard = ({
  flightData,
  flightSearchPayload,
  selectOffer,
}: RouteCardProps) => {
  const [openViewDetails, setOpenViewDetails] = useState(false);
  const detailsRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const { departure, currency, price } = flightData;
  const fnplDeposit = convertStringToNumber(price) * 0.25;

  const handleViewDetails = () => {
    setOpenViewDetails(!openViewDetails);
  };

  const handleCloseModal = () => {
    if (overlayRef && overlayRef.current) {
      overlayRef.current.click();
    }
  };

  return (
    <div className="w-full ">
      <div className="bg-white rounded-lg overflow-hidden  mt-5 w-full flex items-center flex-col gap-2">
        <div className="w-full">
          <div className="p-2 md:block flex items-start justify-between lg:px-10 lg:pt-5 w-full">
            <div className="md:hidden flex flex-col w-[20%] items-start ">
              <Image
                height={32}
                width={32}
                layout="intrinsic"
                src={departure?.airline?.logo}
                alt=""
                className="cursor-pointer mb-1"
              />
              <p className="text-xs text-black ">{departure?.airline?.name}</p>
            </div>
            <div className="md:flex md:flex-row w-[77%]  md:w-full flex-col justify-between items-end md:items-start inter-semibold text-base ">
              <div className="flex items-start md:items-center md:gap-4 md:justify-normal justify-between  w-full md:w-auto">
                <p className="w-auto ">{flightSearchPayload.departure.city}</p>
                <Image
                  height={18}
                  width={18}
                  layout="intrinsic"
                  src="/assets/to.svg"
                  alt=""
                  className="w-auto cursor-pointer"
                />
                <p className="w-auto ">
                  {flightSearchPayload.destination.city}
                </p>
              </div>
              <div className="w-full md:w-auto">
                <p className="text-end font-[400] md:font-[600]">
                  {formatDate2(flightSearchPayload.departureDate)}
                </p>
              </div>
            </div>
          </div>
          <div className="p-2  lg:px-10 lg:py-5 w-full">
            <Trip trip={departure} />
            {flightData.return && (
              <Trip trip={flightData.return} direction="fro" />
            )}
          </div>
          <div className="w-full bg-[#F2EEFB] p-2 md:px-10 md:py-5 flex items-center flex-col">
            <div className="w-full flex md:flex-row flex-col items-center justify-between mb-4">
              <div className="flex md:flex-row flex-col items-center space-x-2">
                <p className="text-2xl inter-semibold ">
                  {currencyToCode(currency) + price}
                </p>
                <span className="text-[#A3A7AB] text-base inter-medium">
                  in total
                </span>
              </div>
              <div className="flex space-x-5 items-center ">
                <div className="flex items-start text-center justify-center space-x-1 ">
                  <p className="text-base flex md:block items-center gap-1  ">
                    Fly now, pay later with
                    <span className="flex items-center gap-x-1">
                      as low as{" "}
                      <span className="inter-bold">
                        £{fnplDeposit.toFixed(2)}
                      </span>
                    </span>
                  </p>
                  <HowItWorksDialog />
                </div>
                {/* The dialog is now included in this div for extra-large screens */}
                <div className="hidden xl:flex xl:flex-col">
                  <Dialog>
                    <DialogTrigger>
                      <div
                        onClick={handleViewDetails}
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
                    </DialogTrigger>
                    <DialogContent
                      className="max-w-2xl max-h-[80vh] overflow-auto p-0"
                      closeButton={
                        <div className="absolute right-6 top-6">
                          <Image
                            height={32}
                            width={32}
                            layout="intrinsic"
                            src="/assets/close-btn.svg"
                            alt=""
                            className="cursor-pointer mb-1"
                          />
                        </div>
                      }
                    >
                      <div className="mb-[-1.5rem]">
                        <ViewFlightDetails
                          details={flightData}
                          handleSelectOffer={selectOffer}
                          ref={detailsRef}
                          closeModal={handleCloseModal}
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
            {/* This dialog is for smaller screens (hidden on extra-large screens) */}
            <div className="xl:hidden">
              <Dialog>
                <DialogTrigger>
                  <div
                    onClick={handleViewDetails}
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
                </DialogTrigger>
                <DialogContent
                  className="max-w-2xl max-h-[80vh] overflow-auto p-0"
                  closeButton={
                    <div className="absolute right-6 top-6">
                      <Image
                        height={32}
                        width={32}
                        layout="intrinsic"
                        src="/assets/close-btn.svg"
                        alt=""
                        className="cursor-pointer mb-1"
                      />
                    </div>
                  }
                >
                  <div className="mb-[-1.5rem]">
                    <ViewFlightDetails
                      details={flightData}
                      handleSelectOffer={selectOffer}
                      ref={detailsRef}
                      closeModal={handleCloseModal}
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightRouteCard;
