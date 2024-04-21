// @refresh reset
import React from "react";
import { CustomerBenefits } from "./components/customer-benefit";
import { EasySteps } from "./components/easy-steps";
import { ExperiencesComponent } from "./components/experiences";
import { FAQS } from "./components/faq";
import { Footer } from "./components/footer";
import { HolidayPackages } from "./components/holiday-package";
import { PlanComponent } from "./components/plans";
import HeroSection from "./components/hero-section";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div className="bg-white pt-20  px-10 lg:px-20 pb-20">
        <PlanComponent />
      </div>
      <EasySteps />
      <HolidayPackages />
      {/* <ExperiencesComponent /> */}
      <CustomerBenefits />
      <FAQS />
      <Footer />
    </>
  );
};

export default HomePage;
