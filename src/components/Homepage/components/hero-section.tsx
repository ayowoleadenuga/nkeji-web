import React from "react";
import Navigation from "./navigation";
import FlightBookingWidget from "./flightBookingWidget";

const HeroSection = () => {
  return (
    <div className="relative z-30 ">
      <div className="absolute w-full left-0 inset-0 h-[60vh] bg-[url('/assets/home-bg.png')] bg-cover">
        <div className="w-full h-full bg-black opacity-60"></div>
      </div>
      <div className="relative z-50">
        <Navigation />
        <div className="w-full md:w-[80%] lg:w-[60%] mx-auto my-24 text-center relative z-30">
          <h1 className="inter-bold text-4xl md:text-5xl lg:text-6xl text-white">
            Search & Book Flights
          </h1>
          <p className="text-lg md:text-xl lg:text-lg text-white inter-medium px-10 pt-4">
            Fly Now, Pay Later
          </p>
        </div>
        <FlightBookingWidget />
      </div>
    </div>
  );
};

export default HeroSection;
