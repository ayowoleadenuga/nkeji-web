import Image from "next/image";

export const CustomerBenefits = () => {
  return (
    <div className="py-10 md:py-20">
      <div className="">
        <h2 className="text-center text-3xl md:text-4xl lg:text-[40px] font-bold text-[#cdcdcd] mb-5 md:w-2/3 lg:w-2/5 mx-auto">
          What’s In It For Our Customers?
        </h2>
        <p className="text-[#717171] text-base md:text-lg inter-medium mx-auto md:w-2/3 lg:w-2/5">
          Step into a world of incredible benefits that await you when you
          choose Nkeji.
        </p>
        <div className="mt-10 bg-[#FAFAFA] p-10 md:p-20">
          <Image
            height={1}
            width={1}
            layout="intrinsic"
            className="w-full cursor-pointer"
            src="/assets/get-started.png"
            alt="get started icon"
            placeholder="blur"
            blurDataURL="/assets/get-started.png"
          />
        </div>
      </div>
    </div>
  );
};
