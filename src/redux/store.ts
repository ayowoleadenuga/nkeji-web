import { combineReducers, configureStore } from "@reduxjs/toolkit";
import flightSearchReducer from "./features/flightSearchReducer";
import { apiSlice } from "./features/apiSlice";
import authModalReducer from "./features/authModalSlice";

const rootReducer = combineReducers({
  // other reducers here
  flightSearch: flightSearchReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
  authModal: authModalReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
