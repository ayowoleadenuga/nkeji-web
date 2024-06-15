// selectors.js or within flightSearchReducer.js
import { createSelector } from "reselect";
import { RootState } from "@nkeji-web/redux/store";

const selectFlightSearch = (state: RootState) => state.flightSearch;

export const selectNoOfAdults = createSelector(
  [selectFlightSearch],
  (flightSearch) => flightSearch.noOfAdults
);

export const selectNoOfInfants = createSelector(
  [selectFlightSearch],
  (flightSearch) => flightSearch.noOfInfants
);

export const selectNoOfKids = createSelector(
  [selectFlightSearch],
  (flightSearch) => flightSearch.noOfKids
);

export const selectDepartureAirport = createSelector(
  [selectFlightSearch],
  (flightSearch) => flightSearch.departure
);

export const selectDestinationAirport = createSelector(
  [selectFlightSearch],
  (flightSearch) => flightSearch.destination
);

export const selectDepartureDate = createSelector(
  [selectFlightSearch],
  (flightSearch) => flightSearch.departureDate
);

export const selectReturnDate = createSelector(
  [selectFlightSearch],
  (flightSearch) => flightSearch.returnDate
);
