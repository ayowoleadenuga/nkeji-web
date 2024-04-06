"use client";
import { Calendar } from "@nkeji-web/components/ui/calendar";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nkeji-web/components/ui/popover";
import { cn } from "@nkeji-web/lib/utils";
import React, { useState, useRef, useEffect } from "react";
import { CalendarIcon } from "lucide-react";

type FloatingLabelInputProps = {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  icon?: React.ReactNode;
  locationList?: any;
  isDatePicker?: boolean;
};

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  label,
  id,
  type = "text",
  placeholder,
  defaultValue,
  icon,
  locationList,
  isDatePicker = false
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState<{ state: string; city: string }>();
  const [date, setDate] = React.useState<any>();

  const inputRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   if (inputRef.current && defaultValue) {
  //     setValue(defaultValue);
  //   }
  // }, [defaultValue]);

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => setIsFocused(false);
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  //   setValue(e.target.value);

  const shouldLabelFloat = isFocused || value;

  return (
      <Popover>
        <PopoverTrigger asChild>
          <div
            className={cn(
              "w-[240px] justify-start text-left font-normal relative  transition-colors  h-full",
              // !isDatePicker && "text-muted-foreground"
            )}
            onClick={() => setIsFocused(true)}
          >
                {isDatePicker && (
            <div className="w-full pt-3 pb-1 px-2 text-gray-700 text-sm">
              { date && format(date, "PPP")}
            </div>
          )}
            {value && (
              <div
                ref={inputRef}
                className="w-full pt-2 pb-1  px-2 text-gray-700"
              >
                <p className="text-[#33383E] text-sm inter-bold">
                  {value.state}
                </p>
                <p className="text-[#A3A7AB] text-xs">{value.city}</p>
              </div>
            )}
             <label
            htmlFor={"date"}
            className={`absolute left-2 top-2 px-0 transition-all ease-in-out duration-300 transform flex  items-center ${
              shouldLabelFloat
                ? "-translate-y-4 text-xs text-purple-500"
                : "text-gray-500"
            }`}
          >
            {
              icon && 
            <CalendarIcon className="mr-2 h-4 w-4" />
            }
            <span className="inter-medium">{label}</span>
          </label>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto text-center mt-5" align="start">
          {
            isDatePicker ?
            <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
          :
          <div>
            <div className="text-center flex flex-col space-y-5">
              {locationList?.map((option: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="flex justify-between w-full cursor-pointer"
                    onClick={() => {
                      setValue((val) => ({
                        ...val,
                        state: option.state,
                        city: option.city,
                      }));
                    }}
                  >
                    <div className="text-left">
                      <p className="text-[#33383E] text-sm inter-bold">
                        {option.state}
                      </p>
                      <p className="text-[#A3A7AB] text-xs">{option.city}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          }
        </PopoverContent>
      </Popover>
  );
};

export default FloatingLabelInput;
