import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="">
      <div className="bg-[#42307D] grid grid-col-12 lg:grid-cols-8 text-[#E9D7FE] p-10 md:p-20 gap-y-10">
        <div className="w-full text-left col-span-12 lg:col-span-3">
          <Image
            height={100}
            width={100}
            layout="intrinsic"
            src="/assets/logo.svg"
            alt=""
          />
          <p className="text-base mt-3">
            Say goodbye to high interest rates and <br /> financial constraints.
          </p>
        </div>
        <div className="w-full text-left flex col-span-6 lg:col-span-1 flex-col space-y-4">
          <p className="text-sm text-[#D6BBFB] inter-bold">Product</p>
          <Link href="/" className="text-base inter-medium">
            Overview
          </Link>
          <Link href="/" className="text-base inter-medium">
            Features
          </Link>
        </div>
        <div className="w-full text-left flex flex-col col-span-6 lg:col-span-1 space-y-4">
          <p className="text-sm text-[#D6BBFB] inter-bold">Company</p>
          <Link href="/" className="text-base inter-medium">
            About Us
          </Link>
          <Link href="/" className="text-base inter-medium">
            Contact
          </Link>
        </div>
        <div className="w-full text-left flex flex-col col-span-6 lg:col-span-1 space-y-4">
          <p className="text-sm text-[#D6BBFB] inter-bold">Resources</p>
          <Link href="/" className="text-base inter-medium">
            Newsletter
          </Link>
          <Link href="/" className="text-base inter-medium">
            Help center
          </Link>
          <Link href="/" className="text-base inter-medium">
            Support
          </Link>
        </div>
        <div className="w-full text-left flex flex-col col-span-6 lg:col-span-1 space-y-4">
          <p className="text-sm text-[#D6BBFB] inter-bold">Social</p>
          <Link href="/" className="text-base inter-medium">
            Twitter
          </Link>
          <Link href="/" className="text-base inter-medium">
            LinkedIn
          </Link>
          <Link href="/" className="text-base inter-medium">
            Facebook
          </Link>
        </div>
        <div className="w-full text-left flex flex-col col-span-6 lg:col-span-1 space-y-4">
          <p className="text-sm text-[#D6BBFB] inter-bold">Legal</p>
          <Link href="/" className="text-base inter-medium">
            Terms
          </Link>
          <Link href="/" className="text-base inter-medium">
            Privacy
          </Link>
          <Link href="/" className="text-base inter-medium">
            Cookies
          </Link>
          <Link href="/" className="text-base inter-medium">
            Contact
          </Link>
        </div>
      </div>

      <div className="px-5 md:px-20 py-10 bg-[#35245B] flex justify-between items-center flex-wrap">
        <p className="text-base text-[#D6BBFB] mb-4 md:mb-0">
          © 2024 Nkeji. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <Image
            height={20}
            width={20}
            layout="intrinsic"
            src="/assets/twitter.svg"
            alt=""
          />
          <Image
            height={20}
            width={20}
            layout="intrinsic"
            src="/assets/linkedin.svg"
            alt=""
          />
          <Image
            height={20}
            width={20}
            layout="intrinsic"
            src="/assets/facebook.svg"
            alt=""
          />
          <Image
            height={20}
            width={20}
            layout="intrinsic"
            src="/assets/github.svg"
            alt=""
          />
          <Image
            height={20}
            width={20}
            layout="intrinsic"
            src="/assets/hands.svg"
            alt=""
          />
          <Image
            height={20}
            width={20}
            layout="intrinsic"
            src="/assets/ball.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
