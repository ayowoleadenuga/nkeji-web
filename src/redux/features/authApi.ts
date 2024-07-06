import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginRequest, LoginResponse } from "@nkeji-web/lib/global-types";
import { setCredentials } from "./authSlice";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            setCredentials({ user: data.data.user, token: data.data.token })
          );
        } catch (error) {
          // handle error if needed
        }
      },
    }),
    emailVerification: builder.mutation<void, { email: string }>({
      query: (email) => ({
        url: "email/verifications",
        method: "POST",
        body: email,
      }),
    }),
    verifyEmail: builder.mutation<void, { email: string; otp: string }>({
      query: (payload) => ({
        url: "email/verify",
        method: "POST",
        body: payload,
      }),
    }),
    phoneNumberVerification: builder.mutation<void, { phone_number: string }>({
      query: (phoneNumber) => ({
        url: "phone-number/verifications",
        method: "POST",
        body: phoneNumber,
      }),
    }),
    verifyPhoneNumber: builder.mutation<
      void,
      { phone_number: string; otp: string }
    >({
      query: (payload) => ({
        url: "phone-number/verify",
        method: "POST",
        body: payload,
      }),
    }),
    registerUser: builder.mutation<
      void,
      {
        first_name: string;
        last_name: string;
        date_of_birth: string;
        phone_number: string;
        email: string;
        password: string;
      }
    >({
      query: (payload) => ({
        url: "register",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useEmailVerificationMutation,
  useVerifyEmailMutation,
  usePhoneNumberVerificationMutation,
  useVerifyPhoneNumberMutation,
  useRegisterUserMutation,
} = authApi;
