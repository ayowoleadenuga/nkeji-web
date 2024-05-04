import { Progress } from "@nkeji-web/components/ui/progress";
import Image from "next/image";

const FlightRouteCard = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden  mt-5 w-full">
        <div className="px-10 py-5">

       
      <div className="flex justify-between items-center inter-semibold text-base mb-4">
        <div className="flex items-center space-x-4">
          <p>Birmingham</p>
          <Image
            height={18}
            width={18}
            layout="intrinsic"
            src="/assets/to.svg"
            alt=""
            className="cursor-pointer"
          />
          <p>Abuja</p>
        </div>
        <div>
          <p>5 Nov 2024</p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-5">
        <div className="">
      <Image
            height={32}
            width={32}
            layout="intrinsic"
            src="/assets/turkish-avatar.svg"
            alt=""
            className="cursor-pointer mb-1"
          />
          <p className="text-xs text-black ">Turkish</p>
          <p className="text-xs text-black">Airline</p>
        </div>
        <div>
            <p className="text-2xl text-[#1B1E21]">17:10</p>
            <p className="relative inter-semibold text-xs text-[#A3A7AB]">BHX <span className=" top-1/2 left-0">. </span>5 Nov</p>

        </div>
        <div className="flex flex-col items-center space-y-1 w-[70%]">
            <p className="text-xs inter-semibold">22H 40M</p>
            <Progress value={33} />
            <p className="text-xs inter-semibold">2 Stops</p>

        </div>
        <div>
            <p className="text-2xl text-[#1B1E21]">23:59</p>
            <p className="relative inter-semibold text-xs text-[#A3A7AB]">ABV <span className=" top-1/2 left-0">. </span>6 Nov</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
      <Image
            height={32}
            width={32}
            layout="intrinsic"
            src="/assets/turkish-avatar.svg"
            alt=""
            className="cursor-pointer mb-1"
          />
          <p className="text-xs text-black ">Turkish</p>
          <p className="text-xs text-black">Airline</p>
        </div>
        <div>
            <p className="text-2xl text-[#1B1E21]">17:10</p>
            <p className="relative inter-semibold text-xs text-[#A3A7AB]">BHX <span className=" top-1/2 left-0">. </span>5 Nov</p>

        </div>
        <div className="flex flex-col items-center space-y-1 w-[70%]">
            <p className="text-xs inter-semibold">12H 40M</p>
            <Progress value={33} />
            <p className="text-xs inter-semibold">1 Stop</p>

        </div>
        <div>
            <p className="text-2xl text-[#1B1E21]">23:59</p>
            <p className="relative inter-semibold text-xs text-[#A3A7AB]">ABV <span className="absolute top-1/2 left-0">.</span>6 Nov</p>
        </div>
      </div>
      </div>
      <div className="bg-[#F2EEFB] w-full px-10 py-6 flex justify-between">
        <div className="flex items-center space-x-2">
            <p className="text-2xl inter-semibold ">£1,602.45</p>
            <span className="text-[#A3A7AB] text-base inter-medium">per person</span>
        </div>
        <div className="flex space-x-5 items-center ">
            <div className="flex items-start space-x-1 ">
            <p className="text-base w-[200px]">Fly now, pay later with as low as <span className="inter-bold">£500.00</span></p>
            <Image
                  height={18}
                  width={18}
                  layout="intrinsic"
                  src="/assets/circle-info-purple.svg"
                  alt=""
                  className="mt-1"
                />
            </div>
            <div className="bg-[#D7CBF3] rounded-full px-3 py-2 flex space-x-2 cursor-pointer">
                <p className="text-[#7F56D9] inter-bold text-sm">View more details</p>
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
  );
};

export default FlightRouteCard;
