import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@nkeji-web/components/ui/accordion";
import AddAccountDialog from "@nkeji-web/components/ui/add-account-dialog";
import { Dialog, DialogTrigger } from "@nkeji-web/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";

const MakePayment = () => {
  const [expandCard1, setExpandCard1] = useState(false);
  const [expandCard2, setExpandCard2] = useState(false);
  return (
    <div>
      <div className="bg-white px-5 py-4 ">
        <h3 className="text-lg inter-bold">
          How do you want to pay £5,541.95?
        </h3>
        <p className="text-sm ">Select payment method below</p>
      </div>
      <div className="bg-white mt-3">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger onClick={() => setExpandCard1(!expandCard1)}
         className={` py-4 px-5
         ${expandCard1 ? 'bg-[#F2EEFB] border-b border-black' : 'bg-white'}
         `}
            >
              <div className="flex justify-between w-full">
                <div>
                  <h3 className="text-lg text-[#1B1E21] text-left inter-bold">
                    Pay now
                  </h3>
                  <p className="text-sm text-[#1B1E21]">Pay in full today.</p>
                </div>
                {!expandCard1 && (
                  <Image
                    width={300}
                    height={24}
                    src="/assets/cards.svg"
                    alt=""
                    className="pr-6"
                  />
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent className="bg-white py-4 px-5 mt-1" >
              <div className="flex flex-col space-y-6 w-full mt-4">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2 items-center">
                    <Image
                      width={18}
                      height={18}
                      src="/assets/credit-card.svg"
                      alt=""
                      className=""
                    />
                    <p className="text-[#1B1E21] text-base inter-semibold">
                      Credit card & Debit cards
                    </p>
                  </div>
                  <Image
                    width={300}
                    height={24}
                    src="/assets/cards.svg"
                    alt=""
                    className=""
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2 items-center">
                    <Image
                      width={18}
                      height={18}
                      src="/assets/bank.svg"
                      alt=""
                      className=""
                    />
                    <p className="text-[#1B1E21] text-base inter-semibold">
                    Bank Transfer
                    </p>
                  </div>
                 
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-2 items-center">
                    <Image
                      width={18}
                      height={18}
                      src="/assets/bank.svg"
                      alt=""
                      className=""
                    />
                    <p className="text-[#1B1E21] text-base inter-semibold">
                    Others: Paypal, Google Pay, Apple Pay
                    </p>
                  </div>
                  <Image
                    width={78}
                    height={18}
                    src="/assets/apps.svg"
                    alt=""
                    className="pr-6"
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger
            onClick={() => setExpandCard2(!expandCard2)}
             className={` py-4 px-5
             ${expandCard2 ? 'bg-[#F2EEFB] border-b border-black' : 'bg-white'}
             `}
            >
              <div className="flex justify-between w-full ">
                <div>
                  <h3 className="text-lg text-[#1B1E21] text-left inter-bold">
                    Pay in 6 or Financing
                  </h3>
                  <p className="text-sm text-[#1B1E21]">
                    Spread the cost into smaller payments, over 6 months.
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="bg-white py-4 px-5 mt-4" >
                <div className="text-[#1B1E21]">
                    <p className="text-base inter-semibold">Here your payment schedule</p>
                    <p className="text-base">The payment breakdown below includes a 25% interest.</p>

                    <div className="flex justify-between items-start mt-5">
                        <div className="flex flex-col items-center">
                            <span className="text-lg inter-semibold ">£923.65</span>
                            <span className="text-[#A3A7AB] text-xs">Due today</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-lg inter-semibold ">£923.65</span>
                            <span className="text-[#A3A7AB] text-xs">Due in 30 days</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-lg inter-semibold ">£923.65</span>
                            <span className="text-[#A3A7AB] text-xs">Due in 60 days</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-lg inter-semibold ">£923.65</span>
                            <span className="text-[#A3A7AB] text-xs">Due in 90 days</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-lg inter-semibold ">£923.65</span>
                            <span className="text-[#A3A7AB] text-xs">Due 120 days</span>
                        </div>
                        <div className="flex flex-col items-center ">
                            <span className="text-lg inter-semibold ">£923.65</span>
                            <span className="text-[#A3A7AB] text-xs">Due 120 days</span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3 my-10">
                    <div className="flex flex-col items-center ">
                            <span className="text-lg inter-semibold ">£5,541.95</span>
                            <span className="text-[#A3A7AB] text-xs">Total cost</span>
                        </div>
                        <Dialog>
                <DialogTrigger>
                <button className="text-white inter-semibold text-sm bg-[#7F56D9] rounded-full px-12 py-4">Proceed</button>
              </DialogTrigger>
              <AddAccountDialog />

                </Dialog>
               
                    </div>

                    <div className="pr-10">
                        <p className="text-[#A3A7AB] text-xs">By proceeding, I acknowledge my acceptance of the terms provided by the Nkeji. I have reviewed both the 
                        <a className="text-[#1B1E21] underline inter-medium"> Privacy Notice</a> and the <a className="text-[#1B1E21] underline inter-medium">Cookie Notice</a>. Please be aware that Nkeji represents an unregulated form of credit. It is essential to use this service responsibly. 
                        Please note that <a className="text-[#1B1E21] underline inter-medium">Terms & Conditions</a> apply.</p>
                   <p className="text-[#A3A7AB] text-xs mt-5" >For full information, please refer to the  <a className="text-[#1B1E21] underline inter-medium">Terms & Conditions.</a></p>
                    </div>
                </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default MakePayment;
