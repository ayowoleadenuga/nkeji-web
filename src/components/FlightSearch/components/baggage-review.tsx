import { Luggage } from "@nkeji-web/lib/global-types";
import { RootState } from "@nkeji-web/redux/store";
import Image from "next/image";
import { useSelector } from "react-redux";

interface BaggageReviewCardProps {
  place?: string;
  handLuggage?: Luggage;
  checkedInLuggage?: Luggage;
}
const BaggageReviewCard: React.FC<BaggageReviewCardProps> = ({
  place,
  handLuggage,
  checkedInLuggage,
}) => {
  return (
    <div className="bg-[#F2EEFB] rounded-xl w-[26%] overflow-hidden">
      <div className="px-6 pt-6 pb-10">
        <h3 className="inter-semibold text-base">Flight to {place}</h3>
        <div className=" mt-5 flex items-center space-x-2">
          <Image
            height={32}
            width={32}
            layout="intrinsic"
            src="/assets/luggage.svg"
            alt=""
            className="cursor-pointer mb-1"
          />
          <div className="inter-semibold">
            <p className="text-xs">
              {handLuggage
                ? `${handLuggage.pieces} Carry on bag`
                : "3 Carry on bag"}
            </p>
            <p className="text-[#7F56D9] text-xs ">{`Max weight is ${
              handLuggage ? handLuggage.size : 12
            } ${handLuggage ? handLuggage.massUnit : "kg"}`}</p>
          </div>
        </div>
        <div className=" mt-5 flex items-center space-x-2">
          <Image
            height={32}
            width={32}
            layout="intrinsic"
            src="/assets/checked-luggage.svg"
            alt=""
            className="cursor-pointer mb-1"
          />
          <div className="inter-semibold">
            <p className="text-xs">3 checked bags</p>
            <p className="text-[#7F56D9] text-xs ">{`Max weight is ${
              checkedInLuggage ? checkedInLuggage.size : 12
            } ${checkedInLuggage ? checkedInLuggage.massUnit : "kg"}`}</p>
          </div>
        </div>
        <div className="mt-5">
          <p className="text-[#4B525A] text-xs inter-semibold underline">
            View baggage per traveller
          </p>
        </div>
      </div>
    </div>
  );
};

const BaggageReview = ({}) => {
  const selectedFlight = useSelector(
    (state: RootState) => state.flightSelect.selectedFlight
  );
  // console.log({ selectedFlight });
  return (
    <div>
      <div className="bg-white w-full py-4 px-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg inter-bold">Baggage</h3>
            <p className="text-sm ">
              Total number of bags included for all travellers
            </p>
          </div>
        </div>

        <div className="flex space-x-4 mt-5 mb-3 ">
          <BaggageReviewCard
            place={selectedFlight?.departure.arrivalAirport.city}
            handLuggage={selectedFlight?.handLuggage}
            checkedInLuggage={selectedFlight?.checkedInLuggage}
          />
          {selectedFlight?.return?.arrivalAirport.city && (
            <BaggageReviewCard
              place={selectedFlight?.return?.arrivalAirport.city}
              handLuggage={selectedFlight?.handLuggage}
              checkedInLuggage={selectedFlight?.checkedInLuggage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BaggageReview;
