import {
  FlightSearchPayload,
  FlightSearchResult,
  ResultsTabType,
} from "@nkeji-web/lib/global-types";
import FlightRouteCard from "./route-card";
import FlightRangeTabs from "./flight-range";
import LoadingSpinner from "./loading-spinner";
import SearchResultComponent from "./search-result";
import Image from "next/image";
import { MapImg, MapImg2 } from "../constants/images";
import FlightDetailsBanner from "./flight-details-banner";
import FlightBookingWidget from "@nkeji-web/components/Homepage/components/flightBookingWidget";
import { flightRangeTabLists } from "../constants/constants";
import { useEffect, useState } from "react";
import { sortFlights } from "@nkeji-web/lib/utils";

interface SearchResultViewProps {
  showFlightComponent: boolean;
  setShowFlightComponent: (show: boolean) => void;
  search: () => Promise<void>;
  flightSearchPayload: FlightSearchPayload;
  handleSelectFlight: (offer: FlightSearchResult) => void;
  data: { data: FlightSearchResult[] | null };
  isLoading: boolean;
}
export type DataList = {
  price: FlightSearchResult[];
  stopovers: FlightSearchResult[];
  flightTime: FlightSearchResult[];
};
const SearchResultView = ({
  showFlightComponent,
  setShowFlightComponent,
  search,
  flightSearchPayload,
  handleSelectFlight,
  data,
  isLoading,
}: SearchResultViewProps) => {
  const [currentTab, setCurrentTab] = useState<{
    tag: string;
    keyword: ResultsTabType;
  }>(flightRangeTabLists[0]);
  const [dataList, setDataList] = useState<DataList | null>(null);
  useEffect(() => {
    if (data && data.data) {
      const allSortedList = sortFlights(data.data);
      setDataList(allSortedList);
    }
  }, [currentTab, data]);
  const { departure, destination } = flightSearchPayload;
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
          <div className="px-6 lg:px-20 bg-white mt-10 w-full flex flex-col-reverse md:flex-row md:gap-0 gap-4 justify-between">
            <div className="w-full md:w-[55%] lg:w-[38%]">
              <FlightDetailsBanner
                flightSearchPayload={flightSearchPayload}
                setShowFlightComponent={setShowFlightComponent}
              />
            </div>
            <div className=" relative w-full md:w-[40%] lg:w-1/2 h-auto">
              <div className="w-full h-full ">
                <Image src={MapImg2} alt="map" className="w-full h-full" />
                <div className="absolute top-[25%] left-10 w-[40%] ">
                  <Image
                    src="/assets/flightMoving.svg"
                    alt="flight-route"
                    height={100}
                    width={100}
                    className=" w-full h-full  "
                  />
                  <p className="absolute text-[#1513A0] font-[600] text-[12px]  left-[-1%] bottom-[-55%] ">
                    {destination.id}
                  </p>
                  <p className="absolute text-[#1513A0] font-[600] text-[12px] right-[-4%] bottom-[-35%]">
                    {departure.id}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="px-6 py-10 lg:px-20 bg-[#F7F8F9] mt-10 flex md:space-x-4">
        <SearchResultComponent data={dataList} />
        <div className="w-full md:w-[74%] relative">
          {isLoading ? (
            <div className="bg-white flex items-center justify-center h-screen">
              <LoadingSpinner />
            </div>
          ) : (
            <>
              <FlightRangeTabs
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
                data={dataList}
              />
              {dataList &&
                dataList[currentTab.keyword].map(
                  (offer: FlightSearchResult) => (
                    <div key={offer.id}>
                      <FlightRouteCard
                        flightData={offer}
                        flightSearchPayload={flightSearchPayload}
                        selectOffer={() => handleSelectFlight(offer)}
                      />
                    </div>
                  )
                )}
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
