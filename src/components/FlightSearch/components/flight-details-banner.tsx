import { FlightSearchPayload, TicketType } from "@nkeji-web/lib/global-types";
import {
  formatDate,
  formatPassengerCount,
  truncateSentence,
} from "@nkeji-web/lib/utils";
import Image from "next/image";
import DetailsBanner from "./details-banner";

interface FlightDetailsBannerProps {
  flightSearchPayload: FlightSearchPayload;
  setShowFlightComponent: (show: boolean) => void;
}

const FlightDetailsBanner = ({
  flightSearchPayload,
  setShowFlightComponent,
}: FlightDetailsBannerProps) => {
  return (
    <>
      <DetailsBanner flightSearchPayload={flightSearchPayload} />
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
