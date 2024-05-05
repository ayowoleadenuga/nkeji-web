"use client";

import { CheckboxWithText } from "@nkeji-web/components/ui/checkbox-with-text";
import HowItWorksDialog from "@nkeji-web/components/ui/how-it-works-dialog";
import { Label } from "@nkeji-web/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@nkeji-web/components/ui/radio-group";
import { Slider } from "@nkeji-web/components/ui/slider";
import Image from "next/image";
import { useState } from "react";

const SearchResultComponent = () => {
  const stops = ["Any", "Non-stop", "1 stops", "Up to 2 stops"];
  const [activeStop, setActiveStop] = useState(stops[0]);
  const [toggleStop, setToggleStop] = useState(true);
  const [toggleBudget, setToggleBudget] = useState(true);
  const [toggleFlightTimes, setToggleFlightTimes] = useState(true);
  const [toggleAirlines, setToggleAirlines] = useState(true);
  const [toggleDuration, setToggleDuration] = useState(true);
  const [toggleRewards, setToggleRewards] = useState(true);
  const [toggleAlliances, setToggleAlliances] = useState(true);
  const [activeFlightTime, setActiveFlightTime] = useState("outbound");
  

  return (
    <div className="flex flex-col space-y-2 bg-transparent w-[26%]">
      <div className="bg-white rounded shadow-lg p-4">
        <h5 className="inter-bold text-2xl text-[#1B1E21] ">Search result</h5>
        <p className="text-base text-[#1B1E21] ">
          Showing 100 of{" "}
          <span className="text-[#7F56D9] inter-semibold"> 2237</span> flights
        </p>
        <div className="mt-6 flex justify-between items-center">
            <CheckboxWithText label=" Fly now, pay later" helperText="Pay in 6 installments" showHelperText />
       
            <HowItWorksDialog/>

        </div>
      </div>
      {/* stops */}
      <div className="bg-white rounded shadow-lg p-4">
        <div
          className="flex justify-between items-center mb-3 cursor-pointer"
          onClick={() => setToggleStop(!toggleStop)}
        >
          <p className="text-base inter-semibold text-[#1B1E21]">Stops</p>
          <Image
            height={18}
            width={18}
            layout="intrinsic"
            src="/assets/dropdown.svg"
            alt=""
            className={`${toggleStop ? "transform rotate-180" : ""}`}
          />
        </div>
        {toggleStop && (
          <RadioGroup defaultValue={stops[0]}>
            {stops.map((stop) => {
              return (
                <div
                  onClick={() => setActiveStop(stop)}
                  key={stop}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <RadioGroupItem
                    className={`${
                      activeStop === stop
                        ? "border-primary"
                        : "border-[#A3A7AB]"
                    }`}
                    value={stop}
                    id={stop}
                  />
                  <Label
                    htmlFor={stop}
                    className={`${
                      activeStop === stop ? "text-[#1B1E21]" : "text-[#A3A7AB]"
                    }`}
                  >
                    {stop}
                  </Label>
                </div>
              );
            })}
          </RadioGroup>
        )}
      </div>

      {/* budget */}
      <div className="bg-white rounded shadow-lg p-4">
        <div
          className="flex justify-between items-center mb-3 cursor-pointer"
          onClick={() => setToggleBudget(!toggleBudget)}
        >
          <p className="text-base inter-semibold text-[#1B1E21]">Budget</p>
          <Image
            height={18}
            width={18}
            layout="intrinsic"
            src="/assets/dropdown.svg"
            alt=""
            className={`${toggleBudget ? "transform rotate-180" : ""}`}
          />
        </div>
        {toggleBudget && (
          <div>
            <p className="text-xs inter-medium text-[31B1E21] mb-3">
              £0 - £5000
            </p>
            <Slider defaultValue={[25, 75]} max={100} step={2} />
          </div>
        )}
      </div>

      {/* flight times */}
      <div className="bg-white rounded shadow-lg p-4">
        <div
          className="flex justify-between items-center mb-3 cursor-pointer"
          onClick={() => setToggleFlightTimes(!toggleFlightTimes)}
        >
          <p className="text-base inter-semibold text-[#1B1E21]">
            Flight Times
          </p>
          <Image
            height={18}
            width={18}
            layout="intrinsic"
            src="/assets/dropdown.svg"
            alt=""
            className={`${toggleFlightTimes ? "transform rotate-180" : ""}`}
          />
        </div>
        {toggleFlightTimes && (
          <div>
            <div className="flex justify-between items-center">
              <span
                onClick={() => setActiveFlightTime("outbound")}
                className={`text-base inter-semibold cursor-pointer ${
                  activeFlightTime === "outbound"
                    ? "text-[#7F56D9]"
                    : "text-[#A3A7AB]"
                }`}
              >
                Outbound flight
              </span>
              <span
                onClick={() => setActiveFlightTime("return")}
                className={`text-base inter-semibold cursor-pointer ${
                  activeFlightTime === "return"
                    ? "text-[#7F56D9]"
                    : "text-[#A3A7AB]"
                }`}
              >
                Return flight
              </span>
            </div>
            {activeFlightTime === "outbound" && (
              <div>
                <div className="mt-5">
                  <p className="text-xs inter-semibold text-[#A3A7AB]">
                    Departs from Birmingham
                  </p>
                  <p className="text-[#1B1E21] inter-medium text-xs mb-5">
                    OOH OOM - 23H 59M{" "}
                  </p>
                  <Slider defaultValue={[25, 75]} max={100} step={2} />
                </div>

                <div className="mt-8">
                  <p className="text-xs inter-semibold text-[#A3A7AB]">
                    Arrives at Abuja
                  </p>
                  <p className="text-[#1B1E21] inter-medium text-xs mb-5">
                    OOH OOM - 23H 59M{" "}
                  </p>
                  <Slider defaultValue={[25, 75]} max={100} step={2} />
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="bg-white rounded shadow-lg p-4">
        <div
          className="flex justify-between items-center mb-3 cursor-pointer"
          onClick={() => setToggleAirlines(!toggleAirlines)}
        >
          <p className="text-base inter-semibold text-[#1B1E21]">Airlines</p>
          <Image
            height={18}
            width={18}
            layout="intrinsic"
            src="/assets/dropdown.svg"
            alt=""
            className={`${toggleAirlines ? "transform rotate-180" : ""}`}
          />
        </div>
        {toggleAirlines && (
          <div>
            <div className="flex flex-col space-y-4 mt-5">
              <CheckboxWithText label="Air Canada" />
              <CheckboxWithText label="Air France" />
              <CheckboxWithText label="American Airlines" />
              <CheckboxWithText label="British Airways" />
              <CheckboxWithText label="Brussels Airlines" />
            </div>
            <div
              className={`underline text-[#7F56D9] inter-semibold mt-5 cursor-pointer text-sm`}
            >
              Show all
            </div>
          </div>
        )}
      </div>

      <div className="bg-white rounded shadow-lg p-4">
        <div
          className="flex justify-between items-center mb-3 cursor-pointer"
          onClick={() => setToggleDuration(!toggleDuration)}
        >
          <p className="text-base inter-semibold text-[#1B1E21]">Duration</p>
          <Image
            height={18}
            width={18}
            layout="intrinsic"
            src="/assets/dropdown.svg"
            alt=""
            className={`${toggleDuration ? "transform rotate-180" : ""}`}
          />
        </div>
        {toggleDuration && (
          <div>
            <div className="mt-5">
              <p className="text-xs inter-semibold text-[#A3A7AB]">
                Maximum travel time
              </p>
              <p className="text-[#1B1E21] inter-medium text-xs mb-5">
                39H 40M
              </p>
              <Slider defaultValue={[25]} max={100} step={1} />
            </div>
          </div>
        )}
      </div>
      <div className="bg-white rounded shadow-lg p-4">
        <div
          className="flex justify-between items-center mb-3 cursor-pointer"
          onClick={() => setToggleRewards(!toggleRewards)}
        >
          <p className="text-base inter-semibold text-[#1B1E21]">
            Reward points
          </p>
          <Image
            height={18}
            width={18}
            layout="intrinsic"
            src="/assets/dropdown.svg"
            alt=""
            className={`${toggleRewards ? "transform rotate-180" : ""}`}
          />
        </div>
      </div>

      <div className="bg-white rounded shadow-lg p-4">
        <div
          className="flex justify-between items-center mb-3 cursor-pointer"
          onClick={() => setToggleAlliances(!toggleAlliances)}
        >
          <p className="text-base inter-semibold text-[#1B1E21]">Alliances</p>
          <Image
            height={18}
            width={18}
            layout="intrinsic"
            src="/assets/dropdown.svg"
            alt=""
            className={`${toggleAlliances ? "transform rotate-180" : ""}`}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchResultComponent;
