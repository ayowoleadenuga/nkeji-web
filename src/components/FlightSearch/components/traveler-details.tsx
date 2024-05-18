import Image from "next/image";
import { useState } from "react";

interface TravelerDetailsProps {
  setCurrentTab?: any;
  index?: number;
}

interface TravelerDetailsCardProps {
    detail?: string;
    index: number;
  }
const TravelerDetailsCard:React.FC<TravelerDetailsCardProps> = ({detail , index}) => {
    return (
        <div className="w-[33%] px-5 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div
              className={`rounded-full bg-[#D7CBF3]  h-[32px] w-[32px] flex justify-center items-center
               
                `}
            >
              <Image
                height={15}
                width={15}
                src={
                
                     "/assets/contact-purple.svg"
                }
                alt=""
              />
            </div>
            <div>
              <p className="text-base inter-semibold">Passenger {index}</p>
              <p className="text-[#A3A7AB] text-base inter-medium">{detail}</p>
            </div>
          </div>
        
        </div>
  );
};

const TravelerDetails: React.FC<TravelerDetailsProps> = ({
  setCurrentTab,
  index,
}) => {

  return (
    <div>
        <div className="bg-white w-full py-4 px-5">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg inter-bold">Traveler(s) details</h3>
              <p className="text-sm ">
                We&apos;ll send your flight confirmation to the information
                provide.
              </p>
            </div>
            <div
              onClick={()=> index && setCurrentTab(index - 2)}
              className="cursor-pointer flex space-x-2 items-center w-[fit-content]"
            >
              <Image
                height={15}
                width={15}
                src="/assets/edit.svg"
                alt=""
                className="cursor-pointer"
              />
              <p className="text-sm text-[#7F56D9] inter-semibold underline">
                Edit details
              </p>
            </div>
          </div>

          <div className="flex justify-between mt-5 mb-3">
           <TravelerDetailsCard detail="Adult . Female . 1 Jan 1987 " index={1} />
           <TravelerDetailsCard detail="Adult . Female . 1 Jan 1987 " index={2}  />
           <TravelerDetailsCard detail="Adult . Female . 1 Jan 1987 " index={3} />
          </div>
        </div>
    
  
    </div>
  );
};

export default TravelerDetails;
