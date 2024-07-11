"use client";
import { RootState } from "@nkeji-web/redux/store";
import { useSelector } from "react-redux";

const PriceDetails = () => {
  const selected = useSelector((state: RootState) => state.flightSelect);
  const { passengerDetails, selectedFlight } = selected;
  const fullAmount =
    selectedFlight && selectedFlight.price
      ? passengerDetails.length *
        parseFloat(selectedFlight?.price.replace(/[^0-9.-]+/g, ""))
      : 0.0;
  return (
    <div className="bg-white w-full px-5 pt-6 pb-10">
      <div className=" mb-3">
        <h3 className="text-lg inter-semibold text-[#1B1E21]">Price Details</h3>
      </div>
      <div className="flex flex-col space-y-8 mt-5">
        <div className="flex justify-between text-[#7B8086] text-base inter-semibold">
          <p className="">Fare</p>
          <p>{`£${fullAmount}`}</p>
        </div>
        <div className="flex justify-between text-[#7B8086] text-base inter-semibold">
          <p className="">Passenger(s)</p>
          <p>{passengerDetails.length}</p>
        </div>
        <div>
          <div className="flex justify-between text-[#7B8086] text-base inter-semibold mb-2">
            <p className="">Cancellation Protection fee</p>
            <p>£0</p>
          </div>
          <div className="flex justify-between text-[#7B8086] text-base inter-semibold">
            <p className="">Lost Baggage Protection fee</p>
            <p>£0</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-base inter-semibold">Total</p>
            <p className="text-[#A3A7AB] text-xs inter-semibold">
              Includes tax and charges
            </p>
          </div>
          <p className="text-lg inter-semibold">{`£${fullAmount}`}</p>
        </div>
      </div>
    </div>
  );
};
export default PriceDetails;
