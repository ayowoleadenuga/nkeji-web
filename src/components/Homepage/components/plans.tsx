import Image from "next/image";
import { planArray } from "../constants/constants";

export const PlanComponent = () => {
  return (
    <div>
            <div className="mb-5">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl inter-bold text-[#1B1E21] mb-5 md:w-2/5 lg:w-2/5 mx-auto">
          Empowering Travelers with Financial Flexibility
        </h2>
        <p className="text-[#717171] text-base md:text-lg lg:text-xl inter-medium md:w-3/5 lg:w-3/5 mx-auto text-center">
          Experience financial flexibility, zero interest installment plans,
          convertible points rewards, tailored packaged holidays, exclusive
          last-minute flight deals, and inclusive financial solutions.
        </p>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {planArray.map((plan, i) => {
        return (
          <div
            key={`${plan.title}-${i}`}
            className="bg-[#FAFAFA] py-10 px-6 flex flex-col space-y-6 text-left"
          >
            <span className="bg-white rounded-full p-4 w-[fit-content]">
              <Image
                height={1}
                width={1}
                layout="intrinsic"
                className="w-8"
                src={plan.icon}
                alt=""
              />
            </span>
            <p className="text-[#1B1E21] inter-bold text-xl">{plan.title}</p>
            <p className="text-[#717171] text-[15px] ">{plan.content}</p>
          </div>
        );
      })}
    </div>
    </div>

  );
};
