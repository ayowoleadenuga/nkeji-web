"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@nkeji-web/components/ui/accordion";
import AddAccountDialog from "@nkeji-web/components/ui/add-account-dialog";
import { Dialog, DialogTrigger } from "@nkeji-web/components/ui/dialog";
import { RootState } from "@nkeji-web/redux/store";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { useEffect, useState } from "react";
import GoCardlessDialog from "@nkeji-web/components/ui/go-cardless-dialog";
import {
  useGetDirectPaymentLinkMutation,
  useGetFlightIdMutation,
  useGetPaymentMandateLinkMutation,
} from "@nkeji-web/redux/features/apiSlice";
import {
  resetSelectedFlightState,
  updateFlightId,
} from "@nkeji-web/redux/features/flightSelectReducer";
import { resetSearchFlightState } from "@nkeji-web/redux/features/flightSearchReducer";
import { useRouter } from "next/navigation";

import GoCardlessPaymentMandateDialog from "@nkeji-web/components/ui/payment-mandate-dialog";

import ReusablePaymentModalContainer from "./reusablePaymentModalHead";
import MoonLoader from "react-spinners/MoonLoader";
import { moneyValueformat } from "@nkeji-web/lib/utils";

const MakePayment = () => {
  const [expandCard1, setExpandCard1] = useState<boolean>(false);
  const [expandCard2, setExpandCard2] = useState<boolean>(false);
  const [isUnderwritingDone, setIsUnderwritingDone] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  const selected = useSelector((state: RootState) => state.flightSelect);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const [getDirectPaymentLink, { data, isLoading: instantPaymentLoading }] =
    useGetDirectPaymentLinkMutation();
  const [
    getPaymentMandateLink,
    { data: paymentMandateData, isLoading: directDebitLoading },
  ] = useGetPaymentMandateLinkMutation();
  const [getFlightIdMutation] = useGetFlightIdMutation();
  useEffect(() => {
    const fetchFlightId = async () => {
      try {
        const result = await getFlightIdMutation(selectedFlight?.id || "");
        if ("data" in result) {
          const {
            data: { data: flightIdData },
          } = result;

          dispatch(updateFlightId(flightIdData));
        }
      } catch (error) {
        console.error("Failed to get flight id:", error);
      }
    };
    fetchFlightId();
  }, []);

  if (!user) {
    router.push("/flight-search");
    return;
  }

  const { selectedFlight, flightId } = selected;
  const fullAmount = flightId?.total || 0.0;
  const downPaymentForFNPL = flightId?.down;
  const spreadableAmountForFNPL = flightId?.recurring || [
    0.0, 0.0, 0.0, 0.0, 0.0,
  ];

  const handleInstantPayment = async () => {
    try {
      await getDirectPaymentLink({
        flightId: flightId?.id?.toString() || "",
        amount: Number(fullAmount.toFixed(2)),
      }).unwrap();
    } catch (err) {
      console.error("Failed to get payment link:", err);
    }
  };
  const handleDirectDebitPayment = async () => {
    try {
      await getPaymentMandateLink({
        flightId: flightId?.id.toString() || "",
        amount: Number(downPaymentForFNPL),
      }).unwrap();
    } catch (err) {
      console.error("Failed to get direct debit payment link:", err);
    }
  };

  const paymentSuccessHandler = () => {
    dispatch(resetSelectedFlightState());
    dispatch(resetSearchFlightState());

    router.push("/payment-success");
  };
  return (
    <div>
      <div className="bg-white px-5 py-4 ">
        <h3 className="md:text-lg inter-bold">
          {`How do you want to pay £${moneyValueformat(fullAmount)}?`}
        </h3>
        <p className="text-sm ">Select payment method below</p>
      </div>
      <div className="bg-white mt-3">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger
              onClick={() => setExpandCard1(!expandCard1)}
              className={` py-4 px-5
         ${expandCard1 ? "bg-[#F2EEFB] border-b border-black" : "bg-white"}
         `}
            >
              <div className="flex md:flex-row flex-col justify-between w-full">
                <div className=" flex items-start flex-col mb-6 md:mb-0">
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
            <AccordionContent className="bg-white py-4 px-5 mt-1">
              <div className="flex flex-col space-y-6 w-full mt-4">
                {/* <div className="flex justify-between items-center">
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
                </div> */}

                <div className="flex justify-between items-center">
                  <Dialog>
                    <DialogTrigger onClick={handleInstantPayment}>
                      <div className="flex space-x-2 items-center">
                        <Image
                          width={18}
                          height={18}
                          src="/assets/bank.svg"
                          alt=""
                          className=""
                        />
                        <p className="text-[#1B1E21] text-base inter-semibold">
                          Click here for bank Instant Payment
                        </p>
                      </div>
                    </DialogTrigger>
                    {data ? (
                      <GoCardlessDialog
                        onSuccess={paymentSuccessHandler}
                        authorisation_url={data?.data?.authorisation_url}
                      />
                    ) : (
                      <ReusablePaymentModalContainer title="Instant Payment">
                        {instantPaymentLoading ? (
                          <div className="flex items-center justify-center my-4">
                            <MoonLoader color="#7F56D9" size={80} />
                          </div>
                        ) : (
                          <div className="my-4">
                            Unable to initiate payment link. Please go back and
                            try again later
                          </div>
                        )}
                      </ReusablePaymentModalContainer>
                    )}
                  </Dialog>
                </div>

                {/* <div className="flex justify-between items-center">
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
                </div> */}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger
              onClick={() => setExpandCard2(!expandCard2)}
              className={` py-4 px-5
             ${expandCard2 ? "bg-[#F2EEFB] border-b border-black" : "bg-white"}
             `}
            >
              <div className="flex justify-between w-full ">
                <div className=" flex items-start flex-col mb-6 md:mb-0">
                  <h3 className="text-lg text-[#1B1E21] text-left inter-bold">
                    Pay in 6
                  </h3>
                  <p className="text-sm text-[#1B1E21]  text-start">
                    Spread the cost into smaller payments, over 6 months.
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="bg-white py-4 px-5 mt-4">
              <div className="text-[#1B1E21]">
                <p className="text-base inter-semibold">
                  Here your payment schedule
                </p>
                <p className="text-base">
                  The payment breakdown amount may increase based on your risk
                  profile.
                </p>

                <div className="flex justify-between flex-wrap items-start mt-5">
                  <div className="flex flex-col items-center">
                    <span className="text-lg inter-semibold ">{`£${downPaymentForFNPL}`}</span>
                    <span className="text-[#A3A7AB] text-xs">Due today</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-lg inter-semibold ">{`£${spreadableAmountForFNPL[0]}`}</span>
                    <span className="text-[#A3A7AB] text-xs">
                      Due in 30 days
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-lg inter-semibold ">{`£${spreadableAmountForFNPL[1]}`}</span>
                    <span className="text-[#A3A7AB] text-xs">
                      Due in 60 days
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-lg inter-semibold ">{`£${spreadableAmountForFNPL[2]}`}</span>
                    <span className="text-[#A3A7AB] text-xs">
                      Due in 90 days
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-lg inter-semibold ">{`£${spreadableAmountForFNPL[3]}`}</span>
                    <span className="text-[#A3A7AB] text-xs">Due 120 days</span>
                  </div>
                  <div className="flex flex-col items-center ">
                    <span className="text-lg inter-semibold ">{`£${spreadableAmountForFNPL[4]}`}</span>
                    <span className="text-[#A3A7AB] text-xs">Due 150 days</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 my-10">
                  <div className="flex flex-col items-center ">
                    <span className="text-lg inter-semibold ">{`£${moneyValueformat(
                      fullAmount
                    )}`}</span>
                    <span className="text-[#A3A7AB] text-xs">Total cost</span>
                  </div>
                  {!isUnderwritingDone ? (
                    <div>
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white inter-semibold text-sm bg-[#7F56D9] rounded-full px-12 py-4"
                      >
                        Proceed
                      </button>
                      <AddAccountDialog
                        visible={isOpen}
                        closeOnClickOut
                        setIsUnderwritingDone={setIsUnderwritingDone}
                        onClose={() => {
                          setIsOpen(false);
                        }}
                      />
                    </div>
                  ) : (
                    <Dialog>
                      <DialogTrigger
                        onClick={handleDirectDebitPayment}
                        className="text-white inter-semibold text-sm bg-[#7F56D9] rounded-full px-12 py-4"
                      >
                        Proceed
                      </DialogTrigger>

                      {paymentMandateData ? (
                        <GoCardlessPaymentMandateDialog
                          onSuccess={paymentSuccessHandler}
                          authorisation_url={
                            paymentMandateData?.data?.authorisation_url
                          }
                        />
                      ) : (
                        <ReusablePaymentModalContainer title="Direct Debit Setup">
                          {directDebitLoading ? (
                            <div className="flex items-center justify-center my-4">
                              <MoonLoader color="#7F56D9" size={80} />
                            </div>
                          ) : (
                            <div className="my-4">
                              Unable to initiate payment link. Please go back
                              and try again later
                            </div>
                          )}
                        </ReusablePaymentModalContainer>
                      )}
                    </Dialog>
                  )}
                </div>

                <div className="md:pr-10">
                  <p className="text-[#A3A7AB] text-xs">
                    By proceeding, I acknowledge my acceptance of the terms
                    provided by the Nkeji. I have reviewed both the
                    <a className="text-[#1B1E21] underline inter-medium">
                      {" "}
                      Privacy Notice
                    </a>{" "}
                    and the{" "}
                    <a className="text-[#1B1E21] underline inter-medium">
                      Cookie Notice
                    </a>
                    . Please be aware that Nkeji represents an unregulated form
                    of credit. It is essential to use this service responsibly.
                    Please note that{" "}
                    <a className="text-[#1B1E21] underline inter-medium">
                      Terms & Conditions
                    </a>{" "}
                    apply.
                  </p>
                  <p className="text-[#A3A7AB] text-xs mt-5">
                    For full information, please refer to the{" "}
                    <a className="text-[#1B1E21] underline inter-medium">
                      Terms & Conditions.
                    </a>
                  </p>
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
