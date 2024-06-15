import { createSlice } from "@reduxjs/toolkit";
import { FlightSelect } from "@nkeji-web/lib/global-types";

const initialState: FlightSelect = {
  selectedFlight: null,
  flyers: {
    adults: [],
    infants: [],
    kids: [],
  },
  passengerDetails: [
    {
      id: "Passenger 1",
      title: "",
      firstName: "",
      middleName: "",
      lastName: "",
      dob: "",
    },
  ],
};

const flightSelectSlice = createSlice({
  name: "slectedFlightDetails",
  initialState,
  reducers: {
    updateAdultFlyers: (state, action) => {
      state.flyers = {
        ...state.flyers,
        adults: action.payload,
      };
    },
    updateInfantFlyers: (state, action) => {
      state.flyers = {
        ...state.flyers,
        infants: action.payload,
      };
    },
    updateKidFlyers: (state, action) => {
      state.flyers = {
        ...state.flyers,
        kids: action.payload,
      };
    },
    updateFlightSelection: (state, action) => {
      state.selectedFlight = action.payload;
    },
    updatePassengerDetails: (state, action) => {
      state.passengerDetails = action.payload;
    },
  },
});

export const {
  updateInfantFlyers,
  updateAdultFlyers,
  updateKidFlyers,
  updateFlightSelection,
  updatePassengerDetails,
} = flightSelectSlice.actions;
export default flightSelectSlice.reducer;