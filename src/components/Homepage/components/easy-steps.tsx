import Image from "next/image";

export const EasySteps = () => {
  return (
    <div className="bg-[#7F56D9] p-10 md:p-20 flex flex-col md:flex-row justify-between items-center">
      <div className="w-full md:w-[45%] flex flex-col items-start text-left space-y-8 relative">
      <Image
          height={41}
          width={41}
          layout="intrinsic"
          className="rounded-lg absolute left-40 top-38"
          src="/assets/star.svg"
          alt=""
        />
        <button className="how-it-works text-lg text-[#121212] rounded-[100px] px-4 py-2 ">
          How it Works
        </button>
        <h2 className="text-2xl md:text-4xl font-bold text-white text-left">
          Easy Steps to Unlocking the Freedom of Fly Now, Pay Later
        </h2>
        <p className="text-white text-lg">
          Fly Now, Pay Later service and embark on your dream journey without
          financial constraints
        </p>
        <Image
          height={291}
          width={754}
          layout="intrinsic"
          className="rounded-lg"
          src="/assets/easy-step-img.png"
          alt=""
          quality={100}
        />
      </div>
      <div className="w-full md:w-[45%] mt-10 md:mt-0">

     
      <div className=" flex flex-col space-y-8 ">
        <div className="flex items-start space-x-5">
          <div className="bg-white rounded-full h-8 flex justify-center items-center text-black text-sm w-8">
            1
          </div>
          <div className="text-left flex-1">
            <p className="font-bold text-lg md:text-xl text-white tracking-tight mb-4">
              Search & Book Flights
            </p>
            <p className="text-white text-lg">
              Find the perfect flight for your travel plans. Select the Fly Now,
              Pay Later option during the booking process
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-5">
          <div className="bg-white rounded-full h-8 flex justify-center items-center text-black text-sm w-8">
            2
          </div>
          <div className="text-left flex-1">
            <p className="font-bold text-lg md:text-xl text-white tracking-tight mb-4">
              Choose Payment Plan
            </p>
            <p className="text-white text-lg">
              Choose a flexible payment plan that suits your needs
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-5">
          <div className="bg-white rounded-full h-8 flex justify-center items-center text-black text-sm w-8">
            3
          </div>
          <div className="text-left flex-1">
            <p className="font-bold text-lg md:text-xl text-white tracking-tight mb-4">
              Enjoy Your Trip
            </p>
            <p className="text-white text-lg">
              {" "}
              It`s time to embark on your journey.
            </p>
          </div>
        </div>
      </div>
 
      </div>
    </div>
  );
};
