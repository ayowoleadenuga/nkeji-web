import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@nkeji-web/components/ui/dropdown-menu";
import { TicketType } from "@nkeji-web/lib/global-types";
import { updateTicketType } from "@nkeji-web/redux/features/flightSearchReducer";
import { RootState } from "@nkeji-web/redux/store";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const TripTypeDropdown = () => {
  const dispatch = useDispatch();
  const handleOptionSelect = (option: TicketType) => {
    dispatch(updateTicketType(option));
  };
  const tripType = useSelector((state: RootState) => state.flightSearch.type);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none w-full min-w-fit md:w-[45%] lg:w-[220px]">
        <div className="flex items-center justify-between border border-[#D0D5DD] w-full  rounded-[100px] p-3">
          <span className="flex items-center space-x-2">
            <Image height={15} width={15} src="/assets/plane.svg" alt="" />
            <p>{tripType}</p>
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
          onClick={() => handleOptionSelect(TicketType.RETURN)}
          className="text-center"
        >
          Round trip
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleOptionSelect(TicketType.ONE_WAY)}
        >
          One way trip
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TripTypeDropdown;
