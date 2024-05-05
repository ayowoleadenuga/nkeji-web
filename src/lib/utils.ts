import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { FlightSearchPayload, TicketType } from "./global-types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateSentence(
  sentence: string,
  maxLength: number = 50
): string {
  if (sentence.length > maxLength) {
    return sentence.substring(0, maxLength - 3) + "...";
  } else {
    return sentence;
  }
}

export function isSearchPayloadValid(payload: FlightSearchPayload): boolean {
  // Check if departure and destination airports have been selected (ID is a simple indicator of selection)
  const airportsSelected =
    payload.departure.id !== "" && payload.destination.id !== "";

  // Check if the departure date is set
  const departureDateSet = payload.departureDate !== "";

  // Check if at least one adult is included in the passenger count
  const validPassengerCount =
    payload.noOfAdults !== undefined && payload.noOfAdults > 0;

  // If the ticket type is ROUND_TRIP, also check for return date
  const returnDateValid =
    payload.type === TicketType.RETURN ? payload.returnDate !== "" : true;

  // All conditions must be true for the payload to be considered valid
  return (
    airportsSelected &&
    departureDateSet &&
    validPassengerCount &&
    returnDateValid
  );
}

interface PassengerCounts {
  adults: number;
  children: number;
  infants: number;
}

export function formatPassengerCount(passengers: any): string {
  const parts: string[] = [];

  // Check each property and format it accordingly.
  if (passengers.adults > 0) {
    parts.push(`${passengers.adults} Adult${passengers.adults > 1 ? "s" : ""}`);
  }
  if (passengers.children > 0) {
    parts.push(
      `${passengers.children} Child${passengers.children > 1 ? "ren" : ""}`
    );
  }
  if (passengers.infants > 0) {
    parts.push(
      `${passengers.infants} Infant${passengers.infants > 1 ? "s" : ""}`
    );
  }

  // If there are no parts in the array, return "Passengers" to indicate zero count across all.
  if (parts.length === 0) {
    return "Passengers";
  }

  // Construct the final string based on the number of parts to format it correctly with commas and an ampersand
  if (parts.length > 1) {
    const lastPart = parts.pop(); // Remove the last part
    return `${parts.join(", ")} & ${lastPart}`; // Join remaining parts with commas, add last part with an ampersand
  } else {
    return parts[0]; // Only one part, just return it
  }
}
