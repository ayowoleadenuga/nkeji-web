import ProtectionDialog from "@nkeji-web/components/ui/cancellation-protection-dialog";
import { Dialog, DialogTrigger } from "@nkeji-web/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";

const CancellationProtection = () => {
  const [openCancellationPopUp, setOpenCancellationPopUp] = useState(false)
  return (
    <div className="bg-[#F2EEFB] w-full px-5 pt-6 pb-10">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg inter-semibold text-[#1B1E21]">
          Cancellation Protection
        </h3>
        <p className="text-[#7F56D9] text-lg inter-semibold">£300</p>
      </div>
      <div className="flex flex-col space-y-3">
        <div>
          <div className="flex space-x-2 items-start">
            <Image
              height={15}
              width={15}
              src="/assets/protect-booking.svg"
              alt=""
              className="mt-1"
            />
            <div>
              <p className="text-base inter-semibold">
                Yes, protect my booking
              </p>
              <p className="text-[#A3A7AB] text-xs inter-semibold">
                This booking can be fully refunded for any of{" "}
                <Dialog>
                <DialogTrigger>
                <span
                className="underline text-[#7F56D9] cursor-pointer">these reasons.</span>
              </DialogTrigger>
              <ProtectionDialog />

                </Dialog>
               
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex space-x-2">
            <Image
              height={15}
              width={15}
              src="/assets/unprotect-booking.svg"
              alt=""
            />
            <div>
              <p className="text-base inter-semibold">
               No, I don&apos;t need protection
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CancellationProtection
