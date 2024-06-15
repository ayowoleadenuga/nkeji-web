"use client";

import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@nkeji-web/redux/store";
import { useGetFlightsMutation } from "@nkeji-web/redux/features/apiSlice";
import { updateFlightSelection } from "@nkeji-web/redux/features/flightSelectReducer";
import { scrollToTop } from "@nkeji-web/lib/utils";
import { FlightSearchResult } from "@nkeji-web/lib/global-types";
import BookingSteps from "./components/booking-steps";
import SearchResultView from "./components/search-result-view";
import LoadingSpinner from "./components/loading-spinner";
import Navigation from "@nkeji-web/components/Homepage/components/navigation";
import FlightTabs from "./components/flight-tabs";
import { CustomerBenefits } from "@nkeji-web/components/Homepage/components/customer-benefit";
import { FAQS } from "@nkeji-web/components/Homepage/components/faq";
import { Footer } from "@nkeji-web/components/Homepage/components/footer";

const FlightSearch = () => {
  const [showFlightComponent, setShowFlightComponent] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);

  const flightSearchPayload = useSelector(
    (state: RootState) => state.flightSearch
  );

  const [getFlightsMutation, { data, isLoading }] = useGetFlightsMutation();
  const dispatch = useDispatch();

  const search = useCallback(async () => {
    try {
      await getFlightsMutation(flightSearchPayload);
    } catch (error) {
      console.error(error);
    }
  }, [flightSearchPayload, getFlightsMutation]);

  useEffect(() => {
    search();
  }, [search]);

  useEffect(() => {
    scrollToTop();
  }, [currentTab]);

  const handleSelectFlight = useCallback(
    (offer: FlightSearchResult) => {
      dispatch(updateFlightSelection(offer));
      setCurrentTab(1);
    },
    [dispatch]
  );

  return (
    <>
      {!data && isLoading ? (
        <div className="bg-white flex items-center justify-center h-screen">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <Navigation hasBg />
          <FlightTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
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
            />
          )}
          <CustomerBenefits />
          <FAQS />
          <Footer />
        </>
      )}
    </>
  );
};

export default FlightSearch;
