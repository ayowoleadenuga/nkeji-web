import Image from "next/image";

interface BaggageReviewCardProps {
  place:string
  index: number;
  }
const BaggageReviewCard:React.FC<BaggageReviewCardProps> = ({place}) => {
  return (
    <div className="bg-[#F2EEFB] rounded-xl w-[26%] overflow-hidden">
      <div className="px-6 pt-6 pb-10">
        <h3 className="inter-semibold text-base">Flight to {place}</h3>
        {/* <p className="text-xs inter-semibold text-[#A3A7AB] pt-1 ">On each flight</p> */}
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
            <p className="text-xs">3 Carry on bag</p>
            <p className="text-[#7F56D9] text-xs ">Max weight is 12kg</p>
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
            <p className="text-xs">3 checked bags</p>
            <p className="text-[#7F56D9] text-xs ">Max weight is 23kg</p>

          </div>
        </div>
    <div className="mt-5">
      <p className="text-[#4B525A] text-xs inter-semibold underline">View baggage per traveller</p>
    </div>
      </div>
    </div>
  );
};

const BaggageReview= ({
}) => {

  return (
    <div>
        <div className="bg-white w-full py-4 px-5">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg inter-bold">Baggage</h3>
              <p className="text-sm ">
              Total number of bags included for all travellers
              </p>
            </div>
          </div>

          <div className="flex space-x-4 mt-5 mb-3 ">
           <BaggageReviewCard place={'Abuja'} index={1} />
           <BaggageReviewCard place={'Birmingham'} index={2}  />
          </div>
        </div>
    
  
    </div>
  );
};

export default BaggageReview;
