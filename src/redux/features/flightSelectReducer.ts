import { createSlice } from "@reduxjs/toolkit";
import { FlightSelect } from "@nkeji-web/lib/global-types";

const initialState: FlightSelect = {
  selectedFlight: null,
  flightId: null,
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
      email: "",
      gender: undefined,
      phoneNumber: "",
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
    updateFlightId: (state, action) => {
      state.flightId = action.payload;
    },
    updatePassengerDetails: (state, action) => {
      state.passengerDetails = action.payload;
    },
    resetSelectedFlightState: (state) => {
      state = { ...initialState };
    },
  },
});

export const {
  updateInfantFlyers,
  updateAdultFlyers,
  updateKidFlyers,
  updateFlightSelection,
  updatePassengerDetails,
  updateFlightId,
  resetSelectedFlightState,
} = flightSelectSlice.actions;
export default flightSelectSlice.reducer;
