"use client";

import * as React from "react";
// import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@nkeji-web/lib/utils";
import { Button } from "@nkeji-web/components/ui/button";
import { Calendar } from "@nkeji-web/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nkeji-web/components/ui/popover";
import { CalendarIcon } from "lucide-react";

interface DatePickerProps {
  label: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ label }) => {
  const [date, setDate] = React.useState<Date>();
  const [isFocused, setIsFocused] = React.useState(false);

  const shouldLabelFloat = isFocused || date;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          className={cn(
            "w-[240px] justify-start text-left font-normal relative  transition-colors",
            !date && "text-muted-foreground"
          )}
          onClick={() => setIsFocused(true)}
        >
          {date && (
            <div className="w-full pt-4 pb-1 px-2 text-gray-700">
              {format(date, "PPP")}
            </div>
          )}
          <label
            htmlFor={"date"}
            className={`absolute left-2 top-0 px-0 transition-all ease-in-out duration-300 transform flex items-center ${
              shouldLabelFloat
                ? "-translate-y-2 text-xs text-purple-500"
                : "text-gray-500"
            }`}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span>{label}</span>
          </label>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
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

export default DatePicker;
