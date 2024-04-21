"use client";
import { useState } from "react";
import Image from "next/image"
import { flightSearchTabs } from "../constants/constants"

const FlightDetails = ()=>{
  const [currentTab, setCurrentTab]= useState(flightSearchTabs[0].navLink)

    return (
        <div className="bg-[#F2EEFB] h-[55px] w-full flex justify-around items-center px-6 lg:px-20">
        {
          flightSearchTabs.map(tab=>{
            return (
              <div 
              className={`flex justify-center h-full cursor-pointer space-x-2 items-center w-[20%]
              ${currentTab === tab.navLink ? 'bg-white' : 'bg-transparent'}
              `}
              onClick={()=> setCurrentTab(tab.navLink)}
              key={tab.navLink}>
                <Image
                src={tab.icon}
                alt=""
                height={20}
                width={20}
                />
                <p className="text-[#33383E] text-sm inter-bold">{tab.name}</p>
              </div>
            )
          })
        }
    </div>
    )
}

export default FlightDetails