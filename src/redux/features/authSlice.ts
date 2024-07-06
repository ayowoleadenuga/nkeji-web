import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
import { User } from "@nkeji-web/lib/global-types";

interface ErrorResponse {
  message: string;
  errors: {
    email: string[];
  };
}

// Define the initial state for the auth slice
interface AuthState {
  token: string | null;
  user: User | null;
  loading: boolean;
  error: string | null;
  email: string;
  phoneNumber: string;
  otp: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  password: string;
  currentStage:
    | "emailVerification"
    | "verifyEmail"
    | "phoneNumberVerification"
    | "verifyPhoneNumber"
    | "registerDetails";
}

const initialState: AuthState = {
  token: null,
  user: null,
  loading: false,
  error: null,
  email: "",
  phoneNumber: "",
  otp: "",
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  password: "",
  currentStage: "emailVerification",
};

// Utility type to handle RTK Query error types
type ErrorType = {
  status: number;
  data: {
    message: string;
    errors: {
      email: string[];
    };
  };
};

// Create the auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setOtp: (state, action: PayloadAction<string>) => {
      state.otp = action.payload;
    },
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setDateOfBirth: (state, action: PayloadAction<string>) => {
      state.dateOfBirth = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setCurrentStage: (
      state,
      action: PayloadAction<AuthState["currentStage"]>
    ) => {
      state.currentStage = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    logoutAction: (state) => {
      state.user = null;
      state.token = null;
    },
    clearError: (state) => {
      state.error = null;
    },
    resetState: (state) => {
      return {
        ...initialState,
        user: state.user,
        token: state.token,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (state, action: PayloadAction<any>) => ({
          ...state,
          user: action.payload.data.user,
          token: action.payload.data.token,
          error: null,
        })
      )
      .addMatcher(authApi.endpoints.login.matchRejected, (state, action) => {
        state.loading = false;
        const error = action.error as {
          status?: number;
          data?: any;
          error?: string;
        };
        return {
          ...state,
          loading: false,
          error: error?.data?.message || "Login failed",
        };
      });
  },
});

// Export the logout action creator
export const {
  clearError,
  logoutAction,
  setCredentials,
  setEmail,
  setPhoneNumber,
  setOtp,
  setFirstName,
  setLastName,
  setDateOfBirth,
  setPassword,
  setCurrentStage,
  setError,
  resetState,
} = authSlice.actions;

// Export the auth reducer
export default authSlice.reducer;
