import { ResultsTabType } from "@nkeji-web/lib/global-types";
import {
  ExtraIcon,
  PassengerIcon,
  PlaneIcon,
  ReviewIcon,
  WalletIcon,
} from "./images";

export const flightSearchLinks = [
  {
    name: "FAQs",
    navLink: "/faqs",
  },
  {
    name: "Rewards",
    navLink: "/rewards",
  },
  {
    name: "Contact Us",
    navLink: "/contact-us",
  },
  {
    name: "Rewards",
    navLink: "/rewards",
  },
];

export const human_titles = [
  "Mr.",
  "Mrs.",
  "Miss",
  "Ms.",
  "Dr.",
  "Prof.",
  "Sir",
  "Lady",
  "Lord",
  "Baron",
  "Baroness",
];

export const flightSearchTabs = [
  {
    name: "Select flight",
    navLink: "select-flight",
    icon: PlaneIcon,
  },
  {
    name: "Passenger details",
    navLink: "passenger-details",
    icon: PassengerIcon,
  },
  {
    name: "Extras",
    navLink: "extras",
    icon: ExtraIcon,
  },
  {
    name: "Review",
    navLink: "review",
    icon: ReviewIcon,
  },
  {
    name: "Make payment",
    navLink: "payment",
    icon: WalletIcon,
  },
];
export const flightRangeTabLists: { tag: string; keyword: ResultsTabType }[] = [
  {
    tag: "Recommended",
    keyword: "stopovers",
  },
  {
    tag: "Cheapest",
    keyword: "price",
  },
  {
    tag: "Fastest",
    keyword: "flightTime",
  },
];
