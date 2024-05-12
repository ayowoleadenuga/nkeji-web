import { Airport, FlightSearchPayload } from "@nkeji-web/lib/global-types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ApiResponse<T> {
  data: T;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api",
  }),
  tagTypes: ["Airport"],
  endpoints: (builder) => ({
    getAirports: builder.query({
      query: (searchValue: string) => ({
        url: "/airports",
        params: { query: searchValue },
      }),
      providesTags: (result) =>
        result
          ? // Provide a tag for each returned airport
            result.data.map((airport: Airport) => ({
              type: "Airport",
              id: airport.id,
            }))
          : // Provide an empty tag if no results
            [{ type: "Airport", id: "" }],
    }),
    getFlights: builder.mutation({
      query: (payload: FlightSearchPayload) => ({
        url: "/flights/search",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useGetAirportsQuery, useGetFlightsMutation } = apiSlice;
