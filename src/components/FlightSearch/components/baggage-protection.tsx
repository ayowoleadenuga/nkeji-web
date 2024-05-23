import ProtectionDialog from "@nkeji-web/components/ui/cancellation-protection-dialog";
import { Dialog, DialogTrigger } from "@nkeji-web/components/ui/dialog";
import Image from "next/image";

const BaggageProtection = () => {
  return (
    <div className="bg-[#F2EEFB] w-full px-5 pt-6 pb-10">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg inter-semibold text-[#1B1E21]">
          Lost Baggage Protection
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
                Yes, protect my baggage
              </p>
            
              <Dialog>
                <DialogTrigger>
                <p className="text-[#A3A7AB] cursor-pointer text-xs inter-semibold">
              <span className="text-[#7F56D9]">Get compensation</span> if your baggage is lost or delayed.
              </p>

              </DialogTrigger>
              <ProtectionDialog isBaggage />

                </Dialog>
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
               No, I will risk my baggage
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BaggageProtection
