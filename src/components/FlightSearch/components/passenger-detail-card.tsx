import Image from "next/image";
import { CrossCircledIcon } from "@radix-ui/react-icons";
interface PassengerDetailProps {
  index: number;
  lastName: string;
  firstName: string;
  title: string;
  isSelected: boolean;
  onEdit: () => void;
}
const PassengerDetailCard: React.FC<PassengerDetailProps> = ({
  index,
  title,
  firstName,
  lastName,
  onEdit,
  isSelected,
}) => {
  return (
    <div className="bg-[#F2EEFB] rounded-lg px-5 py-3 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div
          className={`rounded-full  h-[32px] w-[32px] flex justify-center items-center
              ${isSelected ? "bg-[#7F56D9]" : "bg-[#D7CBF3]"}
              `}
        >
          <Image
            height={15}
            width={15}
            src={
              isSelected ? "/assets/contact.svg" : "/assets/contact-purple.svg"
            }
            alt=""
          />
        </div>
        <div>
          <p className="text-base inter-semibold">Passenger {index + 1}</p>
          <span className="text-[#A3A7AB] text-base inter-medium mr-2">
            {title}
          </span>
          <span className="text-[#A3A7AB] text-base inter-medium mr-1">
            {firstName}
          </span>
          <span className="text-[#A3A7AB] text-base inter-medium">
            {lastName}
          </span>
        </div>
      </div>
      <div onClick={onEdit} className="cursor-pointer ml-6">
        {isSelected ? (
          <CrossCircledIcon stroke="#7F56D9" />
        ) : (
          <Image height={15} width={15} src="/assets/edit.svg" alt="" />
        )}
      </div>
    </div>
  );
};

export default PassengerDetailCard;
