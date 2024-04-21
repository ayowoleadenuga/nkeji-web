"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "../constants/constants";
import { flightSearchLinks } from "@nkeji-web/components/FlightSearch/constants/constants";

interface NavigationProps {
  hasBg?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ hasBg = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const filteredNavLists = hasBg ? flightSearchLinks : navLinks
  return (
    <div className={`w-full  px-6 lg:px-20 py-8 flex items-center  relative
    ${hasBg ? 'bg-[#35245B]': 'bg-transparent justify-between' }
    
    `}>
      <Link href="/">
        <Image
          height={40}
          width={100}
          src="/assets/logo.svg"
          placeholder="blur"
          blurDataURL="/assets/logo.svg"
          alt="Nkeji Logo"
        />
      </Link>
      <div className={`hidden md:flex  ${hasBg ? 'justify-between w-full pl-10' :''}`}>
        <ul className="flex items-center space-x-10 ">
          {filteredNavLists.map((link) => (
            <li key={link.navLink}>
              <Link href={link.navLink}>
                <span
                  className={`text-sm text-white ${
                    pathname === link.navLink ? "inter-bold" : ""
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
       
        </ul>
        <div className={`flex space-x-2 ${hasBg ? 'ml-auto': 'ml-10'}`}>
            <a
              href="/"
              className="border border-white text-white text-base px-8 py-2 inter-medium rounded-[100px]"
            >
              Login
            </a>
            <a
              href="/"
              className="bg-white text-[#1B1E21] text-base px-8 py-2 inter-medium rounded-[100px]"
            >
              Signup
            </a>
          </div>
      </div>
      <div className="block md:hidden">
        <button onClick={() => setIsOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fff"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute  top-0 left-0 w-full h-screen bg-white flex flex-col items-start justify-start z-[100]">
          <div className="relative flex justify-end w-full pr-10 pt-5">
            <button className="  text-black" onClick={() => setIsOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="text-black text-xl space-y-8 mt-10 ml-8 text-left">
            {filteredNavLists.map((link) => (
              <li key={link.navLink}>
                <Link href={link.navLink} onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/"
                className="border border-black text-black px-6 py-2 rounded-[100px] w-full block text-center"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="/"
                className="bg-black text-white px-6 py-2 rounded-[100px] w-full block text-center"
              >
                Signup
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navigation;
