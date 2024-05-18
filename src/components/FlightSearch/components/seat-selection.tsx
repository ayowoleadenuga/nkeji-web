import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@nkeji-web/components/ui/accordion";
import { Checkbox } from "@nkeji-web/components/ui/checkbox";
import { Label } from "@nkeji-web/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@nkeji-web/components/ui/radio-group";
import Image from "next/image"
import { title } from "process";
import { useState } from "react";

interface PassengerDetailProps {
    data:any;
    activeSeat:string;
    setActiveSeat:any
}

const SeatSelectionCard:React.FC<PassengerDetailProps> = ({setActiveSeat, activeSeat, data})=>{
    return (
        <div 
        onClick={() => setActiveSeat(data.title)}
        className="w-[33%] bg-[#F2EEFB] rounded-lg px-5 pt-4 pb-8 cursor-pointer flex flex-col space-y-3 ">
            <div className="flex justify-between items-center">
           
              <Image height={15} width={15} src={data.icon}alt=""  />
              <RadioGroupItem
                    className={`${
                        activeSeat === data.title
                        ? "border-primary"
                        : "border-[#A3A7AB]"
                    }`}
                    value={data.title}
                    id={data.title}
                  />
             
              </div>
                <p className="text-base inter-semibold">{data.title}</p>
                <p className="text-[#1B1E21] text-xs ">
                We will automatically select your seats, you can review before proceeding
                </p>

           

        </div>
    )
}


const SeatSelection = ()=>{
    const [] = useState('')
  const stops = [
    {
        title:'Sit Together',
        icon:"/assets/seat-1.svg"
    },
    {
        title:'Select your seats',
        icon:"/assets/seat-2.svg"
    },
    {
        title:'Random Seating',
        icon:"/assets/seat-3.svg"
    },
  ];

    const [activeStop, setActiveStop] = useState(stops[0].title);
    const [toggleStop, setToggleStop] = useState(true);
    return (
        <div className="bg-white w-full py-4 px-5">
            <div className="flex justify-between items-start">
                <div>
                <h3 className="text-lg inter-bold">Seat Selection</h3>
                </div>
            <div className="">
              <p className="text-base inter-semibold ">From £5,541.95</p>
            <p className=" text-right text-xs">Per seat</p>

            </div>
            </div>
          
            <RadioGroup defaultValue={stops[0].title} className="flex space-x-5 mt-5 mb-3">
            {stops.map((stop) => {
              return (
                <SeatSelectionCard key={stop.title} setActiveSeat={setActiveStop}  activeSeat={activeStop} data={stop} />

              );
            })}
          </RadioGroup>
        {/* <div className="flex space-x-5 mt-5 mb-3">
            <SeatSelectionCard seatIcon={"/assets/seat-1.svg"} seatTitle="Sit Together" />
            <SeatSelectionCard seatIcon={"/assets/seat-2.svg"} seatTitle="Select your seats" />
            <SeatSelectionCard seatIcon={"/assets/seat-3.svg"} seatTitle="Random Seating" />
            
        </div> */}


        </div>
    )
}

export default SeatSelection