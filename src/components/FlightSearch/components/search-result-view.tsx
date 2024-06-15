import {
  FlightSearchPayload,
  FlightSearchResult,
} from "@nkeji-web/lib/global-types";
import FlightRouteCard from "./route-card";
import FlightRangeTabs from "./flight-range";
import LoadingSpinner from "./loading-spinner";
import SearchResultComponent from "./search-result";
import Image from "next/image";
import { MapImg } from "../constants/images";
import FlightDetailsBanner from "./flight-details-banner";
import FlightBookingWidget from "@nkeji-web/components/Homepage/components/flightBookingWidget";

interface SearchResultViewProps {
  showFlightComponent: boolean;
  setShowFlightComponent: (show: boolean) => void;
  search: () => Promise<void>;
  flightSearchPayload: FlightSearchPayload;
  handleSelectFlight: (offer: FlightSearchResult) => void;
  data: { data: FlightSearchResult[] | null };
  isLoading: boolean;
}
const SearchResultView = ({
  showFlightComponent,
  setShowFlightComponent,
  search,
  flightSearchPayload,
  handleSelectFlight,
  data,
  isLoading,
}: SearchResultViewProps) => {
  return (
    <div>
      <div>
        {showFlightComponent ? (
          <FlightBookingWidget
            setShowFlightComponent={setShowFlightComponent}
            isSamePage
            showTabs={false}
            searchHandler={search}
          />
        ) : (
          <div className="px-6 lg:px-20 bg-white mt-10 w-full flex flex-col lg:flex-row justify-between">
            <div className="w-[38%]">
              <FlightDetailsBanner
                flightSearchPayload={flightSearchPayload}
                setShowFlightComponent={setShowFlightComponent}
              />
            </div>
            <Image src={MapImg} alt="map" className="w-1/2" />
          </div>
        )}
      </div>
      <div className="px-6 py-10 lg:px-20 bg-[#F7F8F9] mt-10 flex space-x-4">
        <SearchResultComponent />
        <div className="w-[74%]">
          {isLoading ? (
            <div className="bg-white flex items-center justify-center h-screen">
              <LoadingSpinner />
            </div>
          ) : (
            <>
              <FlightRangeTabs />
              {data?.data?.map((offer: FlightSearchResult) => (
                <div key={offer.id}>
                  <FlightRouteCard
                    flightData={offer}
                    flightSearchPayload={flightSearchPayload}
                    selectOffer={() => handleSelectFlight(offer)}
                  />
                </div>
              ))}
              <div className="text-center mt-10 bg-[#D7CBF3] mx-auto bg-opacity-20 w-[fit-content] py-2 px-4 rounded-lg">
                <p className="text-[#7F56D9] inter-semibold text-sm">
                  No more flights
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultView;
