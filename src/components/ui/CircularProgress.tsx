import React from "react";

const CircularProgress = ({ currentStep, totalSteps }: any) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const progress = ((currentStep + 1) / totalSteps) * circumference;

  return (
    <div className="relative w-[70px] h-[70px] mt-3 ">
      <svg className="transform rotate-[-90deg] w-full h-full">
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="#D3D3D3"
          strokeWidth="10"
          fill="transparent"
        />
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="#1513A0"
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round" // Added this line
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-[24px] text-[#7F56D9]">{currentStep + 1}</p>
        <p className="text-[#817e7e]">/{totalSteps}</p>
      </div>
    </div>
  );
};

export default CircularProgress;
