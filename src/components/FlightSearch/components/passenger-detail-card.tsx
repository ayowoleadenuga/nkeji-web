import Image from "next/image";
interface PassengerDetailProps {
    index: number;
    gender: string;
    setShowPassengerForm?: any;
    showPassengerForm?: boolean
  }
const PassengerDetailCard: React.FC<PassengerDetailProps> = ({
    index,
    gender,
    setShowPassengerForm,
    showPassengerForm
  }) => {
    return (
      <div className="w-[33%] bg-[#F2EEFB] rounded-lg px-5 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div
            className={`rounded-full  h-[32px] w-[32px] flex justify-center items-center
              ${
                gender.toLowerCase().includes("female")
                  ? "bg-[#7F56D9]"
                  : "bg-[#D7CBF3]"
              }
              `}
          >
            <Image
              height={15}
              width={15}
              src={
                gender.toLowerCase().includes("female")
                  ? "/assets/contact.svg"
                  : "/assets/contact-purple.svg"
              }
              alt=""
            />
          </div>
          <div>
            <p className="text-base inter-semibold">Passenger {index}</p>
            <p className="text-[#A3A7AB] text-base inter-medium">{gender}</p>
          </div>
        </div>
        <Image
          onClick={() => setShowPassengerForm(!showPassengerForm)}
          height={15}
          width={15}
          src="/assets/edit.svg"
          alt=""
          className="cursor-pointer"
        />
      </div>
    );
  };

  export default PassengerDetailCard