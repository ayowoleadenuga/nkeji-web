import ProtectionDialog from "@nkeji-web/components/ui/cancellation-protection-dialog";
import { Dialog, DialogTrigger } from "@nkeji-web/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@nkeji-web/components/ui/accordion";
import Image from "next/image";
import { useState } from "react";

const CancellationProtection = () => {
  const [selectedOption, setSelectedOption] = useState<string>("yes");
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="bg-[#F2EEFB] w-full px-5 py-4 md:pt-6 md:pb-10">
      <div className="hidden md:flex justify-between items-center mb-3">
        <h3 className="text-[14px] xl:text-lg inter-semibold text-[#1B1E21]">
          Cancellation Protection
        </h3>
        <p className="text-[#7F56D9] text-[14px] xl:text-lg inter-semibold">
          £300
        </p>
      </div>
      <Accordion type="single" collapsible className="md:hidden block ">
        <AccordionItem value="item1">
          <div className="md:hidden flex justify-between items-center mb-3">
            <AccordionTrigger>
              <h3 className="text-[14px] xl:text-lg mr-2 inter-semibold text-[#1B1E21]">
                Cancellation Protection
              </h3>
            </AccordionTrigger>
            <p className="text-[#7F56D9] text-[14px] xl:text-lg inter-semibold">
              £30
            </p>
          </div>
          <AccordionContent>
            <div className="md:hidden flex flex-col space-y-3">
              <div className="flex items-start justify-between w-full">
                <div className="flex gap-3 items-start justify-between ">
                  <Image
                    height={20}
                    width={20}
                    src="/assets/shieldCheck.svg"
                    alt=""
                    className="mt-1"
                  />
                  <div>
                    <p className="text-[14px] xl:text-base inter-semibold">
                      Yes, protect my booking
                    </p>
                    <p className="text-[#A3A7AB] text-xs inter-semibold">
                      This booking can be fully refunded for any of{" "}
                      <Dialog>
                        <DialogTrigger>
                          <span className="underline text-[#7F56D9] cursor-pointer">
                            these reasons.
                          </span>
                        </DialogTrigger>
                        <ProtectionDialog />
                      </Dialog>
                    </p>
                  </div>
                </div>
                <input
                  type="radio"
                  className="accent-[#7F56D9] cursor-pointer "
                  value="yes"
                  checked={selectedOption === "yes"}
                  onChange={handleOptionChange}
                />
              </div>

              <div className="w-full">
                <div className="flex justify-between items-center  w-full">
                  <div className="flex gap-4">
                    <Image
                      height={15}
                      width={15}
                      src="/assets/unprotect-booking.svg"
                      alt=""
                      className=""
                    />

                    <p className="text-[14px] xl:text-base inter-semibold">
                      No, I don&apos;t need protection
                    </p>
                  </div>

                  <input
                    type="radio"
                    className="accent-[#7F56D9] cursor-pointer "
                    value="no"
                    checked={selectedOption === "no"}
                    onChange={handleOptionChange}
                  />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="hidden md:flex flex-col space-y-3">
        <div className="flex items-start justify-between w-full">
          <div className="flex gap-3 items-start justify-between ">
            <Image
              height={20}
              width={20}
              src="/assets/shieldCheck.svg"
              alt=""
              className="mt-1"
            />
            <div>
              <p className="text-[14px] xl:text-base inter-semibold">
                Yes, protect my booking
              </p>
              <p className="text-[#A3A7AB] text-xs inter-semibold">
                This booking can be fully refunded for any of{" "}
                <Dialog>
                  <DialogTrigger>
                    <span className="underline text-[#7F56D9] cursor-pointer">
                      these reasons.
                    </span>
                  </DialogTrigger>
                  <ProtectionDialog />
                </Dialog>
              </p>
            </div>
          </div>
          <input
            type="radio"
            className="accent-[#7F56D9] cursor-pointer "
            value="yes"
            checked={selectedOption === "yes"}
            onChange={handleOptionChange}
          />
        </div>

        <div className="w-full">
          <div className="flex justify-between items-center  w-full">
            <div className="flex gap-4">
              <Image
                height={15}
                width={15}
                src="/assets/unprotect-booking.svg"
                alt=""
                className=""
              />

              <p className="text-[14px] xl:text-base inter-semibold">
                No, I don&apos;t need protection
              </p>
            </div>

            <input
              type="radio"
              className="accent-[#7F56D9] cursor-pointer "
              value="no"
              checked={selectedOption === "no"}
              onChange={handleOptionChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CancellationProtection;
