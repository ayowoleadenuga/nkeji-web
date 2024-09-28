"use client";
import React, { useState } from "react";
import { Button } from "@nkeji-web/components/ui/button";
import Image from "next/image";
import { truncateString } from "@nkeji-web/lib/utils";

interface wylInterface {
  setSigninTab: React.Dispatch<
    React.SetStateAction<
      "open account" | "otp" | "know you better" | "where you live"
    >
  >;
}

const WhereYouLive: React.FC<wylInterface> = ({ setSigninTab }) => {
  const allCriteria = [
    "Proof of address must show your name",
    "Your residential address must be clear",
    "Is dated less than 3 months ago",
    "Not cropped or blurry",
  ];

  const [addressProof, setAddressProof] = useState<File | null>(null); // Store single file
  const [fileName, setFileName] = useState<string | null>(null); // Store file name

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) return;

    const file = event.target.files[0]; // Select the first file (since only one is allowed)
    setAddressProof(file);
    setFileName(file.name); // Store the file name
  };

  const handleFileUpload = () => {
    if (addressProof) {
      const formData = new FormData();
      formData.append("file", addressProof); // Append the selected file to the form data

      // Example fetch call to the backend to send the file
      fetch("/api/upload", {
        method: "POST",
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          console.log("File uploaded successfully", data);
        })
        .catch(error => {
          console.error("Error uploading file", error);
        });
    }
  };

  return (
    <div className="flex items-center justify-center w-[61.5%] h-[100%] ">
      <div className="w-[70%] h-full pt-10">
        <div className="bg-[#7F56D90F]/10 w-[100px] py-2 rounded-[80px] border-[#7F56D9] border text-[#7F56D9] text-[12px] flex items-center justify-center font-[500] mb-5 ">
          <p>Step 2 or 2</p>
        </div>
        <h2 className="text-3xl font-bold text-[1D1D20] ">
          Where do you live?
        </h2>
        <p className="text-[14px] opacity-70 mb03 ">
          Office ipsum you must be muted. Bells overflow sop waste.
        </p>

        <input
          type="text"
          placeholder="Residential address"
          required
          className="flex border border-[#F0F0F1] shadow rounded-lg bg-white mt-6 mb-4 px-3 w-full h-[48px] outline-none"
        />

        <label className="flex border border-[#F0F0F1] shadow rounded-lg bg-white mt-6 mb-4 px-3 w-full h-[48px] outline-none cursor-pointer items-center relative">
          {fileName ? (
            <p className="text-sm text-[#1D1D20] w-[80%] ">
              {truncateString(fileName, 35)}
            </p>
          ) : (
            <p className="text-[#1D1D2066]/60 ">Upload proof of address</p>
          )}

          <button
            onClick={e => {
              e.preventDefault();
              const fileInput = document.querySelector(
                'input[type="file"]'
              ) as HTMLInputElement;
              fileInput?.click();
            }}
            className="text-[#7F56D9] absolute top-3 right-2"
          >
            Upload file
          </button>
          <input
            type="file"
            accept=".pdf, .docx, application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={handleChange}
            className="hidden"
          />
        </label>

        <div className="bg-[#FCFCFC] w-full p-5 rounded-[8px] flex flex-col gap-y-2 ">
          {allCriteria.map((item, index) => (
            <span key={index} className="flex items-center gap-2">
              <Image
                height={10}
                width={10}
                layout="intrinsic"
                src={`/assets/checked.svg`}
                alt=""
                className="cursor-pointer w-[24px] h-[24px] "
              />
              <p className="text-[12px] font-[500] ">{item}. </p>
            </span>
          ))}
        </div>

        <Button
          className="w-full bg-[#7F56D9] mt-4 rounded-[8px] text-white inter-semibold"
          onClick={handleFileUpload} // Trigger file upload on click
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default WhereYouLive;
