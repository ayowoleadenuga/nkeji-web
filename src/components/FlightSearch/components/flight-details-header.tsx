import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@nkeji-web/components/ui/accordion";
import Image from "next/image";

const FlightDetailsHeader = () => {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger showToggle={false}>
            <div className="flex justify-between items-center bg-white w-full px-6 lg:px-20 py-5">
              <div className=" flex space-x-3 items-center">
                <Image
                  height={18}
                  width={18}
                  layout="intrinsic"
                  src="/assets/flight.svg"
                  alt=""
                  className="cursor-pointer  transform rotate-90"
                />
                <h3 className="inter-bold text-2xl">Your flight details</h3>
                <p className="text-[#A3A7AB] inter-bold text-base">BHX - ABV</p>
              </div>
              <div className="ml-auto flex items-center space-x-1">
             <p
                  className="text-[#7F56D9] text-sm inter-semibold underline">
                
                  View details
                </p>
                <Image
                  height={10}
                  width={10}
                  layout="intrinsic"
                  src="/assets/dropdown.svg"
                  alt=""
                  className=""
                />
              </div>
              <div></div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="bg-white py-4 px-6 lg:px-20 ">
            <div className="flex justify-between">
              <div className="flex flex-col space-y-12">

              <div className="flex space-x-12 items-start">
                <div className="flex space-x-2 items-start">
                  <Image
                    height={32}
                    width={32}
                    layout="intrinsic"
                    src="/assets/turkish-avatar.svg"
                    alt=""
                    className="cursor-pointer"
                  />
                  <div>
                    <p className="text-xs text-[#1B1E21] inter-bold">
                      Turkish Airline
                    </p>
                    <p className="relative inter-semibold text-xs text-[#A3A7AB]">
                      Flight TK1022
                    </p>
                    <div className="mt-2 flex flex-col space-y-1">
                      <div className=" flex space-x-2">
                        <Image
                          height={18}
                          width={18}
                          layout="intrinsic"
                          src="/assets/luggage.svg"
                          alt=""
                          className="cursor-pointer"
                        />
                        <p className="text-xs inter-semibold text-[#4B525A]">
                          x 1 (12kg)
                        </p>
                      </div>
                      <div className=" flex space-x-2">
                        <Image
                          height={18}
                          width={18}
                          layout="intrinsic"
                          src="/assets/checked-luggage.svg"
                          alt=""
                          className="cursor-pointer"
                        />
                        <p className="text-xs inter-semibold text-[#4B525A]">
                          x 1 (23kg)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ">
                  <span className="inter-semibold text-[#4B525A] text-xs">
                    Fri 8 Mar 2024
                  </span>
                  <span className=" text-[#1B1E21] text-2xl">06:00</span>
                  <span className="inter-semibold text-[#4B525A] text-xs">
                    Birmingham BHX
                  </span>
                  <span className="inter-semibold text-[#4B525A] text-xs">
                    Terminal 2a
                  </span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <p className="text-xs inter-semibold">{"22H 40M"}</p>
                  <div className=" w-full">
                    <div className="flex w-[400px] items-center">
                      <span
                        className={`h-1 w-[33%] rounded-tl rounded-bl bg-[#7F56D9]`}
                      ></span>
                      <span className="h-1 w-[33%] bg-[#D7CBF3]"></span>
                      <span
                        className={`h-1 w-[33%] bg-[#7F56D9] rounded-tr rounded-br`}
                      ></span>
                    </div>
                  </div>
                  <p className="text-xs inter-semibold">{"2 Stops"}</p>
                </div>
                <div className="flex flex-col text-right">
                  <span className="inter-semibold text-[#4B525A] text-xs">
                    Fri 8 Mar 2024
                  </span>
                  <span className=" text-[#1B1E21] text-2xl">06:00</span>
                  <span className="inter-semibold text-[#4B525A] text-xs">
                    Abuja ABV
                  </span>
                  <span className="inter-semibold text-[#4B525A] text-xs">
                    Terminal 2a
                  </span>
                </div>
              </div>
              <div className="flex space-x-12 items-start">
                <div className="flex space-x-2 items-start">
                  <Image
                    height={32}
                    width={32}
                    layout="intrinsic"
                    src="/assets/turkish-avatar.svg"
                    alt=""
                    className="cursor-pointer"
                  />
                  <div>
                    <p className="text-xs text-[#1B1E21] inter-bold">
                      Turkish Airline
                    </p>
                    <p className="relative inter-semibold text-xs text-[#A3A7AB]">
                      Flight TK1022
                    </p>
                    <div className="mt-2 flex flex-col space-y-1">
                      <div className=" flex space-x-2">
                        <Image
                          height={18}
                          width={18}
                          layout="intrinsic"
                          src="/assets/luggage.svg"
                          alt=""
                          className="cursor-pointer"
                        />
                        <p className="text-xs inter-semibold text-[#4B525A]">
                          x 1 (12kg)
                        </p>
                      </div>
                      <div className=" flex space-x-2">
                        <Image
                          height={18}
                          width={18}
                          layout="intrinsic"
                          src="/assets/checked-luggage.svg"
                          alt=""
                          className="cursor-pointer"
                        />
                        <p className="text-xs inter-semibold text-[#4B525A]">
                          x 1 (23kg)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ">
                  <span className="inter-semibold text-[#4B525A] text-xs">
                    Fri 8 Mar 2024
                  </span>
                  <span className=" text-[#1B1E21] text-2xl">06:00</span>
                  <span className="inter-semibold text-[#4B525A] text-xs">
                    Birmingham BHX
                  </span>
                  <span className="inter-semibold text-[#4B525A] text-xs">
                    Terminal 2a
                  </span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <p className="text-xs inter-semibold">{"22H 40M"}</p>
                  <div className=" w-full">
                    <div className="flex w-[400px] items-center">
                      <span
                        className={`h-1 w-[33%] rounded-tl rounded-bl bg-[#7F56D9]`}
                      ></span>
                      <span className="h-1 w-[33%] bg-[#D7CBF3]"></span>
                      <span
                        className={`h-1 w-[33%] bg-[#7F56D9] rounded-tr rounded-br`}
                      ></span>
                    </div>
                  </div>
                  <p className="text-xs inter-semibold">{"2 Stops"}</p>
                </div>
                <div className="flex flex-col text-right">
                  <span className="inter-semibold text-[#4B525A] text-xs">
                    Fri 8 Mar 2024
                  </span>
                  <span className=" text-[#1B1E21] text-2xl">06:00</span>
                  <span className="inter-semibold text-[#4B525A] text-xs">
                    Abuja ABV
                  </span>
                  <span className="inter-semibold text-[#4B525A] text-xs">
                    Terminal 2a
                  </span>
                </div>
              </div>
              </div>
              <div className="flex flex-wrap w-[30%] gap-6">
                <div className="flex items-center space-x-2">
                  <Image
                    height={32}
                    width={32}
                    layout="intrinsic"
                    src="/assets/protected.svg"
                    alt=""
                    className="cursor-pointer mb-1"
                  />
                  <div className="inter-semibold">
                    <p className="text-xs">Protected transfer</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Image
                    height={32}
                    width={32}
                    layout="intrinsic"
                    src="/assets/no-wifi.svg"
                    alt=""
                    className="cursor-pointer mb-1"
                  />
                  <div className="inter-semibold">
                    <p className="text-xs">No Wi-Fi</p>
                  </div>
                </div>
                <div className=" flex items-center space-x-2">
                  <Image
                    height={32}
                    width={32}
                    layout="intrinsic"
                    src="/assets/snacks.svg"
                    alt=""
                    className="cursor-pointer mb-1"
                  />
                  <div className="inter-semibold">
                    <p className="text-xs">Snacks provided</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Image
                    height={32}
                    width={32}
                    layout="intrinsic"
                    src="/assets/no-entertainment.svg"
                    alt=""
                    className="cursor-pointer mb-1"
                  />
                  <div className="inter-semibold">
                    <p className="text-xs">No entertainment</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Image
                    height={32}
                    width={32}
                    layout="intrinsic"
                    src="/assets/power-outlet.svg"
                    alt=""
                    className="cursor-pointer mb-1"
                  />
                  <div className="inter-semibold">
                    <p className="text-xs">No Power outlet</p>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default FlightDetailsHeader;
