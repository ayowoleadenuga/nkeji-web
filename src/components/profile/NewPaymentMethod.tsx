"use client";
import MyInput from "@nkeji-web/components/ui/MyInput";
import Image from "next/image";
import React, { useState } from "react";

interface ContactInfoInterface {
  setAddNewPayMethod: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewPaymentMethod: React.FC<ContactInfoInterface> = ({
  setAddNewPayMethod,
}) => {
  const [requiredDetails, setRequiredDetails] = useState({
    cardNo: "",
    exp: "",
    cvv: "",
    name: "",
  });
  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRequiredDetails({
      ...requiredDetails,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="w-full h-full ">
      <div className="border-b border-b-[#EAECF0] pb-4 w-full ">
        <button
          onClick={() => setAddNewPayMethod(false)}
          className="text-[#808080]  text-[14px] mb-4  flex items-center gap-2 "
        >
          <Image height={15} width={15} src="/assets/back.svg" alt="edit" />
          go back
        </button>
        <p className="font-[700] text-[18px] ">Add new payment method</p>
        <p className="text-[#808080] text-[14px] ">
          Update your plan payment details
        </p>
      </div>
      <div className="w-full ">
        <MyInput
          name="cardNo"
          className=" text-[14px] mt-10 font-[400] w-full border rounded-[8px] px-3  border-[#DAE0E6] text-[#808080]  bg-white  outline-none h-[48px]   "
          placeholder="Debit/credit card number"
          onChange={handleOnchange}
          value={requiredDetails.cardNo}
        />
      </div>
      <div className="w-full flex items-start justify-between mt-6 ">
        <div className="w-[49%] ">
          <MyInput
            name="exp"
            className=" text-[14px] font-[400] w-full border rounded-[8px] px-3  border-[#DAE0E6] text-[#808080] mt-1  bg-white  outline-none h-[48px]   "
            placeholder="Expiration date"
            onChange={handleOnchange}
            value={requiredDetails.exp}
          />
        </div>
        <div className="w-[49%] ">
          <MyInput
            name="cvv"
            className=" text-[14px] font-[400] w-full border rounded-[8px] px-3  border-[#DAE0E6] text-[#808080] mt-1  bg-white  outline-none h-[48px]   "
            placeholder="CVV"
            onChange={handleOnchange}
            value={requiredDetails.cvv}
          />
        </div>
      </div>
      <MyInput
        name="name"
        className=" text-[14px] mt-6 font-[400] w-full border rounded-[8px] px-3  border-[#DAE0E6] text-[#808080]  bg-white  outline-none h-[48px]   "
        placeholder="Name on card"
        onChange={handleOnchange}
        value={requiredDetails.name}
      />
      <button
        disabled={
          !requiredDetails.cardNo ||
          !requiredDetails.cvv ||
          !requiredDetails.exp ||
          !requiredDetails.name
        }
        className="w-full h-[45px] text-[14px] mt-10 italic bg-primary-main rounded-[8px] text-white font-[300] "
      >
        Add payment method
      </button>
    </div>
  );
};

export default NewPaymentMethod;
