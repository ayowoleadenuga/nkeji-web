"use client";

import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@nkeji-web/redux/store";
import { useGetFlightsMutation } from "@nkeji-web/redux/features/apiSlice";
import {
  resetSelectedFlightState,
  updateFlightSelection,
} from "@nkeji-web/redux/features/flightSelectReducer";
import { scrollToTop } from "@nkeji-web/lib/utils";
import { FlightSearchResult } from "@nkeji-web/lib/global-types";
import BookingSteps from "./components/booking-steps";
import SearchResultView from "./components/search-result-view";
import Navigation from "@nkeji-web/components/Homepage/components/navigation";
import FlightTabs from "./components/flight-tabs";
import { Footer } from "@nkeji-web/components/Homepage/components/footer";
import { openModal } from "@nkeji-web/redux/features/authModalReducer";
import AlternateLoader from "./components/alternate-loader";
import { useToast } from "../ui/use-toast";
import CircularProgress from "@nkeji-web/components/ui/CircularProgress";
import Image from "next/image";
import { flightSearchTabs } from "@nkeji-web/components/FlightSearch/constants/constants";

const FlightSearch = () => {
  const [showFlightComponent, setShowFlightComponent] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);

  const flightSearchPayload = useSelector(
    (state: RootState) => state.flightSearch
  );
  const { toast } = useToast();
  const [getFlightsMutation, { data, isLoading }] = useGetFlightsMutation();
  const dispatch = useDispatch();

  const search = async () => {
    try {
      await getFlightsMutation(flightSearchPayload);
    } catch (error) {
      console.error(error);
      toast({
        title: "Oops! an error has occurred",
        variant: "destructive",
        description: `Unable to find flight deals. Please try again later`,
      });
    }
  };
  useEffect(() => {
    search();
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [currentTab]);

  const handleSelectFlight = useCallback(
    (offer: FlightSearchResult) => {
      dispatch(resetSelectedFlightState());
      dispatch(updateFlightSelection(offer));
      setCurrentTab(1);
    },
    [dispatch]
  );
  const handleOpenAuthModal = () => {
    dispatch(openModal());
  };
  const user = useSelector((state: RootState) => state.auth.user);
  const makePayment = () => {
    if (user) {
      setCurrentTab(currentTab + 1);
    } else {
      handleOpenAuthModal();
    }
  };
  const { departure, departureDate, returnDate, destination } =
    flightSearchPayload;
  return (
    <>
      {!data && isLoading ? (
        <AlternateLoader
          departureAirportCode={departure.id}
          departureDate={departureDate}
          arrivalAirportCity={destination.city}
          departureAirportCity={departure.city}
          arrivalAirportCode={destination.id}
          returnDate={returnDate}
        />
      ) : (
        <>
          <Navigation hasBg />
          <div className="md:block hidden">
            <FlightTabs currentTab={currentTab} setCurrentTab={() => {}} />
          </div>
          <div className="md:hidden w-full items-center justify-between flex px-5  ">
            <div
              className={`flex relative justify-center h-full cursor-pointer space-x-2 items-center 
              
              `}
              // onClick={() => setCurrentTab(currentTab++)}
              key={flightSearchTabs[currentTab].navLink}
            >
              <Image
                src={flightSearchTabs[currentTab].icon}
                alt=""
                height={100}
                width={20}
                className=" "
              />
              <p className="text-[#33383E] text-sm inter-bold">
                {flightSearchTabs[currentTab].name}
              </p>
            </div>
            <CircularProgress currentStep={currentTab} totalSteps={5} />
          </div>
          {currentTab === 0 && (
            <SearchResultView
              showFlightComponent={showFlightComponent}
              setShowFlightComponent={setShowFlightComponent}
              search={search}
              flightSearchPayload={flightSearchPayload}
              handleSelectFlight={handleSelectFlight}
              data={data}
              isLoading={isLoading}
            />
          )}
          {currentTab >= 1 && currentTab <= 4 && (
            <BookingSteps
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
              flightSearchPayload={flightSearchPayload}
              makePayment={makePayment}
            />
          )}
          {/* <CustomerBenefits />
          <FAQS /> */}
          <Footer />
        </>
      )}
    </>
  );
};

export default FlightSearch;
