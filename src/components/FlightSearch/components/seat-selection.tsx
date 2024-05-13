import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@nkeji-web/components/ui/accordion";
import { Checkbox } from "@nkeji-web/components/ui/checkbox";
import Image from "next/image"

interface PassengerDetailProps {
    seatTitle:string;
    seatIcon:string
}

const SeatSelectionCard:React.FC<PassengerDetailProps> = ({seatTitle, seatIcon})=>{
    return (
        <div className="w-[33%] bg-[#F2EEFB] rounded-lg px-5 pt-4 pb-8 cursor-pointer flex flex-col space-y-3 ">
            <div className="flex justify-between items-center">
           
              <Image height={15} width={15} src={seatIcon }alt=""  />
              <Checkbox
              className="rounded-full"
                />
              </div>
                <p className="text-base inter-semibold">{seatTitle}</p>
                <p className="text-[#1B1E21] text-xs ">
                We will automatically select your seats, you can review before proceeding
                </p>

           

        </div>
    )
}


const SeatSelection = ()=>{
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
          
        
        <div className="flex space-x-5 mt-5 mb-3">
            <SeatSelectionCard seatIcon={"/assets/seat-1.svg"} seatTitle="Sit Together" />
            <SeatSelectionCard seatIcon={"/assets/seat-2.svg"} seatTitle="Select your seats" />
            <SeatSelectionCard seatIcon={"/assets/seat-3.svg"} seatTitle="Random Seating" />
            
        </div>


        </div>
    )
}

export default SeatSelection