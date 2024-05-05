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
import { useDispatch } from "react-redux";
import {
  updateDepartureDate,
  updateReturnDate,
} from "@nkeji-web/redux/features/flightSearchReducer";

type DatePickerWithFloatingLabelProps = {
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

const DatePickerWithFloatingLabel: React.FC<
  DatePickerWithFloatingLabelProps
> = ({ label, icon, id, isDatePicker = true, className }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [date, setDate] = React.useState<Date>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id === "departure") {
      dispatch(updateDepartureDate(date));
    }
    if (id === "return") {
      dispatch(updateReturnDate(date));
    }
  }, [date]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          className={cn(
            " w-full pl-3 md:w-[200px] lg:w-[240px] justify-start text-left font-normal relative  transition-colors  h-full",
            className
          )}
          onBlur={() => setIsFocused(false)}
        >
          {isDatePicker && (
            <div className="w-full pt-10 pb-1 px-2 text-gray-700 text-sm">
              {date && format(date, "PPP")}
            </div>
          )}
          <label
            htmlFor={"date"}
            className={`absolute cursor-pointer left-4 md:left-2 top-1/2  px-0 transition-all ease-in-out duration-300 transform flex  items-center ${
              isFocused
                ? "-translate-y-8 text-xs text-purple-500"
                : "text-gray-500 -translate-y-1/2"
            }`}
          >
            {icon && <CalendarIcon className="mr-2 h-4 w-4" color="#8A3FFC" />}
            <span className="inter-medium" onClick={() => setIsFocused(true)}>
              {label}
            </span>
          </label>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto text-center mt-5 " align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePickerWithFloatingLabel;
