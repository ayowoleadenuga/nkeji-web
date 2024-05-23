import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { FlightSearchPayload, TicketType } from "./global-types";
import getSymbolFromCurrency from "currency-symbol-map";

import { parseISO, format } from "date-fns";

/**
 * Calculates and formats the duration between two ISO date strings using native JavaScript Date.
 * @param {string} departureISO - The ISO string for the departure time.
 * @param {string} arrivalISO - The ISO string for the arrival time.
 * @returns {string} - A human-friendly duration string, e.g., "5h 30m".
 */
export function formatFlightDuration(
  departureISO: string,
  arrivalISO: string
): string {
  const departure = new Date(departureISO);
  const arrival = new Date(arrivalISO);

  // Calculate the difference in milliseconds
  const durationMs = arrival.getTime() - departure.getTime();

  // Convert milliseconds to minutes and hours
  const minutes = Math.floor(durationMs / 60000);
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  let friendlyDurations: string[] = [];

  // Append hours if they exist
  if (hours > 0) {
    friendlyDurations.push(`${hours}h`);
  }

  // Append remaining minutes if they exist
  if (remainingMinutes > 0) {
    friendlyDurations.push(`${remainingMinutes}m`);
  }

  // Join all parts with a space and return
  return friendlyDurations.join(" ");
}

export function convertToFormattedDateTime(dateString: string): {
  date: string;
  time: string;
} {
  // Parse the ISO string to a Date object
  const date: Date = parseISO(dateString);

  // Format the date to '10 May'
  const formattedDate: string = format(date, "d MMM");

  // Format the time to '5PM' using uppercase 'A' for AM/PM
  const formattedTime: string = format(date, "h:mm a").toUpperCase();

  return {
    date: formattedDate,
    time: formattedTime,
  };
}

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

export function formatDate(dateStr: string): string {
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date: Date = new Date(dateStr);

  const day: number = date.getDate();
  const monthIndex: number = date.getMonth();
  const year: number = date.getFullYear();

  // Determine the suffix for the day
  let suffix: string = "th";
  if (day % 10 === 1 && day !== 11) {
    suffix = "st";
  } else if (day % 10 === 2 && day !== 12) {
    suffix = "nd";
  } else if (day % 10 === 3 && day !== 13) {
    suffix = "rd";
  }

  // Format the date string
  return `${months[monthIndex]} ${day}${suffix}, ${year}`;
}

// Object mapping currency strings to their symbols
const stringToCode: Record<string, string> = {
  GBP: "£",
  USD: "$",
};

// Object mapping currency symbols to their strings
const codeToString: Record<string, string> = {
  "£": "GBP",
  $: "USD",
};

/**
 * Convert a currency string to its corresponding symbol.
 * @param value The currency string (e.g., "USD").
 * @returns The currency symbol (e.g., "$") or the original string if not found.
 */
export function currencyToCode(value: string): string {
  const currency = value.toUpperCase().trim();
  return stringToCode[currency] || getSymbolFromCurrency(currency) || currency;
}

/**
 * Convert a currency symbol to its corresponding string code.
 * @param code The currency symbol (e.g., "$").
 * @returns The currency code (e.g., "USD") or the original symbol if not found.
 */
export function currencyCodetoString(code: string): string {
  return codeToString[code] || code;
}

export function convertStringToNumber(str: string): number {
  // Remove commas from the string
  const cleanedString = str.replace(/,/g, "");

  // Convert the cleaned string to a number
  const number = parseFloat(cleanedString);

  return number;
}

export function scrollToTop(): void {
  if (typeof window !== "undefined") {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Use 'auto' for instant scrolling
    });
  }
}

/**
 * Formats a number into a comma-separated currency string.
 * @param amount The numeric amount to format.
 * @returns The formatted string (e.g., "1,000").
 */
export function moneyValueformat(amount: number): string {
  return amount.toLocaleString();
}
