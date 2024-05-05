import Image from "next/image";

const FlightView = ({ place}:any)=>{
    return (
        <div className="px-10">
              <div className="relative">
         
        <h3 className="text-lg inter-bold">Your flight to {place}</h3>
      
      </div>
      <div className="flex justify-between items-start mt-5">
        <div className="">
          <div className="flex space-x-2 ">
            <span className="mt-3 flex flex-col items-center space-y-[1px]">
              <span className="rounded-full h-4 w-4 bg-[#7F56D9]"></span>
              <span className="rounded h-24 w-1 bg-[#7F56D9]"></span>
            </span>
            <div className="flex space-x-4 items-start">
              <span className="flex flex-col space-y-1">
                <span className="text-xs ">6:15am</span>
                <span className="inter-semibold text-[#A3A7AB] text-xs">
                  Tue 5 Mar
                </span>
              </span>
              <span className="flex flex-col space-y-1">
                <span className="text-xs ">Birmingham</span>
                <span className="inter-semibold text-[#A3A7AB] text-xs">
                  Terminal 2
                </span>
              </span>
            </div>
          </div>
          <div className="flex space-x-2 ">
            <span className="flex flex-col items-center space-y-[1px]">
              <span className="rounded-full h-4 w-4 bg-[#D7CBF3]"></span>
              <span className="rounded h-24 w-1 bg-[#D7CBF3]"></span>
            </span>
            <div>

            <div className="flex space-x-4 items-start">
              <span className="flex flex-col space-y-1">
                <span className="text-xs ">10:15am</span>
                <span className="inter-semibold text-[#A3A7AB] text-xs">
                  Tue 6 Mar
                </span>
              </span>
              <span className="flex flex-col space-y-1">
                <span className="text-xs ">Casablanca Mohamed V Apt</span>
                <span className="inter-semibold text-[#A3A7AB] text-xs">
                  Terminal 22
                </span>
              </span>
            
            </div>

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
                  Layover 1H 39M
                </span>
              </span>
            </div>
          </div>
          <div className="flex space-x-2 ">
            <span className=" flex flex-col items-center space-y-[1px]">
              <span className="rounded-full h-4 w-4 bg-[#D7CBF3]"></span>
              <span className="rounded h-24 w-1 bg-[#7F56D9]"></span>
              <Image
                  height={18}
                  width={18}
                  layout="intrinsic"
                  src="/assets/flight.svg"
                  alt=""
                  className="transform rotate-90"
                />
            </span>
            <div className="flex flex-col justify-between">
            <div className="flex space-x-4 items-start">
              <span className="flex flex-col space-y-1">
                <span className="text-xs ">12:15am</span>
                <span className="inter-semibold text-[#A3A7AB] text-xs">
                  Tue 5 Mar
                </span>
              </span>
              <span className="flex flex-col space-y-1">
                <span className="text-xs ">Birmingham</span>
                <span className="inter-semibold text-[#A3A7AB] text-xs">
                  Terminal 12
                </span>
              </span>
            </div>

            <div className="flex space-x-4 items-start">
              <span className="flex flex-col space-y-1">
                <span className="text-xs ">6:15am</span>
                <span className="inter-semibold text-[#A3A7AB] text-xs">
                  Tue 7 Mar
                </span>
              </span>
              <span className="flex flex-col space-y-1">
                <span className="text-xs ">Abuja</span>
                <span className="inter-semibold text-[#A3A7AB] text-xs">
                  Terminal 22
                </span>
              </span>
            </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between h-[300px] mt-5">
        <div className="flex space-x-2">
      <Image
            height={32}
            width={32}
            layout="intrinsic"
            src="/assets/turkish-avatar.svg"
            alt=""
            className="cursor-pointer mb-1"
          />
          <div>
         
          <p className="text-xs text-black ">Turkish Airline</p>
          <p className="relative inter-semibold text-xs text-[#A3A7AB]">TK1022 . Business </p>

          <p className="text-xs text-black">Flight time 14H 20M</p>
            
        </div>
        </div>

        <div className="flex space-x-2">
      <Image
            height={32}
            width={32}
            layout="intrinsic"
            src="/assets/turkish-avatar.svg"
            alt=""
            className="cursor-pointer mb-1"
          />
          <div>
         
          <p className="text-xs text-black ">Turkish Airline</p>
          <p className="relative inter-semibold text-xs text-[#A3A7AB]">TK1022 . Business </p>

          <p className="text-xs text-black">Flight time 14H 20M</p>
            
        </div>
        </div>
        </div>
      </div>
        </div>
    )
}
const ViewFlightDetails = ({ setOpenViewDetails }: any) => {
  return (
    <div className="bg-white  pt-5 rounded-lg mt-2 shadow-lg relative">
             <div 
        className="absolute right-6 top-6"
        onClick={() => setOpenViewDetails(false)}>
          <Image
            height={32}
            width={32}
            layout="intrinsic"
            src="/assets/close-btn.svg"
            alt=""
            className="cursor-pointer mb-1"
          />
        </div>
      <FlightView setOpenViewDetails={setOpenViewDetails} place='Abuja' />
      <div className="mt-5"></div>
      <FlightView setOpenViewDetails={setOpenViewDetails} place='Birmingham' />
      <div className="bg-[#FAFAFA] w-full flex flex-wrap gap-10 px-10 pt-10 pb-20 mt-5">
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
            <p className="text-xs">Carry on bag</p>
            <p className="text-[#7F56D9] text-xs ">Max weight is 2kg</p>
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
            <p className="text-xs">Snacks provided</p>
            <p className="text-[#7F56D9] text-xs ">Max weight is 23kg</p>

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
  );
};

export default ViewFlightDetails;
