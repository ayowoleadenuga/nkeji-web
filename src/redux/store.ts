import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistReducer, persistStore, PersistConfig } from "redux-persist";
import flightSearchReducer from "./features/flightSearchReducer";
import { apiSlice } from "./features/apiSlice";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist/es/constants";

// Define the root state type
type RootReducerState = ReturnType<typeof rootReducer>;

// Define a persist configuration type that accounts for PersistPartial
type RootPersistConfig = PersistConfig<RootReducerState> & {
  whitelist: (keyof RootReducerState)[];
};

// Combine all reducers
const rootReducer = combineReducers({
  flightSearch: flightSearchReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

// Persist configuration
const persistConfig: RootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["flightSearch"], // specify which reducers to persist
};

// Function to create the store
const createStore = () => {
  let store;
  let persistor;

  if (typeof window !== "undefined") {
    // Running on the client side
    const persistedReducer = persistReducer(persistConfig, rootReducer);

    store = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }).concat(apiSlice.middleware),
    });

    persistor = persistStore(store);
  } else {
    // Running on the server side
    store = configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    });
  }

  return { store, persistor };
};

export const { store, persistor } = createStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
