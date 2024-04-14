import Image from "next/image";

export const CustomerBenefits = () => {
  return (
        <div className="mt-10 bg-[#FAFAFA] p-10 md:p-20">
        <Image
    layout="fixed"
    className="w-full cursor-pointer"
    src="/assets/Referral.png"
    alt="get started icon"
    width={754}
    height={347}
    quality={100}

/>

        </div>
     
  );
};
