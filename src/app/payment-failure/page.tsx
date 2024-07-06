import { Button } from "@nkeji-web/components/ui/button";
import { CircleXIcon } from "lucide-react";
import React from "react";

const PaymentFailure = () => {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <CircleXIcon className="mx-auto h-12 w-12 text-red-500" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Payment Failed
        </h1>
        <p className="mt-4 text-muted-foreground">
          We&apos;re sorry, but your payment was unsuccessful. Please check your
          payment details and try again.
        </p>
        <div className="mt-6">
          <Button className="w-full bg-[#7F56D9] rounded-full text-white inter-semibold">
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailure;
