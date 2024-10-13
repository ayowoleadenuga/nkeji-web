"use client";
import MyInput from "@nkeji-web/components/ui/MyInput";
import Image from "next/image";
import React, { useState } from "react";

interface BasicInfoInterface {
  setBasicInfoEditable: React.Dispatch<React.SetStateAction<boolean>>;
}

const BasicInfo: React.FC<BasicInfoInterface> = ({ setBasicInfoEditable }) => {
  const [requiredDetails, setRequiredDetails] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    gender: "",
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
          onClick={() => setBasicInfoEditable(false)}
          className="text-[#808080]  text-[14px] mb-4  flex items-center gap-2 "
        >
          <Image height={15} width={15} src="/assets/back.svg" alt="edit" />
          go back
        </button>
        <p className="font-[700] text-[18px] ">Edit basic information</p>
        <p className="text-[#808080] text-[14px] ">
          Ensure that this information matches your passport
        </p>
      </div>
      <div className="w-full flex items-start justify-between mt-6 ">
        <div className="w-[32%] ">
          <MyInput
            title="First Name"
            name="firstName"
            className=" text-[14px] font-[400] w-full border rounded-[8px] px-3  border-[#DAE0E6] text-[#808080] mt-1  bg-white  outline-none h-[48px]   "
            placeholder="First Name"
            onChange={handleOnchange}
            value={requiredDetails.firstName}
          />
        </div>
        <div className="w-[32%] ">
          <MyInput
            title="Middle Name"
            name="middleName"
            className=" text-[14px] font-[400] w-full border rounded-[8px] px-3  border-[#DAE0E6] text-[#808080] mt-1  bg-white  outline-none h-[48px]  "
            placeholder="Middle Name"
            onChange={handleOnchange}
            value={requiredDetails.middleName}
          />
        </div>
        <div className="w-[32%] ">
          <MyInput
            title="Last Name"
            name="lastName"
            className=" text-[14px] font-[400] w-full border rounded-[8px] px-3  border-[#DAE0E6] text-[#808080] mt-1  bg-white  outline-none h-[48px]  "
            placeholder="Last Name"
            onChange={handleOnchange}
            value={requiredDetails.lastName}
          />
        </div>
      </div>
      <div className="w-full flex items-start justify-between my-6 border-b border-b-[#EAECF0] pb-4">
        <div className="w-[47%] ">
          <MyInput
            title="Date of birth"
            name="dob"
            className=" text-[14px] font-[400] w-full border rounded-[8px] px-3  border-[#DAE0E6] text-[#808080] mt-1  bg-white  outline-none h-[48px]   "
            placeholder="Date of birth"
            onChange={handleOnchange}
            value={requiredDetails.dob}
          />
        </div>
        <div className="w-[47%] ">
          <MyInput
            title="Gender"
            name="gender"
            className=" text-[14px] font-[400] w-full border rounded-[8px] px-3  border-[#DAE0E6] text-[#808080] mt-1  bg-white  outline-none h-[48px]  "
            placeholder="Gender"
            onChange={handleOnchange}
            value={requiredDetails.gender}
          />
        </div>
      </div>

      <button className="w-full h-[45px] text-[14px] mt-10 bg-primary-main rounded-[8px] text-white ">
        Save changes
      </button>
    </div>
  );
};

export default BasicInfo;
