"use client";
import { useState } from "react";
import { faqs } from "../constants/constants";
import Image from "next/image";

export const FAQS = () => {
  const [faqQuestions, setFaqQuestions] = useState(faqs);
  return (
    <div className="px-0 py-10 md:p-20 flex flex-col md:flex-row justify-between items-start text-left">
      <div className="text-left md:w-1/3 px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B1E21] mb-5 leading-10">
          Frequently asked questions
        </h2>
        <p className="text-[#4B525A] text-base md:text-lg inter-medium mt-2">
          Have questions? We have answers! Check out our frequently asked
          questions to find the information you need.
        </p>
      </div>
      <div className="w-full md:w-2/3 mt-10 md:mt-0">
        {faqQuestions.map((faq, index) => {
          return (
            <div
              onClick={() => {
                setFaqQuestions((prev) => {
                  const updatedFaqs = prev.map((item, i) => {
                    if (i === index) {
                      return { ...item, expand: !item.expand };
                    }
                    return item;
                  });
                  return updatedFaqs;
                });
              }}
              className={`p-6 md:p-10 cursor-pointer ${
                faq.expand ? "bg-[#F9FAFB] rounded-lg" : ""
              }`}
              key={index}
            >
              <div className="mb-4 flex justify-between items-center">
                <h3 className="text-lg md:text-xl inter-medium text-[#1B1E21]">
                  {faq.question}
                </h3>
                <Image
                  height={1}
                  width={1}
                  layout="intrinsic"
                  src={`/assets/${faq.expand ? "close" : "open"}-faq.svg`}
                  alt=""
                />
              </div>
              {faq.expand && (
                <div>
                  <p className="text-[#4B525A] text-base md:text-lg">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
