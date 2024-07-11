export type Airport = {
  id: string;
  name: string;
  city: string;
  country: string;
};

export type AirportSearch = {
  data: Airport[];
};

export enum TicketType {
  ONE_WAY = "One Way",
  RETURN = "Return",
  // MULTI_CITY = "Multi City",
}
export enum CabinClass {
  ECONOMY = "Economy",
  PREMIUM_ECONOMY = "Premium economy",
  BUSINESS = "Business",
  FIRST = "First-class",
}
type Currency = "GBP" | "USD" | "NGN";
export type Luggage = {
  type: string;
  pieces: number;
  size: number | null;
  massUnit: string | null;
};
type Airline = {
  name: string;
  code: string;
  logo: string;
};
export type Departure = {
  airline: Airline;
  arrivalAirport: Airport;
  arrivalTime: string;
  departureAirport: Airport;
  departureTime: string;
  stops: number;
};

export interface FlightSearchPayload {
  cabinClass: CabinClass;
  currency: Currency;
  departure: Airport;
  departureDate: string;
  destination: Airport;
  noOfAdults: number;
  noOfInfants: number;
  noOfKids: number;
  returnDate?: string;
  type: TicketType;
}

export type FlightSearchResult = {
  checkedInLuggage: Luggage;
  currency: Currency;
  departure: Departure;
  departureStops: Departure[] | null;
  detailsFetched: boolean;
  fares: any[];
  flightSearch: FlightSearchPayload;
  handLuggage: Luggage;
  id: string;
  originalPrice: string;
  personalItem: Luggage;
  price: string;
  return: Departure | null;
  returnStops: Departure[] | null;
};

export type FlightSearchResponse = {
  data: FlightSearchResult[];
};

export interface Passenger {
  id: string;
  title: string;
  firstName: string;
  middleName: string;
  lastName: string;
  dob: string;
  email: string;
  phoneNumber?: string;
  gender?: "male" | "female";
}

type Flyer = {
  dateOfBirth: string;
  email: string;
  firstName: string;
  gender: string;
  lastName: string;
  phoneNumber: string;
};

export type FlightSelect = {
  selectedFlight: FlightSearchResult | null;
  flightId: string | null;
  flyers: {
    adults: Flyer[] | [];
    infants: Flyer[] | [];
    kids: Flyer[] | [];
  };
  passengerDetails: Passenger[];
};

export type ResultsTabType = "stopovers" | "price" | "flightTime";

export type FlightIdData = {
  id: number;
};

export interface LoginRequest {
  email: string;
  password: string;
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  email: string;
  email_verified_at: string | null;
  phone_number_verified_at: string | null;
  two_factor_confirmed_at: string | null;
  phone_number: string;
  phone_verified_at: string | null;
  created_at: string;
  updated_at: string;
  credit_limit: {
    currency: string;
    amount: number;
    created_at: string;
  };
}

export interface LoginResponse {
  data: {
    user: User;
    token: string;
  };
}

export interface SignupState {
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
  error: string | null;
}

export interface GetPlaidTokenResponse {
  data: {
    expiration: Date;
    link_token: string;
    request_id: string;
  };
}
