import Image from "next/image";
import Link from "next/link";

export const ExperiencesComponent = () => {
  return (
    <div className="">
      <div className="">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-[#1B1E21] mb-5 md:w-2/5 lg:w-2/5 mx-auto">
          Empowering Travelers with Financial Flexibility
        </h2>
        <p className="text-[#717171] text-base md:text-lg lg:text-xl inter-medium md:w-3/5 lg:w-3/5 mx-auto">
          Experience financial flexibility, zero interest installment plans,
          convertible points rewards, tailored packaged holidays, exclusive
          last-minute flight deals, and inclusive financial solutions.
        </p>
      </div>
      <div className="bg-[#FAFAFA] p-10 md:p-20 mt-10 flex flex-col md:flex-row justify-between items-center">
        <Image
          height={1}
          width={1}
          layout="intrinsic"
          className="w-full md:w-[50%] mb-5 md:mb-0"
          src="/assets/exp-1.svg"
          alt=""
        />
        <div className="w-full md:w-[45%]">
          <h2 className="text-xl md:text-2xl lg:text-4xl inter-bold text-[#1B1E21] mb-5 md:mx-0 text-left">
            Escape the Burden of High <br /> Interest Rates
          </h2>
          <ul className="flex flex-col space-y-4 text-base md:text-lg text-left">
            <li className="text-[#4B525A] flex items-center">
              <Image
                height={1}
                width={1}
                layout="intrinsic"
                className="pr-2"
                src="/assets/check.svg"
                alt=""
              />
              Experience a greater financial flexibility
            </li>
            <li className="text-[#4B525A] flex items-center">
              <Image
                height={1}
                width={1}
                layout="intrinsic"
                className="pr-2"
                src="/assets/check.svg"
                alt=""
              />
              Enjoy a more relaxed and worry-free booking process
            </li>
            <li className="text-[#4B525A] flex items-center">
              <Image
                height={1}
                width={1}
                layout="intrinsic"
                className="pr-2"
                src="/assets/check.svg"
                alt=""
              />
              Enjoy an affordable and accessible Travel Experiences
            </li>
          </ul>
          <Link
            href="/"
            className="text-[#7F56D9] text-base md:text-lg inter-bold flex items-center space-x-4 mt-5"
          >
            <span className="underline">Explore now</span>
            <Image
              height={1}
              width={1}
              layout="intrinsic"
              src="/assets/arrow-up.svg"
              alt=""
            />
          </Link>
        </div>
      </div>

      <div className="bg-[#D2F1F2] p-10 md:p-20 mt-10 flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-[50%]">
          <h2 className="text-xl md:text-2xl lg:text-4xl inter-bold text-[#114A4C] mb-5 md:mx-0 text-left">
            Empowering Immigrants with <br /> Low Credit Scores
          </h2>
          <ul className="flex flex-col space-y-4 text-base md:text-lg text-left">
            <li className="text-[#114A4C] flex items-center">
              <Image
                height={1}
                width={1}
                layout="intrinsic"
                className="pr-2"
                src="/assets/check-green.svg"
                alt=""
              />
              Enjoy Inclusive Travel Access without limitations
            </li>
            <li className="text-[#114A4C] flex items-center">
              <Image
                height={1}
                width={1}
                layout="intrinsic"
                className="pr-2"
                src="/assets/check-green.svg"
                alt=""
              />
              Experience a streamlined and hassle-free booking experience
            </li>
            <li className="text-[#114A4C] flex items-center">
              <Image
                height={1}
                width={1}
                layout="intrinsic"
                className="pr-2"
                src="/assets/check-green.svg"
                alt=""
              />
              Fulfil your Travel Aspirations
            </li>
            <li className="text-[#114A4C] flex items-center">
              <Image
                height={1}
                width={1}
                layout="intrinsic"
                className="pr-2"
                src="/assets/check-green.svg"
                alt=""
              />
              Building/ Improve your Creditworthiness
            </li>
          </ul>
          <Link
            href="/"
            className="text-[#7F56D9] text-base md:text-lg inter-bold flex items-center space-x-4 mt-5"
          >
            <span className="underline">Explore now</span>
            <Image
              height={1}
              width={1}
              layout="intrinsic"
              src="/assets/arrow-up.svg"
              alt=""
            />
          </Link>
        </div>
        <Image
          height={1}
          width={1}
          layout="intrinsic"
          className="w-full md:w-[50%] mt-10 md:mt-0"
          src="/assets/exp-2.svg"
          alt=""
        />
      </div>

      <div className="bg-[#FAFAFA] p-10 md:p-20 mt-10 flex flex-col md:flex-row justify-between items-center">
        <Image
          height={1}
          width={1}
          layout="intrinsic"
          className="w-full md:w-[50%] mb-5 md:mb-0"
          src="/assets/exp-3.svg"
          alt=""
        />
        <div className="w-full md:w-[45%]">
          <h2 className="text-xl md:text-2xl lg:text-4xl inter-bold text-[#1B1E21] mb-5 md:mx-0 text-left">
            Say Goodbye to Immediate <br /> Lack of Funds
          </h2>
          <ul className="flex flex-col space-y-4 text-base md:text-lg text-left">
            <li className="text-[#4B525A]">
              Take advantage of limited-time offers, & explore destinations
            </li>
            <li className="text-[#4B525A]">
              Enjoy a stress-free travel planning process.
            </li>
            <li className="text-[#4B525A]">
              With access to financial options, individuals can better plan &
              Allocate travel budget.
            </li>
            <li className="text-[#4B525A]">
              Building/ Improve your Creditworthiness
            </li>
          </ul>
          <Link
            href="/"
            className="text-[#7F56D9] text-base md:text-lg inter-bold flex items-center space-x-4 mt-5"
          >
            <span className="underline">Explore now</span>
            <Image
              height={1}
              width={1}
              layout="intrinsic"
              src="/assets/arrow-up.svg"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
