import Image from "next/image";
import { packagesArray } from "../constants/constants";

export const HolidayPackages = () => {
  return (
    <div className="py-20 px-10 lg:px-20 bg-white">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left text-[#1B1E21] mb-10 ">
        Holiday Packages
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {packagesArray.map((plan, i) => {
          return (
            <div
              key={`${plan.title}-${i}`}
              className="flex flex-col space-y-1 text-left"
            >
              <Image
                height={256}
                width={367}
                layout="fixed"
                className="w-full rounded-lg mb-1"
                src={plan.icon}
                alt=""
                quality={100}
              />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base md:text-sm lg:text-base font-bold text-[#1B1E21]">
                    {plan.title}
                  </p>
                  <div className="flex items-center space-x-2">
                    <p className="text-xs md:text-sm font-bold text-[#7F56D9]">
                      {plan.amount}
                    </p>
                    <span className="border-[0.4px] border-[#A3A7AB] h-4"></span>
                    <p className="text-xs md:text-sm text-[#A3A7AB]">
                      {plan.date}
                    </p>
                  </div>
                </div>
                <Image
                  height={1}
                  width={1}
                  layout="intrinsic"
                  className="opacity-60 w-4 h-4"
                  src="/assets/arrow-up.svg"
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
