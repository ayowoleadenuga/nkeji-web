import Image from "next/image";

export const CustomerBenefits = () => {
  return (
    <div className="my-10 bg-white py-10 mx-10 md:mx-20 relative h-[300px] flex justify-between items-center rounded-lg" style={{backgroundImage: 'url(/assets/Referral.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
    <div className="relative z-40 px-10 w-[35%] h-full flex flex-col justify-start items-start">
      <h3 className="text-white text-4xl inter-bold text-left">Get Bonuses From Referrals & Usage</h3>
      <p className="text-xl text-white mt-5 text-left">Earn $50 every time you use and refer people to our platform</p>
   <a
   
   className="text-white cursor-pointer inter-semibold mt-4 flex items-center space-x-2  text-base text-left underline "
   >
    <p>

    Get started
    </p>
    <Image
      layout="intrinsic"
      className=""
      src="/assets/arrowup.svg"
      alt="get started icon"
      width={24}
      height={24}
    />
   </a>
    </div>
  
    <Image
      layout="intrinsic"
      className=" cursor-pointer contain absolute right-0 "
      src="/assets/gold.png"
      alt="get started icon"
      width={554}
      height={357}
      quality={100}
    />
  </div>
  
     
  );
};
