import { FlightSearchPayload } from "@nkeji-web/lib/global-types";
import BaggageAllowance from "./baggage-allowance";
import BaggageProtection from "./baggage-protection";
import BaggageReview from "./baggage-review";
import CancellationProtection from "./cancellation-protection";
import ContactDetails from "./contact-details";
import MakePayment from "./make-payment";
import PassengerDetails from "./passenger-details";
import PriceDetails from "./price-details";
import SeatSelection from "./seat-selection";
import SubHeader from "./subheader";
import TravelerDetails from "./traveler-details";

interface BookingStepsProps {
  currentTab: number;
  setCurrentTab: (tab: number) => void;
  flightSearchPayload: FlightSearchPayload;
}
const BookingSteps = ({
  currentTab,
  setCurrentTab,
  flightSearchPayload,
}: BookingStepsProps) => (
  <>
    <SubHeader
      departure={flightSearchPayload.departure.id}
      destination={flightSearchPayload.destination.id}
    />
    <div className="bg-[#F7F8F9] px-6 py-5 lg:px-20 mt-10 flex justify-between">
      <div className="w-[68%] flex flex-col space-y-3">
        {currentTab === 1 && (
          <>
            {/* <ContactDetails /> */}
            <PassengerDetails flightSearchPayload={flightSearchPayload} />
            <SeatSelection />
          </>
        )}
        {currentTab === 2 && (
          <>
            {/* <ContactDetails
              showDetails
              setCurrentTab={setCurrentTab}
              index={2}
            /> */}
            <BaggageAllowance setCurrentTab={setCurrentTab} index={2} />
            <div className="bg-white w-full py-6 px-5">
              <div className="flex justify-between items-center">
                <h3 className="text-lg inter-bold">Extras</h3>
                <p className="text-base inter-bold">£0</p>
              </div>
            </div>
          </>
        )}
        {currentTab === 3 && (
          <>
            {/* <ContactDetails
              showDetails
              setCurrentTab={setCurrentTab}
              index={3}
            /> */}
            <TravelerDetails index={3} setCurrentTab={setCurrentTab} />
            <BaggageReview />
          </>
        )}
        {currentTab === 4 && <MakePayment />}
      </div>
      <div className="w-[30%] flex flex-col space-y-3">
        <CancellationProtection />
        <BaggageProtection />
        <PriceDetails />
      </div>
    </div>
    <div className="flex justify-center space-x-3 mt-6">
      <button
        type="button"
        onClick={() => setCurrentTab(currentTab - 1)}
        className="rounded-full px-14 py-3 border border-[#7F56D9] bg-white text-sm inter-semibold"
      >
        Back
      </button>
      <button
        onClick={() => setCurrentTab(currentTab + 1)}
        type="button"
        className="rounded-full px-14 py-3 bg-[#7F56D9] text-white text-sm inter-semibold"
      >
        {currentTab === 3 ? "Make payment" : "Next"}
      </button>
    </div>
  </>
);

export default BookingSteps;
