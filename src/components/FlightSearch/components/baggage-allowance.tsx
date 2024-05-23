import Image from "next/image";
import { useState } from "react";

interface BaggageAllowanceProps {
  setCurrentTab?: any;
  index?: number;
}

interface BaggageAllowanceCardProps {
    isChecked:boolean
    setIsChecked: any;
    index:number
  }
const BaggageAllowanceCard:React.FC<BaggageAllowanceCardProps> = ({isChecked,setIsChecked, index}) => {
  const handleCheck = () => {
    setIsChecked((prev:any) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };
  return (
    <div className="bg-[#F2EEFB] rounded-xl w-[32.5%] overflow-hidden">
      <div className="px-6 pt-6 pb-10">
        <h3 className="inter-semibold text-base">Passenger&apos;s name</h3>
        <p className="text-xs inter-semibold text-[#A3A7AB] pt-1 ">On each flight</p>
        <div className=" mt-5 flex items-center space-x-2">
          <Image
            height={32}
            width={32}
            layout="intrinsic"
            src="/assets/luggage.svg"
            alt=""
            className="cursor-pointer mb-1"
          />
          <div className="inter-semibold">
            <p className="text-xs">Carry on bag</p>
            <p className="text-[#7F56D9] text-xs ">Max weight is 2kg</p>
          </div>
        </div>
        <div className=" mt-5 flex items-center space-x-2">
        <Image
            height={32}
            width={32}
            layout="intrinsic"
            src="/assets/checked-luggage.svg"
            alt=""
            className="cursor-pointer mb-1"
          />
          <div className="inter-semibold">
            <p className="text-xs">2 checked bags</p>
            <p className="text-[#7F56D9] text-xs ">Max weight is 23kg</p>

          </div>
        </div>
      </div>
      <div className="bg-[#D7CBF3] p-6">
      <div className=" flex items-center space-x-2">
          <Image
            height={32}
            width={32}
            layout="intrinsic"
            src={isChecked ? "/assets/checked.svg" : "/assets/add.svg"}
            alt=""
            className="cursor-pointer mb-1"
            onClick={handleCheck}
          />
          <div className="inter-semibold text-xs text-[#1B1E21] flex flex-col space-y-1">
            <p className="">Add extra luggage</p>
            <p className="  ">+ £59.66</p>
            <p className="">Max weight is 23kg</p>

          </div>
        </div>
      </div>
    </div>
  );
};

const BaggageAllowance: React.FC<BaggageAllowanceProps> = ({

}) => {
  const [isChecked, setIsChecked] = useState([true, false, false]);


  return (
    <div>
        <div className="bg-white w-full py-4 px-5">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg inter-bold">Included baggage allowance</h3>
             
            </div>
           
          </div>

          <div className="flex justify-between mt-5 mb-3">
           <BaggageAllowanceCard isChecked={isChecked[0]} setIsChecked={setIsChecked} index={0} />
           <BaggageAllowanceCard isChecked={isChecked[1]} setIsChecked={setIsChecked} index={1} />
           <BaggageAllowanceCard isChecked={isChecked[2]} setIsChecked={setIsChecked}  index={2}/>
          </div>
        </div>
    
  
    </div>
  );
};

export default BaggageAllowance;
