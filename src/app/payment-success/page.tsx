import { CircleCheckIcon } from "lucide-react";
import React from "react";

const PaymentSuccess = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col items-center justify-center min-h-screen py-12 space-y-4 md:py-24">
        <div className="flex flex-col items-center justify-center space-y-2">
          <CircleCheckIcon className="h-12 w-12 text-green-500" />
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Payment successful
          </h1>
          <p className="max-w-[600px] text-center text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            Your payment has been confirmed and your booking is now being
            processed. You will receive an email confirming your flight
            reservation. Thank you for booking with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
