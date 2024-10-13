"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { profileLinks } from "@nkeji-web/components/FlightSearch/constants/constants";
import { useSelector } from "react-redux";
import { RootState } from "@nkeji-web/redux/store";
import { Avatar, AvatarFallback } from "@nkeji-web/components/ui/avatar";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@nkeji-web/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const ProfileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [showOptions, setShowOptions] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);
  const optionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        optionRef.current &&
        !optionRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowOptions(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);
  return (
    <div
      className={cn(
        "mt-4 w-full shadow-sm px-6 lg:px-20 py-4 flex items-center justify-between relative top-0 bg-transparent",
        fontSans.variable
      )}
    >
      <Link href="/">
        <Image
          height={40}
          width={100}
          src="/assets/nkejiLogo.svg"
          placeholder="blur"
          blurDataURL="/assets/logo.svg"
          alt="Nkeji-Logo"
        />
      </Link>
      <div className={`hidden lg:flex  justify-between w-full pl-10`}>
        <ul className="flex items-center space-x-10 ">
          {profileLinks.map((link, index) => (
            <li key={`${link.navLink}-${index}`}>
              <Link href={link.navLink}>
                <span className={`text-sm `}>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div
          ref={optionRef}
          className={`flex ml-10 items-center gap-2 relative`}
        >
          <Image
            height={30}
            width={30}
            src="/assets/notification.svg"
            alt="notification"
          />
          <div className="bg-[#f7f5fd] h-10 flex items-center gap-2 pl-2 pr-3 rounded-[80px] ">
            <Image
              height={30}
              width={30}
              className="rounded-full"
              src="/assets/avatar.svg"
              alt={user ? user?.first_name[0] : "user"}
            />
            <p className="text-[14px] font-[500] text-primary-main ">
              Mirabel E. Offiong
            </p>
            <button
              onClick={() => setShowOptions(!showOptions)}
              className={`rounded-full w-6 h-6 bg-primary-main flex items-center justify-center `}
            >
              <Image
                height={10}
                width={10}
                className={`rounded-full ${
                  showOptions ? "rotate-180" : ""
                } duration-300 `}
                src="/assets/dropdownWhite.svg"
                placeholder="blur"
                blurDataURL="/assets/logo.svg"
                alt="options"
              />
            </button>
          </div>
          {showOptions && (
            <div className="absolute top-[56px] right-0 p-3 w-[350px] h-auto bg-white shadow-lg rounded-[8px] ">
              <div className="w-full border-b border-b-[#EAECF0] flex items-center justify-between pb-4">
                <div className=" flex items-center gap-3">
                  <span className="text-[14px] ">
                    <p className=" italic ">Nkeji rewards</p>
                    <p>15,321 points</p>
                  </span>
                </div>
                <button className="text-primary-main text-[14px] font-[700] flex items-center gap-2 ">
                  View reward activities
                  <Image
                    height={8}
                    width={8}
                    src="/assets/viewArrow.svg"
                    alt="view"
                  />
                </button>
              </div>
              <div className="w-full  border-b border-b-[#EAECF0] pb-4">
                <button className="flex items gap-1 text-[14px] mt-2 ">
                  <Image
                    height={20}
                    width={20}
                    src="/assets/settings.svg"
                    alt="notification"
                  />
                  Account settings
                </button>
                <button className="flex items gap-1 text-[14px] mt-4  ">
                  <Image
                    height={20}
                    width={20}
                    src="/assets/support.svg"
                    alt="notification"
                  />
                  Contact support
                </button>
              </div>
              <button className="flex items gap-1 text-[14px] text-[#CB1818] mt-6  ">
                <Image
                  height={20}
                  width={20}
                  src="/assets/logout.svg"
                  alt="notification"
                />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-3 lg:hidden">
        {user && (
          <Avatar className="h-9 w-9">
            <AvatarFallback>{`${user.first_name[0]}${user.last_name[0]}`}</AvatarFallback>
          </Avatar>
        )}
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
            {profileLinks.map((link, index) => (
              <li key={`${link.navLink}-${index}`}>
                <Link href={link.navLink} onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}

            <li className={`${user ? "hidden" : "block"}`}>
              <a
                href="/"
                className={` border border-black text-black px-6 py-2 rounded-[100px] w-full  text-center`}
              >
                Login
              </a>
            </li>
            <li className={`${user ? "hidden" : "block"}`}>
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

export default ProfileNavigation;
