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
  MULTI_CITY = "Multi City",
}
export enum CabinClass {
  ECONOMY = "Economy",
  BUSINESS = "Business",
  FIRST = "First",
}
type Currency = "GBP" | "USD" | "NGN";
type Luggage = {
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
type Departure = {
  airline: Airline;
  ArrivalAirport: Airport;
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
  noOfAdults?: number;
  noOfInfants?: number;
  noOfKids?: number;
  returnDate?: string;
  type: TicketType;
}

export type FlightSearchResult = {
  checkedInLuggage: Luggage;
  currency: Currency;
  departure: Departure;
  departureStops: Departure[];
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
