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
import { ContactDetails } from "@nkeji-web/lib/global-types";
import { human_titles } from "../constants/constants";

interface ContactDetailsFormProps {
  //   contactDetails: ContactDetails;
  currentTab: number | undefined;
  setCurrentTab: any;
  //   onChange: (field: keyof ContactDetails, value: string) => void;
}

const ContactDetailsForm = ({
  currentTab,
  setCurrentTab,
}: ContactDetailsFormProps) => {
  return (
    <div className="bg-white w-full py-4 px-5 md:mb-4">
      <div className="mb-5">
        <h3 className="text-lg inter-bold">Contact Details</h3>
        <p className="text-xs">
          We&apos;ll send your flight confirmation to the information provide.
        </p>
      </div>
      {currentTab === 2 ? (
        <div>
          <div className="w-full flex items-center justify-between">
            <div>
              <span className="flex items-center gap-1">
                <p>Email address</p>
                <p className="text-[#FF0000] ">*</p>
              </span>
              <p className="text-sm font-semibold">Lagbaja@yahoo.com</p>
            </div>
            <div>
              <p>Phone Number</p>
              <p className="text-sm font-semibold">+44 (555) 000-0000</p>
            </div>
          </div>
          <div className="flex space-x-1 items-start mt-5 cursor-pointer w-[fit-content]">
            <Image
              height={18}
              width={18}
              layout="intrinsic"
              src="/assets/edit.svg"
              alt=""
            />
            <a
              onClick={() => setCurrentTab(currentTab - 1)}
              className="text-[#7F56D9] text-sm inter-semibold underline"
            >
              Edit contact details
            </a>
          </div>
        </div>
      ) : (
        <div className="flex justify-between flex-wrap w-[100%] gap-4">
          <RequestsInput
            containerClass={"w-full md:w-[240px]"}
            label="Email"
            isRequired
            placeholder="Lagbaja@yahoo.com"
            //   value={email}
            //   onChange={e => onChange("email", e.target.value)}
          />
          <RequestsInput
            containerClass={"w-full md:w-[240px] relative"}
            label="Phone Number"
            placeholder="Enter phone number"
            //   value={phoneNumber}
            type="tel"
            autoComplete="tel"
            max="10"
            min="10"
            pattern="[0-9]{10}"
            prependContent={<span className="absolute top-9 left-2">+44</span>}
            //   onChange={e => onChange("phoneNumber", e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default ContactDetailsForm;
