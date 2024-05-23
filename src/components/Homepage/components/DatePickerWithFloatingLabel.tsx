"use client";
import { Calendar } from "@nkeji-web/components/ui/calendar";
import { format, parse } from "date-fns";
import { cn } from "@nkeji-web/lib/utils";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { CalendarIcon } from "lucide-react";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  updateDepartureDate,
  updateReturnDate,
} from "@nkeji-web/redux/features/flightSearchReducer";
import {
  selectDepartureDate,
  selectReturnDate,
} from "@nkeji-web/redux/selectors";

type DatePickerWithFloatingLabelProps = {
  label: string;
  id: "departure" | "return";
  className?: string;
  icon?: React.ReactNode;
};

const Label: React.FC<{
  label: string;
  isFocused: boolean;
  hasValue: boolean;
}> = ({ label, isFocused, hasValue }) => (
  <label
    htmlFor="date"
    className={`absolute cursor-pointer left-10 md:left-8 top-1/2 px-0 transition-all ease-in-out duration-300 transform ${
      isFocused || hasValue
        ? "-translate-y-6 text-xs text-purple-500"
        : "text-gray-500 -translate-y-1/2"
    }`}
  >
    <span className="inter-medium">{label}</span>
  </label>
);

const DatePickerWithFloatingLabel: React.FC<
  DatePickerWithFloatingLabelProps
> = ({ label, id, className }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const dispatch = useDispatch();
  const departureDate = useSelector(selectDepartureDate);
  const returnDate = useSelector(selectReturnDate);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (date) {
      const formattedDate = format(date, "yyyy-MM-dd");
      if (id === "departure") {
        dispatch(updateDepartureDate(formattedDate));
      } else if (id === "return") {
        dispatch(updateReturnDate(formattedDate));
      }
    }
  }, [date, id, dispatch]);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
        setIsCalendarOpen(false);
      }
    };

    if (id === "departure") {
      if (departureDate.length > 3) {
        const newDate = parse(departureDate, "yyyy-MM-dd", new Date());
        setDate(newDate);
      }
    } else {
      if (returnDate && returnDate.length > 3) {
        const newDate = parse(returnDate, "yyyy-MM-dd", new Date());
        setDate(newDate);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
    setIsCalendarOpen(true);
  }, []);

  const handleClear = useCallback((event: React.MouseEvent<SVGSVGElement>) => {
    event.stopPropagation();
    setDate(undefined);
    if (id === "departure") {
      dispatch(updateDepartureDate(""));
    } else if (id === "return") {
      dispatch(updateReturnDate(""));
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full pl-3 md:w-[200px] lg:w-[240px] text-left font-normal transition-colors h-full",
        className
      )}
    >
      <div
        className="relative flex items-center"
        onClick={handleFocus}
        tabIndex={0}
      >
        <CalendarIcon className="absolute left-2 h-4 w-4" color="#8A3FFC" />
        <Label label={label} isFocused={isFocused} hasValue={!!date} />
        <input
          type="text"
          className="mt-8 p-2 w-full outline-none bg-transparent pl-8"
          value={date ? format(date, "PPP") : ""}
          readOnly
          onFocus={handleFocus}
        />
        {date && (
          <CrossCircledIcon
            onClick={handleClear}
            className="absolute right-8 bottom-4 cursor-pointer"
            stroke="#7F56D9"
          />
        )}
      </div>
      {isCalendarOpen && (
        <div className="absolute z-10 mt-2 bg-white shadow-lg rounded p-4">
          <Calendar
            mode="single"
            selected={date}
            disabled={
              id === "departure"
                ? { before: new Date() }
                : { before: new Date(departureDate) }
            }
            onSelect={setDate}
            initialFocus
          />
        </div>
      )}
    </div>
  );
};

export default DatePickerWithFloatingLabel;
