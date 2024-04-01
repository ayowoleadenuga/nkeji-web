import Image from "next/image";
import React from "react";
import FloatingLabelInput from "./floatingLabelInput";
import { DatePicker } from "@nkeji-web/components/ui/DatePicker";

const FlightBookingWidget = () => {
  return (
    <>
      <div className="mt-10 relative mx-20 w-full hidden lg:block">
        <div className="flex space-x-3">
          <button className="bg-white text-[#7F56D9] rounded-xl py-5 px-8 text-lg inter-medium">
            Flights
          </button>
          <button className="text-white bg-[#7F56D9] rounded-xl py-5 px-8 text-lg inter-medium">
            Hotels
          </button>
        </div>
        <div className="absolute top-14 rounded-br-xl rounded-tr-xl rounded-bl-xl bg-white shadow-lg w-[88%] left-0 right-24 p-10 ml-0">
          <div className="flex space-x-5">
            <div className="flex items-center justify-between border border-[#D0D5DD] w-[220px] rounded-[100px] p-3">
              <span className="flex items-center space-x-2">
                <Image height={15} width={15} src="/assets/plane.svg" alt="" />
              </span>
              <select className="appearance-none text-[#667085] text-base bg-transparent focus:outline-none">
                <option>One-way Trip</option>
                <option>Return Trip</option>
              </select>
              <Image
                height={10}
                width={10}
                className="float-right"
                src="/assets/dropdown.svg"
                alt=""
              />
            </div>
            <div className="flex items-center justify-between border border-[#D0D5DD] w-[220px] rounded-[100px] p-3">
              <span className="flex items-center space-x-2">
                <Image
                  height={15}
                  width={15}
                  src="/assets/passenger.svg"
                  alt=""
                />
              </span>
              <select className="appearance-none text-[#667085] text-base bg-transparent focus:outline-none">
                <option>Passenger(s)</option>
                <option>Adult (12+)</option>
                <option>Kids (2-11)</option>
                <option>Infants (Under 2)</option>
              </select>
              <Image
                height={10}
                width={10}
                layout="intrinsic"
                src="/assets/dropdown.svg"
                alt=""
              />
            </div>
          </div>
          <div className="mt-6 border border-[#D0D5DD] rounded-[100px] py-5 pl-8 pr-3 flex justify-between">
            {/* <div className="w-[40%]">
              <div className="flex space-x-20 items-center">
                <div className="flex flex-col space-y-2 items-start">
                  <span className="text-[#A3A7AB] text-[13px] ">From</span>
                  <span className="text-[#33383E] text-base ">Lagos LOS</span>
                </div>
                <Image
                  height={1}
                  width={1}
                  layout="intrinsic"
                  src="/assets/to-fro.svg"
                  alt=""
                />
                <div className="flex flex-col space-y-2 items-start">
                  <span className="text-[#A3A7AB] text-[13px] ">To</span>
                  <span className="text-[#33383E] text-base ">
                    Capetown CPT
                  </span>
                </div>
              </div>
            </div>
            <div className="border-l border-l-[#D0D5DD] pl-10 flex justify-between w-[60%]">
              <div className="flex space-x-20 items-center">
                <div className="flex flex-col space-y-2 items-start">
                  <span className="text-[#A3A7AB] text-[13px] ">Departure</span>
                  <span className="text-[#33383E] text-base ">
                    12 November 2023
                  </span>
                </div>
                <Image
                  height={1}
                  width={1}
                  layout="intrinsic"
                  src="/assets/to-fro.svg"
                  alt=""
                />
                <div className="flex flex-col space-y-2 items-start">
                  <span className="text-[#A3A7AB] text-[13px] ">Return</span>
                  <span className="text-[#33383E] text-base ">
                    16 November 2023
                  </span>
                </div>
              </div>

              <button className="text-white bg-[#7F56D9] rounded-[100px] py-3 px-10 text-lg inter-medium">
                Search
              </button>
            </div> */}

            <FloatingLabelInput
              label="From"
              id="from"
              defaultValue=""
              placeholder="City or Airport"
            />
            <FloatingLabelInput
              label="To"
              id="to"
              defaultValue=""
              placeholder="City or Airport"
            />
            <FloatingLabelInput
              label="Departure"
              id="departure"
              type="date"
              placeholder="Departure"
              defaultValue=""
            />
            <FloatingLabelInput
              label="Return"
              id="return"
              type="date"
              placeholder="Return"
              defaultValue=""
            />
            <DatePicker />
            <button className="text-white bg-[#7F56D9] rounded-[100px] py-3 px-10 text-lg inter-medium">
              Search
            </button>
          </div>
        </div>
      </div>
      {/* Your existing mobile structure */}
      <div className="mobile-view block lg:hidden mt-10 relative mx-auto w-full md:w-[80%]">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <button className="text-[#7F56D9] rounded-xl py-3 px-6 text-base font-medium border border-[#7F56D9]">
              Flights
            </button>
            <button className="text-white bg-[#7F56D9] rounded-xl py-3 px-6 text-base font-medium">
              Hotels
            </button>
          </div>
          <div className="border border-[#D0D5DD] rounded-xl p-3 mb-4">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[#667085] text-base">Return Trip</span>
              <Image
                height={1}
                width={1}
                layout="intrinsic"
                src="/assets/dropdown.svg"
                alt=""
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#667085] text-base">Passengers</span>
              <Image
                height={1}
                width={1}
                layout="intrinsic"
                src="/assets/dropdown.svg"
                alt=""
              />
            </div>
          </div>
          <div className="border border-[#D0D5DD] rounded-xl p-3 mb-4">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[#A3A7AB] text-sm">From</span>
              <span className="text-[#33383E] text-base">Lagos LOS</span>
            </div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-[#A3A7AB] text-sm">To</span>
              <span className="text-[#33383E] text-base">Capetown CPT</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#A3A7AB] text-sm">Departure</span>
              <span className="text-[#33383E] text-base">12 November 2023</span>
            </div>
          </div>
          <button className="text-white bg-[#7F56D9] rounded-xl py-3 px-6 text-base font-medium w-full">
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default FlightBookingWidget;
