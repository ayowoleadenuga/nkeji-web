import Image from "next/image";
interface SubHeaderProps {
  departure: string;
  destination?: string;
}
const SubHeader = ({ departure, destination }: SubHeaderProps) => {
  return (
    <div className="flex justify-between items-center bg-white w-full px-6 lg:px-20 mt-6">
      <div className=" flex space-x-3 items-center">
        <h3 className="inter-bold text-2xl">Your flight details</h3>
        {destination && (
          <p className="text-[#A3A7AB] inter-bold text-base">{`${departure} - ${destination}`}</p>
        )}
      </div>
      <div className="ml-auto flex items-center space-x-1">
        <div className="text-[#7F56D9] text-sm inter-semibold underline mr-2">
          View details
        </div>
        <Image
          height={10}
          width={10}
          layout="intrinsic"
          src="/assets/dropdown.svg"
          alt=""
          className="ml-2"
        />
      </div>
      <div></div>
    </div>
  );
};

export default SubHeader;
