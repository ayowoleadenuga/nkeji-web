import { Departure } from "@nkeji-web/lib/global-types";
import {
  convertToFormattedDateTime,
  formatFlightDuration,
  truncateSentence,
} from "@nkeji-web/lib/utils";
import Image from "next/image";
import { TripProps } from "./trip";

interface VerticalTripProps {
  trip: Departure;
  tripStops?: Departure[];
}
const VerticalTrip = ({ trip, tripStops }: VerticalTripProps) => {
  const {
    departureTime,
    arrivalTime,
    departureAirport,
    airline,
    arrivalAirport,
    stops,
  } = trip;
  const depatureDateTime = convertToFormattedDateTime(departureTime);
  const arrivalDateTime = convertToFormattedDateTime(arrivalTime);
  const duration = formatFlightDuration(departureTime, arrivalTime);

  return (
    <div className="px-10">
      <div className="relative">
        <h3 className="text-lg inter-bold">
          Your flight to {arrivalAirport.city}
        </h3>
      </div>
      <div className="flex justify-between items-start mt-5">
        <div className="">
          <div className="flex space-x-2 ">
            <span className="mt-3 flex flex-col items-center space-y-[1px]">
              <span className="rounded-full h-4 w-4 bg-[#7F56D9]"></span>
              <span className="rounded h-24 w-1 bg-[#7F56D9]"></span>
            </span>
            <div className="flex space-x-4 items-start">
              <span className="flex flex-col space-y-1">
                <span className="text-xs ">{depatureDateTime.time}</span>
                <span className="inter-semibold text-[#A3A7AB] text-xs">
                  {depatureDateTime.date}
                </span>
              </span>
              <span className="flex flex-col space-y-1">
                <span className="text-xs ">{departureAirport.city}</span>
                <span className="inter-semibold text-[#A3A7AB] text-xs">
                  Terminal
                </span>
              </span>
            </div>
          </div>

          {tripStops && tripStops.length > 1
            ? tripStops.map((stop: Departure, index: number) => {
                if (index > 0 && index !== tripStops.length)
                  return (
                    <div className="flex space-x-2" key={stop.arrivalTime}>
                      <span className="flex flex-col items-center space-y-[1px]">
                        <span className="rounded-full h-4 w-4 bg-[#D7CBF3]"></span>
                        <span className="rounded h-24 w-1 bg-[#D7CBF3]"></span>
                      </span>
                      <div>
                        <div className="flex space-x-4 items-start">
                          <span className="flex flex-col space-y-1">
                            <span className="text-xs ">
                              {
                                convertToFormattedDateTime(stop.arrivalTime)
                                  .time
                              }
                            </span>
                            <span className="inter-semibold text-[#A3A7AB] text-xs">
                              {
                                convertToFormattedDateTime(stop.arrivalTime)
                                  .date
                              }
                            </span>
                          </span>
                          <span className="flex flex-col space-y-1">
                            <span className="text-xs ">
                              {`${
                                (truncateSentence(stop.arrivalAirport.name, 12),
                                stop.arrivalAirport.city)
                              }`}
                            </span>
                            <span className="inter-semibold text-[#A3A7AB] text-xs">
                              Terminal
                            </span>
                          </span>
                        </div>

                        <span className="mt-4 flex items-center space-x-2">
               
                          <Image
                            height={18}
                            width={18}
                            layout="intrinsic"
                            src="/assets/clock.svg"
                            alt=""
                            className=""
                          />
                          <span className="inter-semibold text-[#A3A7AB] text-xs">
                            Layover{" "}
                            {formatFlightDuration(
                              tripStops[index - 1].departureTime,
                              tripStops[index].arrivalTime
                            )}
                          </span>
                        </span>
                      </div>
                    </div>
                  );
              })
            : ""}

          <div className="flex space-x-2 ">
            <span className=" flex flex-col items-center space-y-[1px]">
              <span className="rounded-full h-4 w-4 bg-[#D7CBF3]"></span>
              <span className="rounded h-24 w-1 bg-[#7F56D9]"></span>
              <Image
                height={18}
                width={18}
                layout="intrinsic"
                src="/assets/flight.svg"
                alt=""
                className="transform rotate-90"
              />
            </span>
            <div className="flex flex-col justify-between">
              <div className="flex space-x-4 items-start">
                <span className="flex flex-col space-y-1">
                  <span className="text-xs ">
                    {tripStops && tripStops?.length > 0
                      ? convertToFormattedDateTime(
                          tripStops[tripStops?.length - 1].departureTime
                        ).time
                      : convertToFormattedDateTime(arrivalTime).time}
                  </span>
                  <span className="inter-semibold text-[#A3A7AB] text-xs">
                    {tripStops && tripStops?.length > 0
                      ? convertToFormattedDateTime(
                          tripStops[tripStops?.length - 1].departureTime
                        ).date
                      : convertToFormattedDateTime(arrivalTime).date}
                  </span>
                </span>
                <span className="flex flex-col space-y-1">
                  <span className="text-xs ">Birmingham</span>
                  <span className="inter-semibold text-[#A3A7AB] text-xs">
                    Terminal
                  </span>
                </span>
              </div>

              <div className="flex space-x-4 items-start">
                <span className="flex flex-col space-y-1">
                  <span className="text-xs ">6:15am</span>
                  <span className="inter-semibold text-[#A3A7AB] text-xs">
                    Tue 7 Mar
                  </span>
                </span>
                <span className="flex flex-col space-y-1">
                  <span className="text-xs ">Abuja</span>
                  <span className="inter-semibold text-[#A3A7AB] text-xs">
                    Terminal 22
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between h-[300px] mt-5">
          <div className="flex space-x-2">
            <Image
              height={32}
              width={32}
              layout="intrinsic"
              src="/assets/turkish-avatar.svg"
              alt=""
              className="cursor-pointer mb-1"
            />
            <div>
              <p className="text-xs text-black ">Turkish Airline</p>
              <p className="relative inter-semibold text-xs text-[#A3A7AB]">
                TK1022 . Business{" "}
              </p>

              <p className="text-xs text-black">Flight time 14H 20M</p>
            </div>
          </div>

          <div className="flex space-x-2">
            <Image
              height={32}
              width={32}
              layout="intrinsic"
              src="/assets/turkish-avatar.svg"
              alt=""
              className="cursor-pointer mb-1"
            />
            <div>
              <p className="text-xs text-black ">Turkish Airline</p>
              <p className="relative inter-semibold text-xs text-[#A3A7AB]">
                TK1022 . Business{" "}
              </p>

              <p className="text-xs text-black">Flight time 14H 20M</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
