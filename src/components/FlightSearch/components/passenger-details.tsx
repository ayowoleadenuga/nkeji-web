import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@nkeji-web/components/ui/accordion";
import DatePicker from "@nkeji-web/components/ui/DatePicker";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@nkeji-web/components/ui/dropdown-menu";
import HowItWorksDialog from "@nkeji-web/components/ui/how-it-works-dialog";
import { cn } from "@nkeji-web/lib/utils";
import Image from "next/image";
import { useState } from "react";
import RequestsInput from "./request-input";
import PassengerDetailCard from "./passenger-detail-card";
import { title } from "process";

interface PassengerDetailsProps {
  showDetails?: boolean;
  setCurrentTab?: any;
  index?: number;
}

const travelerDetails = [
  {
    gender: "Female",
    dateOfBirth: "1 Jan 1987",
    title: "Adult",
  },
  {
    gender: "Male",
    dateOfBirth: "1 Jan 1977",
    title: "Adult",
  },
  {
    gender: "Male",
    dateOfBirth: "1 Jan 2002",
    title: "Child",
  },
];

const PassengerDetails: React.FC<PassengerDetailsProps> = ({
  showDetails,
  setCurrentTab,
  index,
}) => {
  const [selectedOption, setSelectedOption] = useState("Round Trip");
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };
  const [showPassengerForm, setShowPassengerForm] = useState();
  return (
    <div>
      {showDetails ? (
        <div className="bg-white w-full py-4 px-5">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg inter-bold">Traveler(s) details</h3>
              <p className="text-sm ">
                We&apos;ll send your flight confirmation to the information
                provide.
              </p>
            </div>
            <div
              onClick={() => index && setCurrentTab(index - 1)}
              className="cursor-pointer flex space-x-2 items-center w-[fit-content]"
            >
              <Image
                height={15}
                width={15}
                src="/assets/edit.svg"
                alt=""
                className="cursor-pointer"
              />
              <p className="text-sm text-[#7F56D9] inter-semibold underline">
                Edit details
              </p>
            </div>
          </div>

          <div className="flex space-x-5 mt-5 mb-3">
            {travelerDetails.map((detail, index) => {
              return (
                <div className="" key={index}>
                  <div className="flex items-center space-x-2">
                    <div
                      className={`rounded-full  h-[32px] w-[32px] flex justify-center items-center
              ${
                detail.gender.toLowerCase().includes("female")
                  ? "bg-[#7F56D9]"
                  : "bg-[#D7CBF3]"
              }
              `}
                    >
                      <Image
                        height={15}
                        width={15}
                        src={
                          detail.gender.toLowerCase().includes("female")
                            ? "/assets/contact.svg"
                            : "/assets/contact-purple.svg"
                        }
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-base inter-semibold">
                        Passenger {index}
                      </p>
                      <p className="text-[#A3A7AB] text-base inter-medium">
                        {detail.title} . {detail.gender} . {detail.dateOfBirth}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
           
          </div>

        </div>
      ) : (
        <div className="bg-white w-full py-4 px-5">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg inter-bold">Who&apos;s flying?</h3>
              <p className="text-sm ">
                <b>Note:</b> &quot;First Name&quot; and &quot;Last Name&quot;
                must match your travel document exactly.
              </p>
            </div>
            <span className="flex items-center space-x-2">
              <Image
                height={15}
                width={15}
                src="/assets/passenger.svg"
                alt=""
                color="#8A3FFC"
              />
              <p>3 Passengers</p>
            </span>
          </div>

          <div className="flex space-x-5 mt-5 mb-3">
            <PassengerDetailCard
              index={1}
              gender="Female"
              showPassengerForm={showPassengerForm}
              setShowPassengerForm={setShowPassengerForm}
            />
            <PassengerDetailCard
              index={2}
              gender="Male"
              showPassengerForm={showPassengerForm}
              setShowPassengerForm={setShowPassengerForm}
            />
            <PassengerDetailCard
              index={3}
              gender="Young male"
              showPassengerForm={showPassengerForm}
              setShowPassengerForm={setShowPassengerForm}
            />
          </div>
          {showPassengerForm && (
            <div className="py-6">
              <div className="flex items-center space-x-2 my-5">
                <HowItWorksDialog />
                <p>
                  &quot;First Name&quot; and &quot;Last Name&quot; must match
                  your travel document exactly
                </p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger className="focus:outline-none w-full md:w-1/2 lg:w-[200px] mb-5">
                  <p className="text-left">
                    Title
                    <span className="text-red-500">*</span>
                  </p>

                  <div className="flex items-center justify-between border border-[#D0D5DD] rounded-lg bg-white p-3 w-full">
                    <span>{selectedOption}</span>
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
                    onClick={() => handleOptionSelect("Round Trip")}
                    className="text-center"
                  >
                    Male
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleOptionSelect("One-way Trip")}
                  >
                    Female
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleOptionSelect("Multi-city Trip")}
                  >
                    Child
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="flex flex-wrap w-[100%] gap-4">
                <RequestsInput
                  className={"w-[240px]"}
                  label="First Name"
                  placeHolder="Lagbaja"
                  isRequired
                />
                <RequestsInput
                  className={"w-[240px]"}
                  label="Middle Name"
                  placeHolder="Lagbaja"
                />
                <RequestsInput
                  className={"w-[240px]"}
                  label="Last Name"
                  placeHolder="Lagbaja"
                />
                <DatePicker label="Date of Birth" isRequired />
              </div>
            </div>
          )}

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Meal, frequent flyers, special assistance and additional
                requests?
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap w-[80%] gap-4">
                  <RequestsInput label="Meal preference" placeHolder="None" />
                  <RequestsInput
                    label="Special assistance"
                    placeHolder="None"
                  />
                  <RequestsInput
                    label="Addition requests"
                    placeHolder="Request to book cycle"
                  />
                  <RequestsInput
                    label="Frequent flyer program"
                    placeHolder="None"
                  />
                  <RequestsInput
                    label="Frequent flyer number"
                    placeHolder="frequent flyer number"
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      )}
    </div>
  );
};

export default PassengerDetails;
