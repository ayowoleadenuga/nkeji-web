import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@nkeji-web/components/ui/dropdown-menu";
import HowItWorksDialog from "@nkeji-web/components/ui/how-it-works-dialog";
import Image from "next/image";
import React, { useEffect } from "react";
import RequestsInput from "./request-input";
import { format, parse } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nkeji-web/components/ui/popover";
import { cn } from "@nkeji-web/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@nkeji-web/components/ui/calendar";
import { Passenger } from "@nkeji-web/lib/global-types";

interface PassengerFormProps {
  passenger: Passenger;
  onChange: (field: keyof Passenger, value: string) => void;
}

const PassengerForm = ({ passenger, onChange }: PassengerFormProps) => {
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  const { title, firstName, middleName, lastName, dob, id } = passenger;
  useEffect(() => {
    if (dob.length > 1) {
      const newDate = parse(dob, "yyyy-MM-dd", new Date());
      setDate(newDate);
    } else {
      setDate(undefined);
    }
  }, [dob]);
  useEffect(() => {
    if (date) {
      const formattedDate = format(date, "yyyy-MM-dd");
      onChange("dob", formattedDate);
    }
  }, [date]);

  return (
    <div className="py-6">
      <div className="flex items-center space-x-2 my-5">
        <HowItWorksDialog />
        <p>
          &quot;First Name&quot; and &quot;Last Name&quot; must match your
          travel document exactly
        </p>
      </div>
      <div>
        <p className="text-base inter-semibold mb-4">{id}</p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none w-full md:w-1/2 lg:w-[200px] mb-5">
          <p className="text-left">
            Title
            <span className="text-red-500">*</span>
          </p>

          <div className="flex items-center justify-between border border-[#D0D5DD] rounded-lg bg-white p-3 w-full">
            <span>{title}</span>
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
            onClick={() => onChange("title", "Male")}
            className="text-center"
          >
            Male
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onChange("title", "Female")}>
            Female
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex flex-wrap w-[100%] gap-4">
        <RequestsInput
          containerClass={"w-[240px]"}
          label="First Name"
          placeholder="Lagbaja"
          value={firstName}
          onChange={(e) => onChange("firstName", e.target.value)}
          isRequired
        />
        <RequestsInput
          containerClass={"w-[240px]"}
          label="Middle Name"
          value={middleName}
          placeholder="Lagbaja"
          onChange={(e) => onChange("middleName", e.target.value)}
        />
        <RequestsInput
          containerClass={"w-[240px]"}
          label="Last Name"
          placeholder="Lagbaja"
          value={lastName}
          onChange={(e) => onChange("lastName", e.target.value)}
        />
        <Popover>
          <PopoverTrigger asChild>
            <div
              className={cn(
                "w-[240px] justify-start text-left font-normal relative  transition-colors",
                !date && "text-muted-foreground"
              )}
            >
              <label htmlFor="date" className="text-black">
                Date of Birth
                <span className="text-red-500">*</span>
              </label>
              <div className="border w-full border-[#D0D5DD] rounded-lg bg-white p-3 flex justify-between items-center">
                <input
                  type="text"
                  placeholder="MM/DD/YYYY"
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
      </div>
    </div>
  );
};

export default PassengerForm;
