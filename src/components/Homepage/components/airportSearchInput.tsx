"use client";

import { Airport } from "@nkeji-web/lib/global-types";
import useDebounce from "@nkeji-web/lib/useDebounce";
import { cn } from "@nkeji-web/lib/utils";
import { useGetAirportsQuery } from "@nkeji-web/redux/features/apiSlice";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import {
  updateDeparture,
  updateDestination,
} from "@nkeji-web/redux/features/flightSearchReducer";
import React, { useState, useRef, useEffect, MouseEvent } from "react";
import { useDispatch } from "react-redux";

type AirportSearchInputProps = {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  icon?: React.ReactNode;
  locationList?: any;
  isDatePicker?: boolean;
  className?: string;
};
const emptyAirport = { id: "", name: "", city: "", country: "" } as Airport;

const AirportSearchInput: React.FC<AirportSearchInputProps> = ({
  label,
  id,
  className,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState<Airport | undefined>(undefined);
  const [text, setText] = useState<string>("");
  const debouncedText = useDebounce(text);
  const { data } = useGetAirportsQuery(debouncedText);
  const dispatch = useDispatch();
  const action = id === "departure" ? updateDeparture : updateDestination;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const shouldLabelFloat = isFocused || value;
  const handleBlur = () => {
    setIsFocused(false);
  };
  const handleSelectAirport = (
    event: MouseEvent<HTMLLIElement>,
    option: Airport
  ) => {
    console.log("here");
    event.preventDefault();
    setValue(option);
    dispatch(action(option));
  };
  const clearValue = () => {
    setValue(undefined);
    dispatch(action(emptyAirport));
    setText("");
    if (inputRef.current) {
      inputRef.current.autofocus = true;
    }
  };

  return (
    <>
      <div
        className={cn(
          "w-full pl-3 md:w-[200px] lg:w-[240px] justify-start text-left font-normal relative  transition-colors  h-full",
          className
        )}
        onClick={() => setIsFocused(true)}
        onBlur={handleBlur}
      >
        {value && (
          <div className="w-full flex">
            <div className="pt-8 pb-1  px-2 text-gray-700">
              <p className="text-[#33383E] text-sm inter-bold">{value.city}</p>
              <p className="text-[#A3A7AB] text-xs">
                {`${value.name}${" "}(${value.id})`}
              </p>
            </div>

            <p className="ml-2 flex flex-col justify-center">
              <CrossCircledIcon
                onClick={clearValue}
                className="cursor-pointer"
              />
            </p>
          </div>
        )}
        <label
          htmlFor={"date"}
          className={`absolute cursor-pointer left-4 md:left-2 top-1/2  px-0 transition-all ease-in-out duration-300 transform flex  items-center ${
            shouldLabelFloat
              ? "-translate-y-8 text-xs text-purple-500"
              : "text-gray-500 -translate-y-1/2"
          }`}
        >
          <span className="inter-medium">{label}</span>
        </label>
        {isFocused && !value && (
          <input
            type="text"
            ref={inputRef}
            className="mt-8 p-2 w-full outline-none"
            value={text}
            onChange={handleChange}
            autoFocus={isFocused}
          />
        )}
      </div>

      {debouncedText.length > 3 && isFocused && !value && (
        <div className="w-full shadow-lg border-gray-600 bg-[#FDFDFD] rounded p-4 mt-2 h-80 overflow-y-scroll">
          <div className="text-center flex flex-col space-y-5">
            {data?.data?.map((option: Airport, index: number) => {
              return (
                <ul
                  key={index}
                  className="flex justify-between w-full cursor-pointer"
                >
                  <li
                    className="text-left hover:bg-[#eeedfb]"
                    onClick={(e) => handleSelectAirport(e, option)}
                  >
                    <p className="text-[#33383E] text-sm inter-bold">
                      {option.name}
                    </p>
                    <p className="text-[#A3A7AB] text-xs">
                      <span>{option.city}</span>,<span>{option.country}</span>
                    </p>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default AirportSearchInput;
