import { ExtraIcon, PassengerIcon, PlaneIcon, ReviewIcon, WalletIcon } from "./images";

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
  
  export const flightSearchTabs = [
    {
      name: "Select flight",
      navLink: "select-flight",
      icon: PlaneIcon
    },
    {
      name: "Passenger details",
      navLink: "passenger-details",
      icon:PassengerIcon
    },
    {
      name: "Extras",
      navLink: "extras",
      icon:ExtraIcon
    },
    {
      name: "Review",
      navLink: "review",
      icon: ReviewIcon
    },
    {
      name: "Make payment",
      navLink: "payment",
      icon: WalletIcon
    },
  ];
  export const flightRangeTabLists = [
    {
      tag:'Recommended',
      price:'1,500',
      duration:'20h 14m'
    },
    {
      tag:'Cheapest',
      price:'500',
      duration:'30h 14m'
    }, {
      tag:'Fastest',
      price:'1,700',
      duration:'10h 14m'
    } 
  ]