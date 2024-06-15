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
  flyers: {
    adults: Flyer[] | [];
    infants: Flyer[] | [];
    kids: Flyer[] | [];
  };
  passengerDetails: Passenger[];
};
