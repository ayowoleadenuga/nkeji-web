"use client";
import MyInput from "@nkeji-web/components/ui/MyInput";
import Image from "next/image";
import React, { useState } from "react";

interface ContactInfoInterface {
  setContactInfoEditable: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactInfo: React.FC<ContactInfoInterface> = ({
  setContactInfoEditable,
}) => {
  const [requiredDetails, setRequiredDetails] = useState({
    phone: "",
    address: "",
    email: "",
  });
  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRequiredDetails({
      ...requiredDetails,
      [event.target.name]: event.target.value,
    });
  };
  const [contaciInfoEditable, setcontaciInfoEditable] = useState(false);
  return (
    <div className="w-full h-full ">
      <div className="border-b border-b-[#EAECF0] pb-4 w-full ">
        <button
          onClick={() => setContactInfoEditable(false)}
          className="text-[#808080]  text-[14px] mb-4  flex items-center gap-2 "
        >
          <Image height={15} width={15} src="/assets/back.svg" alt="edit" />
          go back
        </button>
        <p className="font-[700] text-[18px] ">Edit contact information</p>
        <p className="text-[#808080] text-[14px] ">
          Ensure that this information matches your passport
        </p>
      </div>
      <div className="w-full flex items-start justify-between mt-6 ">
        <div className="w-[32%] ">
          <MyInput
            title="Email address"
            name="email"
            className=" text-[14px] font-[400] w-full border rounded-[8px] px-3  border-[#DAE0E6] text-[#808080] mt-1  bg-white  outline-none h-[48px]   "
            placeholder="Email"
            onChange={handleOnchange}
            value={requiredDetails.email}
          />
        </div>
        <div className="w-[32%] ">
          <MyInput
            title="Phone number"
            name="phone"
            className=" text-[14px] font-[400] w-full border rounded-[8px] px-3  border-[#DAE0E6] text-[#808080] mt-1  bg-white  outline-none h-[48px]   "
            placeholder="+447689009"
            onChange={handleOnchange}
            value={requiredDetails.phone}
          />
        </div>
        <div className="w-[32%] ">
          <MyInput
            title="Address"
            name="address"
            className=" text-[14px] font-[400] w-full border rounded-[8px] px-3  border-[#DAE0E6] text-[#808080] mt-1  bg-white  outline-none h-[48px]   "
            placeholder="81 Victory way, Coventry"
            onChange={handleOnchange}
            value={requiredDetails.address}
          />
        </div>
      </div>
      <button className="w-full h-[45px] text-[14px] mt-10 bg-primary-main rounded-[8px] text-white ">
        Save changes
      </button>
    </div>
  );
};

export default ContactInfo;
