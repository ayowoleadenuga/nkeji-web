import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@nkeji-web/components/ui/dropdown-menu";
import { CabinClass } from "@nkeji-web/lib/global-types";
import { updateCabinClass } from "@nkeji-web/redux/features/flightSearchReducer";
import { RootState } from "@nkeji-web/redux/store";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CabinClassDropdown = () => {
  const dispatch = useDispatch();
  const cabinClass = useSelector(
    (state: RootState) => state.flightSearch.cabinClass
  );
  const handleOptionSelect = (option: CabinClass) => {
    dispatch(updateCabinClass(option));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none w-full md:w-1/2 lg:w-[220px]">
        <div className="flex items-center justify-between border border-[#D0D5DD] w-full  rounded-[100px] p-3">
          <span className="flex items-center space-x-2">
            <Image height={15} width={15} src="/assets/plane.svg" alt="" />
            <p>{cabinClass}</p>
          </span>

          <Image
            height={10}
            width={10}
            className="float-right"
            src="/assets/dropdown.svg"
            alt=""
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[220px] text-center">
        <DropdownMenuItem
          onClick={() => handleOptionSelect(CabinClass.ECONOMY)}
          className="text-center"
        >
          Economy
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleOptionSelect(CabinClass.PREMIUM_ECONOMY)}
        >
          Premium Economy
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleOptionSelect(CabinClass.BUSINESS)}
        >
          Business
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleOptionSelect(CabinClass.FIRST)}>
          First class
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CabinClassDropdown;
