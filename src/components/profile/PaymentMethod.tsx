"use client";
import NewPaymentMethod from "@nkeji-web/components/profile/NewPaymentMethod";
import Image from "next/image";
import React, { useState } from "react";

const PaymentMethod = () => {
  const [addNewPayMethod, setAddNewPayMethod] = useState(false);
  return (
    <div className="w-full h-full">
      {addNewPayMethod ? (
        <NewPaymentMethod setAddNewPayMethod={setAddNewPayMethod} />
      ) : (
        <div className="w-full h-full">
          <div className="border-b border-b-[#EAECF0] pb-4 w-full mb-6 ">
            <p className="font-[700] text-[18px] ">Select payment method</p>
            <p className="text-[#808080] text-[14px] ">
              Update your plan payment details
            </p>
          </div>
          <div className="flex items-center justify-between w-full flex-wrap">
            <div className="border border-[#EAECF0] rounded-[8px] p-4 w-[47%] h-[100px] flex items-start gap-3 hover:shadow-md duration-200 ">
              <Image
                height={35}
                width={35}
                src="/assets/mastercardLogo.svg"
                alt="view"
              />
              <div className="w-full flex items-center justify-between h-full">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <p className="text-[14px] italic font-[300] ">
                      Mastercard ending in 1234
                    </p>
                    <p className="text-[12px] text-[#808080]  ">
                      Expiry date - 19/08/2024
                    </p>
                  </div>
                  <div className="flex items-center gap-3  font-[300] text-[12px] ">
                    <button className="italic">Set as default</button>
                    <button className="underline text-primary-main italic">
                      Edit
                    </button>
                  </div>
                </div>
                <input
                  type="radio"
                  className="accent-primary-main cursor-pointer"
                />
              </div>
            </div>
            <div className="w-full flex items-center justify-center mt-4">
              <button
                onClick={() => setAddNewPayMethod(true)}
                className="text-primary-main italic text-[14px] font-[300] flex gap-2 items-center "
              >
                Add new payment method
                <Image
                  height={20}
                  width={20}
                  src="/assets/add.svg"
                  alt="view"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;
