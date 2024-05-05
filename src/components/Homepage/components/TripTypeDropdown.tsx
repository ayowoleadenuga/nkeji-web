import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@nkeji-web/components/ui/dropdown-menu";
import { TicketType } from "@nkeji-web/lib/global-types";
import { updateTicketType } from "@nkeji-web/redux/features/flightSearchReducer";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const TripTypeDropdown = () => {
  const [selectedOption, setSelectedOption] = useState<TicketType>(
    TicketType.ONE_WAY
  );
  const dispatch = useDispatch();
  const handleOptionSelect = (option: TicketType) => {
    setSelectedOption(option);
    dispatch(updateTicketType(option));
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none w-full md:w-1/2 lg:w-[220px]">
        <div className="flex items-center justify-between border border-[#D0D5DD] w-full  rounded-[100px] p-3">
          <span className="flex items-center space-x-2">
            <Image height={15} width={15} src="/assets/plane.svg" alt="" />
            <p>{selectedOption}</p>
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
        <DropdownMenuItem
          onClick={() => handleOptionSelect(TicketType.MULTI_CITY)}
        >
          Multi city trip
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TripTypeDropdown;
