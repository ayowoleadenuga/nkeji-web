"use client";
import { Button } from "@nkeji-web/components/ui/button";
import React, { useState } from "react";
import Image from "next/image";
import { format, parse } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nkeji-web/components/ui/popover";
import { cn } from "@nkeji-web/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@nkeji-web/components/ui/calendar";

interface kybInterface {
  setSigninTab: React.Dispatch<
    React.SetStateAction<
      "open account" | "otp" | "know you better" | "where you live"
    >
  >;
}

const KnowYouBetter: React.FC<kybInterface> = ({ setSigninTab }) => {
  const [pin, setPin] = useState("");
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  const handlePin = (value: string) => {
    setPin(value);
  };
  return (
    <div className="flex items-center justify-center overflow-y-auto w-[61.5%] h-[100%] ">
      <div className="w-[70%]">
        <div className="bg-[#7F56D90F]/10 w-[100px] py-2 rounded-[80px] border-[#7F56D9] border text-[#7F56D9] text-[12px] flex items-center justify-center font-[500] mb-5 ">
          <p>Step 1 or 2</p>
        </div>
        <h2 className="text-3xl font-bold text-[1D1D20] ">
          Let’s know you better!
        </h2>
        <p className="text-[14px] opacity-70 mb03 ">
          Office ipsum you must be muted. Bells overflow sop waste.
        </p>

        <input
          type="text"
          id="firstName"
          placeholder="First name"
          required
          //   value={values.email}
          //   onChange={e => setValues({ ...values, email: e.target.value })}
          className={`flex border border-[#F0F0F1] shadow rounded-lg bg-white mt-6 mb-4 px-3 w-full h-[48px] outline-none`}
        />
        <input
          type="text"
          //   id="lastName"
          placeholder="Last name"
          required
          //   value={values.email}
          //   onChange={e => setValues({ ...values, email: e.target.value })}
          className={`flex border border-[#F0F0F1] shadow rounded-lg bg-white mt-6 mb-4 px-3 w-full h-[48px] outline-none`}
        />
        <Popover>
          <PopoverTrigger asChild>
            <div
              className={cn(
                "w-full  justify-start text-left font-normal mb-2 relative  transition-colors",
                !date && "text-muted-foreground"
              )}
            >
              <div className="border w-full border-[#D0D5DD] rounded-lg bg-white p-3 flex justify-between items-center mt-1">
                <input
                  type="text"
                  placeholder="MM/DD/YYYY"
                  readOnly
                  value={date ? format(date, "PPP") : ""}
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

        <Button
          className="w-full bg-[#7F56D9] mt-10 rounded-[8px] text-white inter-semibold"
          onClick={() => setSigninTab("where you live")}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default KnowYouBetter;
