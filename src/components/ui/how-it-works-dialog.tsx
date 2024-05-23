import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

const HowItWorksDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Image
          height={18}
          width={18}
          layout="intrinsic"
          src="/assets/circle-info-purple.svg"
          alt=""
          className=""
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <h3 className="text-center">How it works</h3>
          </DialogTitle>
          <DialogDescription>
            <div className="mt-3 pt-3 text-center border-t">
              With Fly Now Pay Later, booking your flight is simple and
              flexible. You pay just 25% of the total flight amount upfront as a
              down payment. Then, you can spread the remaining balance over 5
              months, making monthly repayments. This allows you to enjoy your
              flight now and manage your payments over time.
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default HowItWorksDialog;
