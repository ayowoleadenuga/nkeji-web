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
  isRequired?: boolean;
}

const DatePicker: React.FC<DatePickerProps> = ({ label, isRequired }) => {
  const [date, setDate] = React.useState<any>();
  const formattedDate = date ? format(date, "PPP") : "";
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          className={cn(
            "w-[240px] justify-start text-left font-normal relative  transition-colors",
            !date && "text-muted-foreground"
          )}
        >
          <label htmlFor="date" className="text-black">
            {label}
            {isRequired && <span className="text-red-500">*</span>}
          </label>
          <div className="border w-full border-[#D0D5DD] rounded-lg bg-white p-3 flex justify-between items-center">
            <input
              type="text"
              placeholder="MM/DD/YYYY"
              value={formattedDate}
              className="border-0 outline-none"
            />
            <CalendarIcon className="mr-2 h-4 w-4" color="#8A3FFC" />
          </div>
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
