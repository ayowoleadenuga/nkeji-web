import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@nkeji-web/components/ui/accordion";
import Image from "next/image"

interface PassengerDetailProps {
    index:number;
    gender:string
}

interface RequestProps {
    label:string;
    placeHolder:string;
}

const PassengerDetail:React.FC<PassengerDetailProps> = ({index, gender})=>{
    return (
        <div className="w-[33%] bg-[#F2EEFB] rounded-lg px-5 py-3 flex justify-between items-center">
            <div className="flex items-center space-x-2">

            <div className={`rounded-full  h-[32px] w-[32px] flex justify-center items-center
            ${gender.toLowerCase().includes('female') ? 'bg-[#7F56D9]':'bg-[#D7CBF3]'}
            `}>
              <Image height={15} width={15} src={gender.toLowerCase().includes('female') ? "/assets/contact.svg" :"/assets/contact-purple.svg" }alt=""  />
            </div>
            <div>
                <p className="text-base inter-semibold">Passenger {index}</p>
                <p className="text-[#A3A7AB] text-base inter-medium">{gender}</p>
            </div>

            </div>
            <Image height={15} width={15} src="/assets/edit.svg" alt=""  className="cursor-pointer"/>

        </div>
    )
}

const RequestsInput:React.FC<RequestProps> = ({label, placeHolder})=>{
    return (
        <div className="flex flex-col space-y-1 w-[180px]">
            <label htmlFor={label}>{label}</label>
      <input type="text" id={label} placeholder={placeHolder} 
         className="border border-[#D0D5DD] rounded-lg bg-white p-3"
         />
      

        </div>
    )
}

const PassengerDetails = ()=>{
    return (
        <div className="bg-white w-full py-4 px-5">
            <div className="flex justify-between items-start">
                <div>
                <h3 className="text-lg inter-bold">Who&apos;s flying?</h3>
            <p className="text-sm "><b>Note:</b> &quot;First Name&quot; and &quot;Last Name&quot; must match your travel document exactly.</p>
                </div>
            <span className="flex items-center space-x-2">
              <Image height={15} width={15} src="/assets/passenger.svg" alt=""  color="#8A3FFC"/>
              <p>3 Passengers</p>
            </span>
            </div>
          
        
        <div className="flex space-x-5 mt-5 mb-3">
            <PassengerDetail index={1} gender="Female" />
            <PassengerDetail index={2} gender="Male" />
            <PassengerDetail index={2} gender="Young male" />
        </div>

        <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Meal, frequent flyers, special assistance and additional requests?</AccordionTrigger>
    <AccordionContent>
      <div className="flex flex-wrap w-[80%] gap-4">
        <RequestsInput label="Meal preference" placeHolder="None" />
        <RequestsInput label="Special assistance" placeHolder="None" />
        <RequestsInput label="Addition requests" placeHolder="Request to book cycle" />
        <RequestsInput label="Frequent flyer program" placeHolder="None" />
        <RequestsInput label="Frequent flyer number" placeHolder="frequent flyer number"/>      
      </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>

        </div>
    )
}

export default PassengerDetails