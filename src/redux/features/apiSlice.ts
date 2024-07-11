import {
  Airport,
  FlightIdData,
  FlightSearchPayload,
  User,
} from "@nkeji-web/lib/global-types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { PlaidLinkOnSuccessMetadata } from "react-plaid-link";

export interface ApiResponse<T> {
  data: T;
}

const baseQueryWithAuth = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["Airport", "FlightIdData"],
  endpoints: (builder) => ({
    getAirports: builder.query({
      query: (searchValue: string) => ({
        url: "/airports",
        params: { query: searchValue },
      }),
      providesTags: (result) =>
        result && result.data
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
    getFlightId: builder.mutation<ApiResponse<FlightIdData>, string>({
      query: (flightId: string) => ({
        url: "/flights",
        method: "POST",
        body: {
          flightId: flightId,
        },
      }),
    }),
    getDirectPaymentLink: builder.mutation({
      query: ({ flightId, amount }: { flightId: string; amount: number }) => ({
        url: `/flights/${flightId}/payments`,
        method: "POST",
        body: {
          successURL: `${process.env.NEXT_PUBLIC_APP_URL}/payment-success`,
          failureURL: `${process.env.NEXT_PUBLIC_APP_URL}/payment-failure`,
          amount,
        },
      }),
    }),
    getPaymentMandateLink: builder.mutation({
      query: ({ flightId, amount }: { flightId: string; amount: number }) => ({
        url: `/flights/${flightId}/payments/with-mandate`,
        method: "POST",
        body: {
          successURL: `${process.env.NEXT_PUBLIC_APP_URL}/payment-success`,
          failureURL: `${process.env.NEXT_PUBLIC_APP_URL}/payment-failure`,
          amount,
        },
      }),
    }),
    getPlaidToken: builder.mutation({
      query: () => ({
        url: "/bank-connection/tokens",
        method: "POST",
      }),
    }),
    exchangePlaidToken: builder.mutation({
      query: ({
        token,
        metadata,
      }: {
        token: string;
        metadata: PlaidLinkOnSuccessMetadata;
      }) => ({
        url: "/bank-connection/public-tokens",
        method: "POST",
        body: {
          token,
          metadata,
        },
      }),
    }),
    getUser: builder.query<ApiResponse<User>, null>({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAirportsQuery,
  useGetFlightsMutation,
  useGetDirectPaymentLinkMutation,
  useGetFlightIdMutation,
  useGetPlaidTokenMutation,
  useExchangePlaidTokenMutation,
  useGetUserQuery,
  useGetPaymentMandateLinkMutation,
} = apiSlice;
