"use client";

import * as React from "react";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { passengerArray } from "../constants/constants";
import { formatPassengerCount } from "@nkeji-web/lib/utils";
import {
  updateNoOfAdults,
  updateNoOfInfants,
  updateNoOfKids,
} from "@nkeji-web/redux/features/flightSearchReducer";
import { useDispatch, useSelector } from "react-redux";
import {
  selectNoOfAdults,
  selectNoOfInfants,
  selectNoOfKids,
} from "@nkeji-web/redux/selectors";

interface SelectedPassengers {
  [key: string]: number;
}

const PassengersDropdown = () => {
  const dispatch = useDispatch();

  const noOfAdults = useSelector(selectNoOfAdults);
  const noOfInfants = useSelector(selectNoOfInfants);
  const noOfKids = useSelector(selectNoOfKids);

  const [selectedPassengers, setSelectedPassengers] =
    React.useState<SelectedPassengers>({
      adults: noOfAdults || 0,
      children: noOfKids || 0,
      infants: noOfInfants || 0,
    });

  const { adults, children, infants } = selectedPassengers;

  const handlePassengerChange = React.useCallback(
    (passengerType: string, increment: number) => {
      setSelectedPassengers((prev) => ({
        ...prev,
        [passengerType]: Math.max(prev[passengerType] + increment, 0),
      }));
    },
    []
  );

  React.useEffect(() => {
    setSelectedPassengers({
      adults: noOfAdults,
      children: noOfKids,
      infants: noOfInfants,
    });
  }, [noOfAdults, noOfInfants, noOfKids]);

  React.useEffect(() => {
    dispatch(updateNoOfAdults(adults));
    dispatch(updateNoOfInfants(infants));
    dispatch(updateNoOfKids(children));
  }, [adults, children, infants, dispatch]);

  return (
    <Popover>
      <PopoverTrigger asChild className="focus:outline-none cursor-pointer">
        <div className="flex items-center justify-between border border-[#D0D5DD] w-full md:w-1/2 lg:w-[220px] rounded-[100px] p-3">
          <span className="flex items-center space-x-2">
            <Image
              height={15}
              width={15}
              src="/assets/passenger.svg"
              alt=""
              color="#8A3FFC"
            />
            <p>{formatPassengerCount(selectedPassengers)}</p>
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

export default PassengersDropdown;
