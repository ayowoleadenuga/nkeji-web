"use client";

import * as React from "react";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { passengerArray } from "../Homepage/constants/constants";
import { count } from "console";


interface PassengerOption {
  title: string;
  description: string;
}

interface SelectedPassengers {
  [key: string]: number;
}

const ReusablePopover = () => {
  const [selectedPassengers, setSelectedPassengers] = React.useState<SelectedPassengers>(
    passengerArray?.reduce((acc, option) => {
      acc[option.title.toLowerCase()] = 0;
      return acc;
    }, {} as SelectedPassengers)
  );

  const handlePassengerChange = (passengerType: string, increment: number) => {
    setSelectedPassengers((prev) => ({
      ...prev,
      [passengerType]: Math.max(prev[passengerType] + increment, 0),
    }));
  };


  
  return (
    <Popover>
      <PopoverTrigger asChild className="focus:outline-none cursor-pointer">
          <div className="flex items-center justify-between border border-[#D0D5DD] w-full md:w-1/2 lg:w-[220px] rounded-[100px] p-3">
            <span className="flex items-center space-x-2">
              <Image height={15} width={15} src="/assets/passenger.svg" alt=""  color="#8A3FFC"/>
              <p>Passengers</p>
            </span>
            <Image
              height={10}
              width={10}
              className="float-right"
              src="/assets/dropdown.svg"
              alt=""
            />
  
            
          </div>
      </PopoverTrigger>
      <PopoverContent className="w-[280px] text-center">
        <div>
          <p className="text-[#7F56D9] inter-bold text-base text-left py-3 ">
            Passengers
          </p>

          <div className="text-center flex flex-col space-y-5">
            {passengerArray?.map((option, index) => {
              const passengerType = option.title.toLowerCase();
              const count = selectedPassengers[passengerType];
              return (
                <div key={index} className="flex justify-between w-full">
                  <div className="text-left">
                    <p className="text-[##33383E] text-base">{option.title}</p>
                    <span className="text-[#A3A7AB] text-xs">
                      {option.description}
                    </span>
                  </div>

                  <div className="flex space-x-5 items-center">
                  {count > 0 && (
                      <Image
                        onClick={() => handlePassengerChange(passengerType, -1)}
                        height={20}
                        width={20}
                        className="float-right cursor-pointer"
                        src="/assets/minus-circle.svg"
                        alt=""
                      />
                    )}

                    <span>{count}</span>

                    <Image
                      onClick={() => handlePassengerChange(passengerType, 1)}
                      height={20}
                      width={20}
                      className="float-right cursor-pointer"
                      src="/assets/add-icon.svg"
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ReusablePopover;

