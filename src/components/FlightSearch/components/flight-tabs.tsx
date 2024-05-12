"use client";
import { useState } from "react";
import Image from "next/image"
import { flightSearchTabs } from "../constants/constants"
interface FlightTabsProps {
    currentTab:number;
    setCurrentTab:any
}

const FlightTabs:React.FC<FlightTabsProps> = ({currentTab,setCurrentTab })=>{

    return (
        <div className="bg-[#F2EEFB] h-[55px] w-full flex justify-around items-center px-6 lg:px-20">
        {
          flightSearchTabs.map((tab, index)=>{
            return (
              <div 
              className={`flex justify-center h-full cursor-pointer space-x-2 items-center w-[20%]
              ${currentTab === index ? 'bg-white' : 'bg-transparent'}
              `}
              onClick={()=> setCurrentTab(index ++)}
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

export default FlightTabs