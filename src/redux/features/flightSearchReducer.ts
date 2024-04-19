import {
  Airport,
  CabinClass,
  FlightSearchPayload,
  TicketType,
} from "@nkeji-web/lib/global-types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: FlightSearchPayload = {
  cabinClass: CabinClass.ECONOMY, // Default cabin class
  currency: "GBP", // Default currency
  departure: { id: "", name: "", city: "", country: "" } as Airport, // Empty departure airport
  departureDate: "",
  destination: { id: "", name: "", city: "", country: "" } as Airport, // Empty destination airport
  noOfAdults: undefined,
  noOfInfants: undefined,
  noOfKids: undefined,
  returnDate: undefined,
  type: TicketType.ONE_WAY, // Default ticket type
};

const flightSearchSlice = createSlice({
  name: "searchForm",
  initialState,
  reducers: {
    updateCabinClass: (state, action) => {
      state.cabinClass = action.payload;
    },
    updateCurrency: (state, action) => {
      state.currency = action.payload;
    },
    updateDeparture: (state, action) => {
      state.departure = action.payload;
    },
    updateDepartureDate: (state, action) => {
      state.departureDate = action.payload;
    },
    updateDestination: (state, action) => {
      state.destination = action.payload;
    },
    updateNoOfAdults: (state, action) => {
      state.noOfAdults = action.payload;
    },
    updateNoOfInfants: (state, action) => {
      state.noOfInfants = action.payload;
    },
    updateNoOfKids: (state, action) => {
      state.noOfKids = action.payload;
    },
    updateReturnDate: (state, action) => {
      state.returnDate = action.payload;
    },
    updateTicketType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const {
  updateCabinClass,
  updateCurrency,
  updateDeparture,
  updateDepartureDate,
  updateDestination,
  updateNoOfAdults,
  updateNoOfInfants,
  updateNoOfKids,
  updateReturnDate,
  updateTicketType,
} = flightSearchSlice.actions;
export default flightSearchSlice.reducer;
