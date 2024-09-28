"use client";
import BasicInfo from "@nkeji-web/components/profile/BasicInfo";
import ContactInfo from "@nkeji-web/components/profile/ContactInfo";
import Image from "next/image";
import React, { useState } from "react";

const PersonalInfo = () => {
  const [contactInfoEditable, setContactInfoEditable] = useState(false);
  const [basicInfoEditable, setBasicInfoEditable] = useState(false);
  return (
    <div className="w-full h-full  ">
      {!basicInfoEditable && !contactInfoEditable && (
        <div className="w-full h-full">
          <div className="border-b border-b-[#EAECF0] pb-4 w-full flex items-center justify-between ">
            <div>
              <p className="font-[700] text-[18px] ">Basic information</p>
              <p className="text-[#808080] text-[14px] ">
                Ensure that this information matches your passport
              </p>
            </div>
            <button
              onClick={() => setBasicInfoEditable(true)}
              className="text-primary-main underline text-[14px] font-[700] flex items-center gap-2 "
            >
              Edit
              <Image
                height={6}
                width={6}
                src="/assets/viewArrow.svg"
                alt="edit"
              />
            </button>
          </div>
          <div className="w-full flex items-start justify-between mt-6 ">
            <div className="w-[32%] ">
              <p className="font-[700] ">First Name</p>
              <p className="text-[#808080] text-[14px] mt-1 ">Mirabel</p>
            </div>
            <div className="w-[32%] ">
              <p className="font-[700] ">Middle Name</p>
              <p className="text-[#808080] text-[14px] mt-1 ">--</p>
            </div>
            <div className="w-[32%] ">
              <p className="font-[700] ">Last Name</p>
              <p className="text-[#808080] text-[14px] mt-1 ">Offiong</p>
            </div>
          </div>
          <div className="w-full flex items-start gap-[2%] my-6 border-b border-b-[#EAECF0] pb-4">
            <div className="w-[32%] ">
              <p className="font-[700] ">Date of birth</p>
              <p className="text-[#808080] text-[14px] mt-1 ">Mirabel</p>
            </div>
            <div className="w-[32%] ">
              <p className="font-[700] ">Gender</p>
              <p className="text-[#808080] text-[14px] mt-1 ">Female</p>
            </div>
          </div>
          <div className="border-b border-b-[#EAECF0] pb-4 w-full flex items-center justify-between ">
            <div>
              <p className="font-[700] text-[18px] ">Contact information</p>
              <p className="text-[#808080] text-[14px] ">
                Ensure that this information matches your passport
              </p>
            </div>
            <button
              onClick={() => setContactInfoEditable(true)}
              className="text-primary-main underline text-[14px] font-[700] flex items-center gap-2 "
            >
              Edit
              <Image
                height={6}
                width={6}
                src="/assets/viewArrow.svg"
                alt="edit"
              />
            </button>
          </div>
          <div className="w-full flex items-start justify-between mt-6 ">
            <div className="w-[32%] ">
              <p className="font-[700] ">Email address</p>
              <p className="text-[#808080] text-[14px] mt-1 ">Mirabel</p>
            </div>
            <div className="w-[32%] ">
              <p className="font-[700] ">Phone number</p>
              <p className="text-[#808080] text-[14px] mt-1 ">
                Mirabeloffiong@gmail.com
              </p>
            </div>
            <div className="w-[32%] ">
              <p className="font-[700] ">Address</p>
              <p className="text-[#808080] text-[14px] mt-1 ">
                81 Victory way, Coventry
              </p>
            </div>
          </div>
        </div>
      )}
      {basicInfoEditable && (
        <BasicInfo setBasicInfoEditable={setBasicInfoEditable} />
      )}
      {contactInfoEditable && (
        <ContactInfo setContactInfoEditable={setContactInfoEditable} />
      )}
    </div>
  );
};

export default PersonalInfo;
